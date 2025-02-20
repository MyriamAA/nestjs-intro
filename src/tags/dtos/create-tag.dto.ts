import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

/**
 * Data Transfer Object (DTO) for creating a new tag.
 */
export class CreateTagDto {
  /**
   * The name of the tag.
   *
   * @example "Technology"
   */
  @ApiProperty({
    description: 'The name of the tag',
    example: 'Technology',
  })
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  @MaxLength(256)
  name: string;

  /**
   * The slug for the tag, used in URLs.
   *
   * @example "technology"
   */
  @ApiProperty({
    description: 'A unique slug for the tag, used in URLs',
    example: 'technology',
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug should be all lowercase letters and use only "-" as a separator. For example "my-url"',
  })
  @MaxLength(512)
  slug: string;

  /**
   * A brief description of the tag.
   *
   * @example "Posts related to technology and innovations"
   */
  @ApiPropertyOptional({
    description: 'A brief description of the tag',
    example: 'Posts related to technology and innovations',
  })
  @IsOptional()
  @IsString()
  description: string;

  /**
   * JSON metadata associated with the tag.
   *
   * @example '{"color": "blue"}'
   */
  @ApiPropertyOptional({
    description: 'JSON metadata associated with the tag',
    example: '{"color": "blue"}',
  })
  @IsOptional()
  @IsJSON()
  schema: string;

  /**
   * URL of the featured image for the tag.
   *
   * @example "https://example.com/images/tag-image.jpg"
   */
  @ApiPropertyOptional({
    description: 'URL of the featured image for the tag',
    example: 'https://example.com/images/tag-image.jpg',
  })
  @IsOptional()
  @IsUrl()
  @MaxLength(1024)
  featuredImage: string;
}
