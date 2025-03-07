import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AUTH_TYPE_KEY, REQUEST_USER_KEY } from '../constants/auth.constants';
import { AuthType } from '../enums/auth-type.enum';
import { ActiveUserData } from '../interfaces/active-user-data.interface';

export const ActiveUser = createParamDecorator(
  (field: keyof ActiveUserData, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user: ActiveUserData = request[REQUEST_USER_KEY];

    return field ? user?.[field] : user;
  },
);
