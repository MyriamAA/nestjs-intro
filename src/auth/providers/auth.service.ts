import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
// nest generate service auth/providers/auth --flat  --no-spec
@Injectable()
export class AuthService {
  constructor(
    // Injecting the user service
    // Add this to avoid circular dependency
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}
  public login(email: string, password: string) {
    // Check user exists

    const user = this.usersService.findOneById(1234);
    // Login
    // Return token
    return 'SAMPLE_TOKEN';
  }

  public isAuth() {
    return true;
  }
}
