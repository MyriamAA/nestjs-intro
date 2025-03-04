import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

/**
 * DTO for updating a user partially.
 *
 * Extends `CreateUserDto`, making all its properties optional.
 */
export class PatchUserDto extends PartialType(CreateUserDto) {}
