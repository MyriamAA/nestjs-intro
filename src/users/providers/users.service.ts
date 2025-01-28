import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';

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
  ): { firstName: string; email: string }[] {
    const isAuth = this.authService.isAuth();
    if (!isAuth) {
      return [];
    }
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
   * @param {string} id - The unique ID of the user to retrieve.
   * @returns {{ id: number; firstName: string; email: string }} A user object containing their details.
   */
  public findOneById(id: string): {
    id: number;
    firstName: string;
    email: string;
  } {
    return {
      id: 1234,
      firstName: 'Alice',
      email: 'alice@doe.com',
    };
  }
}
