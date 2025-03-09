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
import { ConfigType } from '@nestjs/config';
import profileConfig from '../config/profile.config';
import { UsersCreateManyProvider } from './users-create-many.provider';
import { CreateManyUsersDto } from '../dtos/create-many-users.dto';
import { CreateUserProvider } from './create-user.provider';
import { FindOneUserByEmailProvider } from './find-one-user-by-email.provider';
import { FindOneByGoogleIdProvider } from './find-one-by-google-id.provider';

/**
 * Service for managing users.
 */
@Injectable()
export class UsersService {
  /**
   * Constructs the UsersService with necessary dependencies.
   * @param authService - Handles authentication-related operations.
   * @param usersRepository - The repository for managing users in the database.
   * @param profileConfiguration - Injected profile configuration.
   * @param dataSource - The database connection source.
   * @param usersCreateManyProvider - Service to handle bulk user creation.
   * @param createUserProvider - Service to handle password hashing with user creation.
   * @param findOneByEmailProvider - Service to find user by email.

   */
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,

    @InjectRepository(User)
    private usersRepository: Repository<User>,

    @Inject(profileConfig.KEY)
    private readonly profileConfiguration: ConfigType<typeof profileConfig>,

    private readonly dataSource: DataSource,
    private readonly usersCreateManyProvider: UsersCreateManyProvider,

    private readonly createUserProvider: CreateUserProvider,

    private readonly findOneByEmailProvider: FindOneUserByEmailProvider,
    private readonly findOneByGoogleIdProvider: FindOneByGoogleIdProvider,
  ) {}

  /**
   * Retrieves all users with optional filters.
   * @param getUserParamDto - DTO containing filter criteria.
   * @param limit - The number of users to retrieve.
   * @param page - The page number.
   * @returns A list of users.
   * @throws {HttpException} If the endpoint is deprecated.
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
        description: 'The endpoint was permanently moved',
      },
    );
  }

  /**
   * Retrieves a user by ID.
   * @param id - The unique user ID.
   * @returns The user details.
   * @throws {NotFoundException} If the user is not found.
   */
  public async findOneById(id: number) {
    let user;
    try {
      user = await this.usersRepository.findOneBy({ id });
    } catch (error) {
      throw new RequestTimeoutException('Database connection error');
    }

    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  /**
   * Creates a new user.
   * @param createUserDto - Data for creating the user.
   * @returns The created user.
   * @throws {BadRequestException} If the user already exists.
   */
  public async createUser(createUserDto: CreateUserDto) {
    return await this.createUserProvider.createUser(createUserDto);
  }

  /**
   * Creates multiple users in batch.
   * @param createManyUsersDto - DTO containing multiple user records.
   * @returns The created users.
   */
  public async createMany(createManyUsersDto: CreateManyUsersDto) {
    return await this.usersCreateManyProvider.createMany(createManyUsersDto);
  }

  public async findOneByEmail(email: string) {
    return await this.findOneByEmailProvider.findOneByEmail(email);
  }

  public async findOneByGoogleId(googleId: string) {
    return await this.findOneByGoogleIdProvider.findOneByGoogleId(googleId);
  }
}
