import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import { ConfigService, ConfigType } from '@nestjs/config';
import profileConfig from '../config/profile.config';

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
    // Test the new config
    console.log(this.profileConfiguration);
    console.log(this.profileConfiguration.apiKey);

    return [
      {
        firstName: 'John',
        email: 'john@doe.com',
      },
      {
        firstName: 'Alice',
        email: 'alice@doe.com',
      },
    ];
  }

  /**
   * Retrieves a single user by their unique identifier.
   *
   * @param {number} id - The unique ID of the user to retrieve.
   * @returns {{ id: number; firstName: string; email: string }} A user object containing their details.
   */
  public async findOneById(id: number) {
    return await this.usersRepository.findOneBy({
      id,
    });
  }
  public async createUser(createUserDto: CreateUserDto) {
    // Check if email is unique
    const existingUser = await this.usersRepository.findOne({
      where: { email: createUserDto.email },
    });
    // Handle exception

    // Create a new user
    let newUser = this.usersRepository.create(createUserDto);

    newUser = await this.usersRepository.save(newUser);

    return newUser;
  }
}
