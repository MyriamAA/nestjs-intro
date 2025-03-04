import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
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
  ) {}

  /**
   * Handles the login logic for a user.
   * It checks if the user exists, verifies the password, and generates a token for the user.
   * If the user is not found or the password is incorrect, an error is thrown.
   *
   * @param email The email of the user attempting to log in.
   * @param password The password of the user attempting to log in.
   * @returns string A token generated for the logged-in user (typically a JWT token).
   * @throws Error If the user is not found or the password is incorrect.
   * @example 'SAMPLE_TOKEN' - A sample token string returned upon successful login.
   */
  public login(email: string, password: string) {
    // Simulate user finding logic (mocked for demonstration)
    const user = this.usersService.findOneById(1234);

    if (!user) {
      throw new Error('User not found');
    }

    // Additional password check can be added here
    // For now, returning a mock token for successful login
    return 'SAMPLE_TOKEN';
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
