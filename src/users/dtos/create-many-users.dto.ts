import { IsArray, IsNotEmpty, ValidateNested } from 'class-validator';
import { CreateUserDto } from './create-user.dto';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

/**
 * DTO for creating multiple users at once.
 */
export class CreateManyUsersDto {
  /**
   * List of users to be created.
   *
   * @type {CreateUserDto[]}
   */
  @ApiProperty({
    description: 'Array of user objects to be created.',
    type: 'array',
    required: true,
    items: {
      type: 'User',
    },
  })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateUserDto)
  users: CreateUserDto[];
}
