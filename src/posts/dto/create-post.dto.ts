import {
  IsArray,
  IsEnum,
  IsInt,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { PostType } from '../enums/post-type.enum';
import { PostStatus } from '../enums/post-status.enum';
import { CreatePostMetaOptionsDto } from '../../meta-options/dtos/create-post-meta-options.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';

/**
 * DTO for creating a new blog post.
 */
export class CreatePostDto {
  /**
   * The title of the blog post.
   */
  @ApiProperty({
    example: 'This is a title',
    description: 'The title for the blog post',
  })
  @IsString()
  @MinLength(4)
  @MaxLength(512)
  @IsNotEmpty()
  title: string;

  /**
   * The type of post (e.g., 'post', 'page', 'story', 'series').
   */
  @ApiProperty({
    enum: PostType,
    description: "Possible values: 'post', 'page', 'story', 'series'",
  })
  @IsEnum(PostType)
  @IsNotEmpty()
  postType: PostType;

  /**
   * A slug for the post, used in URLs.
   */
  @ApiProperty({
    description: 'A slug for the post (e.g., "my-blog-post")',
    example: 'my-blog-post',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  @MinLength(4)
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug should be all lowercase, use only "-", and have no spaces. Example: "my-url"',
  })
  slug: string;

  /**
   * The publication status of the post (e.g., 'draft', 'scheduled', 'review', 'published').
   */
  @ApiProperty({
    enum: PostStatus,
    description: "Possible values: 'draft', 'scheduled', 'review', 'published'",
  })
  @IsEnum(PostStatus)
  @IsNotEmpty()
  status: PostStatus;

  /**
   * The main content of the post.
   */
  @ApiPropertyOptional({
    description: 'The main content of the post',
    example: 'This is the content of the blog post.',
  })
  @IsString()
  @IsOptional()
  content?: string;

  /**
   * JSON metadata for the post.
   */
  @ApiPropertyOptional({
    description: 'Serialized JSON object containing metadata',
    example:
      '{\r\n "@context": "https://schema.org",\r\n "@type": "Person"\r\n }',
  })
  @IsOptional()
  @IsJSON()
  schema?: string;

  /**
   * The URL of the featured image for the post.
   */
  @ApiPropertyOptional({
    description: 'The URL of the featured image for the post',
    example: 'http://localhost.com/images/image1.jpg',
  })
  @IsOptional()
  @MinLength(4)
  @MaxLength(1024)
  @IsUrl()
  featuredImageUrl?: string;

  /**
   * The publication date of the post.
   */
  @ApiPropertyOptional({
    description: 'The date on which the post is published',
    example: '2024-03-16T07:46:32+0000',
  })
  @Transform(({ value }) => new Date(value))
  @IsOptional()
  publishOn?: Date;

  /**
   * An array of tag IDs associated with the post.
   */
  @ApiPropertyOptional({
    description: 'Array of tag IDs associated with the post',
    example: [1, 2],
  })
  @IsArray()
  @IsOptional()
  @IsInt({ each: true })
  tags?: number[];

  /**
   * Additional meta options for the post.
   */
  @ApiPropertyOptional({
    type: 'object',
    required: false,
    items: {
      type: 'object',
      properties: {
        metavalue: {
          type: 'json',
          description: 'A JSON string containing metadata options',
          example: '{"sidebarEnabled": true}',
        },
      },
    },
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDto)
  // Type decorator
  // Matches the incoming req to the dto
  // Creates an instance of the dto
  // All the properties are validated against the dto
  metaOptions?: CreatePostMetaOptionsDto | null;
}
