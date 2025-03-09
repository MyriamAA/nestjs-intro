import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './providers/auth.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SignInDto } from './dtos/signin.dto';
import { Auth } from './decorators/auth.decorator';
import { AuthType } from './enums/auth-type.enum';
import { RefreshTokenDto } from './dtos/refresh-token.dto';

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
  @HttpCode(HttpStatus.OK) // To get a 200 OK instead of 201
  @Auth(AuthType.None)
  public async signIn(@Body() signInDto: SignInDto) {
    return await this.authService.signIn(signInDto);
  }

  @Post('refresh-tokens')
  @HttpCode(HttpStatus.OK) // To get a 200 OK instead of 201
  @Auth(AuthType.None)
  public async refreshTokens(@Body() refreshTokenDto: RefreshTokenDto) {
    return await this.authService.refreshTokens(refreshTokenDto);
  }
}
