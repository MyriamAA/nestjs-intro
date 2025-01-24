import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './providers/auth.service';
import { UsersModule } from 'src/users/users.module';
// nest generate module auth
@Module({
  controllers: [AuthController],
  providers: [AuthService],
  // imports: [UsersModule], will cause a circular dependency
  imports: [forwardRef(() => UsersModule)],
  exports: [AuthService],
})
export class AuthModule {}
