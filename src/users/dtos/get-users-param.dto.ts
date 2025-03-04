import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

/**
 * DTO class to handle user query parameters.
 * This class will be used to get a user by their specific ID.
 */
export class GetUsersParamDto {
  /**
   * The ID of the user to retrieve.
   * This is an optional field.
   *
   * @example '1234'
   */
  @ApiPropertyOptional({
    description: 'Get user with a specific id',
    example: '1234',
  })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  id?: number;
}
