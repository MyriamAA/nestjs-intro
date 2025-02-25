import {
  BadRequestException,
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
  RequestTimeoutException,
} from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';
import { DataSource, Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import { ConfigService, ConfigType } from '@nestjs/config';
import profileConfig from '../config/profile.config';
import { NotFoundError } from 'rxjs';

/**
 * Service for managing user-related operations in the Users table.
 *
 * This service interacts with the Users table to perform CRUD operations.
 * It also uses the AuthService to handle authentication-related checks and
 * dependencies while ensuring circular dependencies are avoided.
 */
@Injectable()
export class UsersService {
  /**
   * Constructs the UsersService with necessary dependencies.
   *
   * @param {AuthService} authService - Service for handling authentication-related operations.
   */
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,

    /**
     * Injecting usersRepository
     */
    @InjectRepository(User)
    private usersRepository: Repository<User>,

    // /**
    //  * Injecting ConfigService
    //  */
    // private readonly configService: ConfigService,

    /**
     * Inject profileConfig
     */
    @Inject(profileConfig.KEY)
    private readonly profileConfiguration: ConfigType<typeof profileConfig>,

    /**
     * Inject datasource
     */

    private readonly dataSource: DataSource,
  ) {}

  /**
   * Retrieves a list of all users from the database.
   *
   * @param {GetUsersParamDto} getUserParamDto - DTO containing filters for user retrieval.
   * @param {number} limit - The maximum number of users to return.
   * @param {number} page - The page number for pagination.
   * @returns {Array<{ firstName: string; email: string }>} Array of user objects containing basic details.
   */
  public findAll(
    getUserParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    throw new HttpException(
      {
        status: HttpStatus.MOVED_PERMANENTLY,
        error: "This endpoint doesn't exist",
        fileName: 'users.service.ts',
        lineNumber: 71,
      },
      HttpStatus.MOVED_PERMANENTLY,
      {
        description: 'Occured becaused the endpoint was permanently moved',
      },
    );
  }

  /**
   * Retrieves a single user by their unique identifier.
   *
   * @param {number} id - The unique ID of the user to retrieve.
   * @returns {{ id: number; firstName: string; email: string }} A user object containing their details.
   */
  public async findOneById(id: number) {
    let user = undefined;

    try {
      user = await this.usersRepository.findOneBy({ id });
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment. Please try again later',
        {
          description: 'Error connecting to the database',
        },
      );
    }

    /**
     * Handle if user does not exist
     */
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
  public async createUser(createUserDto: CreateUserDto) {
    let existingUser = undefined;
    try {
      existingUser = await this.usersRepository.findOne({
        where: { email: createUserDto.email },
      });
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment. Please try again later',
        {
          description: 'Error connecting to the database',
        },
      );
    }
    // Handle exception

    if (existingUser) {
      throw new BadRequestException('The user already exists.');
    }
    // Create a new user
    let newUser = this.usersRepository.create(createUserDto);

    try {
      newUser = await this.usersRepository.save(newUser);
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment. Please try again later',
        {
          description: 'Error connecting to the database',
        },
      );
    }

    return newUser;
  }
  public async createMany(createUsersDto: CreateUserDto[]) {
    let newUsers: User[] = [];
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
  }
}
