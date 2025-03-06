import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { SignInProvider } from './sign-in.provider';
import { SignInDto } from '../dtos/signin.dto';
// nest generate service auth/providers/auth --flat  --no-spec

/**
 * AuthService class handles the authentication logic of the application.
 * It is responsible for logging users in and checking if a user is authenticated.
 */
@Injectable()
export class AuthService {
  /**
   * Constructs an instance of the AuthService.
   * @param usersService The UsersService instance to interact with user-related data.
   */
  constructor(
    // Injecting the UsersService to interact with user-related data.
    // forwardRef is used to avoid circular dependency issues.
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,

    /**
     * Inject signInProvider
     */
    private readonly signInProvider: SignInProvider,
  ) {}

  /**
   * Handles the login logic for a user.
   * It checks if the user exists, verifies the password, and generates a token for the user.
   * If the user is not found or the password is incorrect, an error is thrown.
   *
   * @returns string A token generated for the logged-in user (typically a JWT token).
   * @throws Error If the user is not found or the password is incorrect.
   * @example 'SAMPLE_TOKEN' - A sample token string returned upon successful login.
   */
  public async signIn(signInDto: SignInDto) {
    return await this.signInProvider.signIn(signInDto);
  }

  /**
   * Checks if a user is authenticated.
   * This is a simplified check that always returns `true`.
   * In a real-world application, this would verify a JWT token or session.
   *
   * @returns boolean `true` indicating the user is authenticated.
   * @example true
   */
  public isAuth(): boolean {
    return true;
  }
}
