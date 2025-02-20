import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';
import { CreatePostDto } from './create-post.dto';

/**
 * DTO for updating an existing post.
 * Extends `CreatePostDto`, making all fields optional except `id`.
 */
export class PatchPostDto extends PartialType(CreatePostDto) {
  /**
   * The ID of the post to be updated.
   */
  @ApiProperty({
    description: 'The ID of the post that needs to be updated',
    example: 1,
  })
  @IsInt()
  @IsNotEmpty()
  id: number;
}
