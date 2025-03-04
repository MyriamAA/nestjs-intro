import {
  BadRequestException,
  Body,
  Injectable,
  NotFoundException,
  RequestTimeoutException,
} from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { TagsService } from 'src/tags/providers/tags.service';
import { PatchPostDto } from '../dto/patch-post.dto';
import { GetPostsDto } from '../dto/get-posts.dto';
import { PaginationProvider } from 'src/common/pagination/providers/pagination.provider';

/**
 * Service responsible for handling post-related operations.
 */
@Injectable()
export class PostsService {
  /**
   * Constructor to inject dependencies.
   * @param usersService Service to handle user-related operations.
   * @param postsRepository Repository for managing Post entities.
   * @param metaOptionsRepository Repository for managing MetaOption entities.
   * @param tagsService Service for handling tag-related operations.
  * @param paginationProvider Service for handling pagination operations.

   */
  constructor(
    private readonly usersService: UsersService,

    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>, // Only add repositories for 1-1 relationships so that it doesnt become crowded

    @InjectRepository(MetaOption)
    private readonly metaOptionsRepository: Repository<MetaOption>,

    private readonly tagsService: TagsService,

    private readonly paginationProvider: PaginationProvider,
  ) {}

  /**
   * Retrieves all posts along with their meta options.
   * @param userId The ID of the user requesting the posts.
   * @returns A list of posts with related meta options.
   */
  public async findAll(postQuery: GetPostsDto, userId: string) {
    return await this.paginationProvider.paginateQuery(
      {
        limit: postQuery.limit,
        page: postQuery.page,
      },
      this.postsRepository,
    );

    // Get meta options along with the posts
    // return await this.postsRepository.find({
    //   relations: {
    //     metaOptions: true,
    //   },
    // });
  }

  /**
   * Creates a new post.
   * @param createPostDto DTO containing post creation details.
   * @returns The newly created post.
   */
  public async create(@Body() createPostDto: CreatePostDto) {
    const author = await this.usersService.findOneById(createPostDto.authorId);
    const tags = await this.tagsService.findMultipleTags(createPostDto.tags);

    // Use the spread operator to create a shallow copy of createPostDto, meaning a new object is passed to create()
    const post = this.postsRepository.create({
      ...createPostDto,
      author,
      tags,
    }); // Only use await for the save method because it returns a promise

    return await this.postsRepository.save(post);
  }

  /*
   public async delete(id: number) {
    // Start a transaction to handle both deletes atomically
    const queryRunner =
      this.postsRepository.manager.connection.createQueryRunner();
    await queryRunner.startTransaction();

    try {
      // Find the post (with related metaOptions loaded)
      const post = await this.postsRepository.findOne({
        where: { id },
        relations: ['metaOptions'],
      });
      if (!post) {
        throw new Error('Post not found');
      }

      // Delete the post (cascade will handle the metaOption deletion automatically)
      await queryRunner.manager.delete(Post, id); // Use delete instead of remove

      // Commit the transaction if everything is successful
      await queryRunner.commitTransaction();

      // Return a success response
      return { deleted: true, id };
    } catch (error) {
      // If any error occurs, rollback the transaction
      await queryRunner.rollbackTransaction();

      // Log the error and return a failure response
      console.error(error);
      return { deleted: false, message: error.message };
    } finally {
      // Release the query runner (important for clean-up)
      await queryRunner.release();
    }
  }
*/

  /**
   * Updates an existing post.
   * @param patchPostDto DTO containing fields to update.
   * @returns The updated post.
   */
  public async update(@Body() patchPostDto: PatchPostDto) {
    let tags = undefined;
    let post = undefined;

    try {
      tags = await this.tagsService.findMultipleTags(patchPostDto.tags);
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment. Please try later',
      );
    }

    /**
     * Number of tags need to be equal
     */

    if (!tags || tags.length !== patchPostDto.tags.length) {
      throw new BadRequestException('Please check your tag IDs.');
    }
    try {
      post = await this.postsRepository.findOneBy({ id: patchPostDto.id });
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment. Please try later',
      );
    }
    if (!post) {
      throw new NotFoundException("This post doesn't exist.");
    }

    post.title = patchPostDto.title ?? post.title;
    post.content = patchPostDto.content ?? post.content;
    post.status = patchPostDto.status ?? post.status;
    post.postType = patchPostDto.postType ?? post.postType;
    post.slug = patchPostDto.slug ?? post.slug;
    post.featuredImageUrl =
      patchPostDto.featuredImageUrl ?? post.featuredImageUrl;
    post.publishOn = patchPostDto.publishOn ?? post.publishOn;
    post.tags = tags;

    try {
      await this.postsRepository.save(post);
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment. Please try later',
      );
    }
    return post;
  }

  /**
   * Deletes a post from the database.
   * @param id The ID of the post to delete.
   * @returns An object indicating the deletion status.
   */
  public async delete(id: number) {
    await this.postsRepository.delete(id);
    return { deleted: true, id };
  }
}
