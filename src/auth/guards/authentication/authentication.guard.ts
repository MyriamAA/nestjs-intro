import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AccessTokenGuard } from '../access-token/access-token.guard';
import { AuthType } from 'src/auth/enums/auth-type.enum';
import { AUTH_TYPE_KEY } from 'src/auth/constants/auth.constants';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  private static readonly defaultAuthType = AuthType.Bearer; // So that all routes are protected by a Bearer token

  private readonly authTypeGuardMap: Record<
    AuthType,
    CanActivate | CanActivate[]
  > = {
    [AuthType.Bearer]: this.accessTokenGuard,
    [AuthType.None]: { canActivate: () => true }, // Allows public routes
  };

  constructor(
    private readonly reflector: Reflector,
    private readonly accessTokenGuard: AccessTokenGuard,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // authTypes from reflector

    const authTypes = this.reflector.getAllAndOverride<AuthType[]>(
      AUTH_TYPE_KEY,
      [context.getHandler(), context.getClass()],
    ) || [AuthenticationGuard.defaultAuthType];

    console.log('Auth Types:', authTypes);

    // Convert to an array to handle multiple guards
    const guards = authTypes.flatMap((type) =>
      [].concat(this.authTypeGuardMap[type]),
    );

    console.log('Guards:', guards);

    const error = new UnauthorizedException();

    for (const instance of guards) {
      try {
        const canActivate = await instance.canActivate(context);
        if (canActivate) {
          return true;
        }
      } catch (err) {
        console.error('Guard Error:', err);
      }
    }

    throw error;
  }
}
