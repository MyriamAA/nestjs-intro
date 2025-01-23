import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

// Extend the create user dto to not repeat the code
export class PatchUserDto extends PartialType(CreateUserDto) {}
