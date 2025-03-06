import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './providers/auth.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SignInDto } from './dtos/signin.dto';

/**
 * AuthController handles authentication-related API requests.
 * It provides routes for logging in and checking user authentication.
 */
@ApiTags('Authentication') // Tagging the controller for authentication-related endpoints.
@Controller('auth')
export class AuthController {
  constructor(
    // Injecting the AuthService to handle authentication logic.
    private readonly authService: AuthService,
  ) {}

  @Post('sign-in')
  public async signIn(@Body() signInDto: SignInDto) {
    return;
  }
}
