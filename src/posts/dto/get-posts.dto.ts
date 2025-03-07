import { IsDate, IsOptional } from 'class-validator';
import { IntersectionType } from '@nestjs/swagger';
import { PaginationQueryDto } from 'src/common/pagination/dtos/pagination-query.dto';

/**
 * Base DTO for fetching posts with optional date filtering.
 */
class GetPostsBaseDto {
  /**
   * Optional start date for filtering posts.
   */
  @IsDate()
  @IsOptional()
  startDate?: Date;

  /**
   * Optional end date for filtering posts.
   */
  @IsDate()
  @IsOptional()
  endDate?: Date;
}

/**
 * DTO for fetching paginated posts with optional date filtering.
 * Extends both `GetPostsBaseDto` and `PaginationQueryDto`.
 */
export class GetPostsDto extends IntersectionType(
  GetPostsBaseDto,
  PaginationQueryDto,
) {}
