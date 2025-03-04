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
    let existingUser;
    try {
      existingUser = await this.usersRepository.findOne({
        where: { email: createUserDto.email },
      });
    } catch (error) {
      throw new RequestTimeoutException('Database connection error');
    }

    if (existingUser) {
      throw new BadRequestException('User already exists.');
    }

    let newUser = this.usersRepository.create(createUserDto);

    try {
      newUser = await this.usersRepository.save(newUser);
    } catch (error) {
      throw new RequestTimeoutException('Database connection error');
    }

    return newUser;
  }

  /**
   * Creates multiple users in batch.
   * @param createManyUsersDto - DTO containing multiple user records.
   * @returns The created users.
   */
  public async createMany(createManyUsersDto: CreateManyUsersDto) {
    return await this.usersCreateManyProvider.createMany(createManyUsersDto);
  }
}
