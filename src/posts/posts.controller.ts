import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';
import { PatchPostDto } from './dto/patch-post.dto';
import { GetPostsDto } from './dto/get-posts.dto';

/**
 * Controller for managing posts.
 */
@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  /**
   * Creates an instance of PostsController.
   * @param postsService - The posts service.
   */
  constructor(private readonly postsService: PostsService) {}

  /**
   * Retrieves all posts for a specific user.
   * @param userId - The ID of the user (optional).
   * @returns A list of posts.
   */
  @Get('/:userId?')
  @ApiOperation({ summary: 'Retrieves all posts for a specific user' })
  @ApiParam({
    name: 'userId',
    required: false,
    description: 'User ID (optional)',
  })
  @ApiResponse({ status: 200, description: 'Returns the list of posts' })
  public getPosts(
    @Param('userId') userId: string,
    @Query() postQuery: GetPostsDto,
  ) {
    return this.postsService.findAll(postQuery, userId);
  }

  /**
   * Creates a new blog post.
   * @param createPostDto - The data for the new post.
   * @returns The created post.
   */
  @ApiOperation({ summary: 'Creates a new blog post' })
  @ApiResponse({ status: 201, description: 'Post created successfully' })
  @ApiResponse({ status: 400, description: 'Invalid request data' })
  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  /**
   * Updates an existing blog post.
   * @param patchPostDto - The updated post data.
   * @returns The updated post.
   */
  @ApiOperation({ summary: 'Updates an existing blog post' })
  @ApiResponse({ status: 201, description: 'Post updated successfully' })
  @ApiResponse({ status: 404, description: 'Post not found' })
  @Patch()
  public updatePost(@Body() patchPostDto: PatchPostDto) {
    return this.postsService.update(patchPostDto);
  }

  /**
   * Deletes a post by its ID.
   * @param id - The ID of the post to delete.
   * @returns A success message.
   */
  @ApiOperation({ summary: 'Deletes a post by ID' })
  @ApiQuery({
    name: 'id',
    required: true,
    type: Number,
    description: 'Post ID to delete',
  })
  @ApiResponse({ status: 200, description: 'Post deleted successfully' })
  @ApiResponse({ status: 404, description: 'Post not found' })
  // This method cascades and removes relevant relationships between posts and tags NOT the actual tags
  @Delete()
  public delete(@Query('id', ParseIntPipe) id: number) {
    return this.postsService.delete(id);
  }
}
