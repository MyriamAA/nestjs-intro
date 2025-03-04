import {
  ConflictException,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { User } from '../user.entity';
import { DataSource } from 'typeorm';
import { CreateManyUsersDto } from '../dtos/create-many-users.dto';

/**
 * Service responsible for handling bulk user creation.
 * Utilizes a query runner for transaction-based insertion of multiple users.
 */
@Injectable()
export class UsersCreateManyProvider {
  /**
   * Constructor for UsersCreateManyProvider.
   * @param dataSource - The TypeORM DataSource instance for database operations.
   */
  constructor(private readonly dataSource: DataSource) {}

  /**
   * Creates multiple users in a transactional manner.
   * @param createManyUsersDto - DTO containing an array of user objects to be created.
   * @returns Promise<User[]> - A list of successfully created users.
   * @throws {RequestTimeoutException} - If unable to connect to the database.
   * @throws {ConflictException} - If the transaction fails.
   */
  public async createMany(createManyUsersDto: CreateManyUsersDto) {
    const newUsers: User[] = [];
    const queryRunner = this.dataSource.createQueryRunner();

    try {
      // Establish connection and begin transaction
      await queryRunner.connect();

      // Start transaction
      await queryRunner.startTransaction();
    } catch (error) {
      throw new RequestTimeoutException('Could not connect to the database');
    }

    try {
      // Iterate over users and save each one
      for (const user of createManyUsersDto.users) {
        const newUser = queryRunner.manager.create(User, user);
        const result = await queryRunner.manager.save(newUser);
        newUsers.push(result);
      }

      // Commit the transaction upon successful insertion
      await queryRunner.commitTransaction();
    } catch (error) {
      // Rollback transaction in case of failure
      await queryRunner.rollbackTransaction();
      throw new ConflictException('Could not complete the transaction', {
        description: String(error),
      });
    } finally {
      try {
        // Release the query runner connection
        await queryRunner.release();
      } catch (error) {
        throw new RequestTimeoutException('Could not release the connection', {
          description: String(error),
        });
      }
    }

    return newUsers;
  }
}
