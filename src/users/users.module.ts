import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './providers/users.service';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { ConfigModule } from '@nestjs/config';
import { UsersCreateManyProvider } from './providers/users-create-many.provider';
import { CreateUserProvider } from './providers/create-user.provider';
import profileConfig from './config/profile.config';
import { BcryptProvider } from 'src/auth/providers/bcrypt.provider';
import { HashingProvider } from 'src/auth/providers/hashing.provider';
import { FindOneUserByEmailProvider } from './providers/find-one-user-by-email.provider';

// We can only export providers, never controllers
@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    UsersCreateManyProvider,
    CreateUserProvider,
    BcryptProvider,
    {
      provide: HashingProvider, // Tell NestJS to use BcryptProvider when HashingProvider is requested
      useClass: BcryptProvider,
    },
    FindOneUserByEmailProvider,
  ],
  exports: [UsersService],
  // imports: [AuthModule], will cause a circular dependency
  imports: [
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([User]),
    ConfigModule.forFeature(profileConfig),
  ],
})
export class UsersModule {}
