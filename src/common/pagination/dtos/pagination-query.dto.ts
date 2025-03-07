import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

/**
 * DTO for handling pagination queries.
 */
export class PaginationQueryDto {
  /**
   * The number of items per page. Default is 10.
   * @example 10
   */
  @IsOptional()
  @IsPositive()
  limit?: number = 10;

  /**
   * The page number to retrieve. Default is 1.
   * @example 1
   */
  @IsOptional()
  @IsPositive()
  page?: number = 1;
}
