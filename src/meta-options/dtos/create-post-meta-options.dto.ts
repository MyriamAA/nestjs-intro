import { IsJSON, IsNotEmpty, IsString } from 'class-validator';

/**
 * DTO for creating metadata options for a post.
 */
export class CreatePostMetaOptionsDto {
  /**
   * The meta value as a JSON string.
   *
   * @example '{"sidebarEnabled": true}'
   */
  @IsNotEmpty()
  @IsJSON()
  metaValue: string;
}
