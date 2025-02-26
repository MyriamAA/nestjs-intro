import { Injectable } from '@nestjs/common';
import { User } from '../user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';
import { DataSource } from 'typeorm';

@Injectable()
export class UsersCreateManyProvider {
  constructor(
    /**
     * Inject datasource
     */

    private readonly dataSource: DataSource,
  ) {}
  public async createMany(createUsersDto: CreateUserDto[]) {
    const newUsers: User[] = [];
    // Create Query runner instance
    const queryRunner = this.dataSource.createQueryRunner();
    // Connect query runner to datasource

    await queryRunner.connect();

    // Start transaction
    await queryRunner.startTransaction();

    try {
      for (const user of createUsersDto) {
        const newUser = queryRunner.manager.create(User, user);
        const result = await queryRunner.manager.save(newUser);

        newUsers.push(result);
      }
      // If successful, commit to the database
      await queryRunner.commitTransaction();
    } catch (error) {
      // If unsuccessful rollback
      await queryRunner.rollbackTransaction();
    } finally {
      // Release connection
      await queryRunner.release();
    }
    return newUsers;
  }
}
