import {
  IsArray,
  IsEnum,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { PostType } from '../enums/post-type.enum';
import { PostStatus } from '../enums/post-status.enum';
import { CreatePostMetaOptionsDto } from './create-post-meta-options.dto';
import { Type } from 'class-transformer';

export class CreatePostDto {
  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  title: string;

  @IsEnum(PostType)
  @IsNotEmpty()
  postType: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug should be all small letters and uses only "-" and without spaces. For example "my-url"',
  })
  slug: string;

  @IsEnum(PostStatus)
  @IsNotEmpty()
  status: PostStatus;

  @IsString()
  @IsOptional()
  content: string;

  @IsOptional()
  @IsJSON()
  schema: string;

  @IsOptional()
  @IsUrl()
  featuredImageUrl: string;

  @IsISO8601() /* Date format */
  @IsOptional()
  publishOn: Date;

  @IsArray()
  @IsOptional()
  @IsString({
    each: true,
  }) /* To signify that each value in the array is a string */
  @MinLength(3, { each: true }) // Each value should have a length of 3
  tags: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDto)
  // Type decorator
  // Matches the incoming req to the dto
  // Creates an instance of the dto
  // All the properties are validated against the dto
  metaOptions: CreatePostMetaOptionsDto[];
}
