import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './providers/users.service';
import { AuthModule } from 'src/auth/auth.module';

// We can only export providers, never controllers
@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
  // imports: [AuthModule], will cause a circular dependency
  imports: [forwardRef(() => AuthModule)],
})
export class UsersModule {}
