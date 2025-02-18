import { Body, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { EntityManager } from 'typeorm';
import { Tag } from 'src/tags/tag.entity';
import { TagsService } from 'src/tags/providers/tags.service';
import { PatchPostDto } from '../dto/patch-post.dto';

@Injectable()
export class PostsService {
  constructor(
    /**
     * Injecting Users Service
     */
    private readonly usersService: UsersService,

    /**
     * Inject postsRepository
     */
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>, // Only add repositories for 1-1 relationships so that it doesnt becoeme crowded

    /**
     * Inject metaOptionsRepository
     */
    @InjectRepository(MetaOption)
    private readonly metaOptionsRepository: Repository<MetaOption>,

    /**
     * Inject TagsService
     */
    private readonly tagsService: TagsService,
  ) {}
  public async findAll(userId: string) {
    const posts = await this.postsRepository.find({
      relations: {
        metaOptions: true,
        // author: true,
        // tags: true,
      },
    });

    // Get meta options along with the posts
    // return await this.postsRepository.find({
    //   relations: {
    //     metaOptions: true,
    //   },
    // });

    // Same output if the post entity's OneToOne eager key is set to true
    return posts;
  }
  /**
   * Creating new posts
   */
  public async create(@Body() createPostDto: CreatePostDto) {
    // Find author from DB based on given authorId
    const author = await this.usersService.findOneById(createPostDto.authorId);

    // Find tags
    const tags = await this.tagsService.findMultipleTags(createPostDto.tags);
    // Create post
    // Use the spread operator to create a shallow copy of createPostDto, meaning a new object is passed to create()
    const post = this.postsRepository.create({
      ...createPostDto,
      author: author,
      tags: tags,
    }); // Only use await for the save method because it returns a promise

    // Return the post
    return await this.postsRepository.save(post);
  }

  // public async delete(id: number) {
  //   // Start a transaction to handle both deletes atomically
  //   const queryRunner =
  //     this.postsRepository.manager.connection.createQueryRunner();
  //   await queryRunner.startTransaction();

  //   try {
  //     // Find the post (with related metaOptions loaded)
  //     const post = await this.postsRepository.findOne({
  //       where: { id },
  //       relations: ['metaOptions'],
  //     });
  //     if (!post) {
  //       throw new Error('Post not found');
  //     }

  //     // Delete the post (cascade will handle the metaOption deletion automatically)
  //     await queryRunner.manager.delete(Post, id); // Use delete instead of remove

  //     // Commit the transaction if everything is successful
  //     await queryRunner.commitTransaction();

  //     // Return a success response
  //     return { deleted: true, id };
  //   } catch (error) {
  //     // If any error occurs, rollback the transaction
  //     await queryRunner.rollbackTransaction();

  //     // Log the error and return a failure response
  //     console.error(error);
  //     return { deleted: false, message: error.message };
  //   } finally {
  //     // Release the query runner (important for clean-up)
  //     await queryRunner.release();
  //   }
  // }

  public async update(@Body() patchPostDto: PatchPostDto) {
    // Find the tags
    const tags = await this.tagsService.findMultipleTags(patchPostDto.tags);

    // Find the post
    const post = await this.postsRepository.findOneBy({
      id: patchPostDto.id,
    });

    // Here using a spread operator might be problematic
    // Because it create a copy of the object and this cause an error of duplicate id

    // Update the properties
    post.title = patchPostDto.title ?? post.title; // If title exists in patchPostDto (sent by user) then takes its value, else keep the existing title
    post.content = patchPostDto.content ?? post.content;
    post.status = patchPostDto.status ?? post.status;
    post.postType = patchPostDto.postType ?? post.postType;
    post.slug = patchPostDto.slug ?? post.slug;
    post.featuredImageUrl =
      patchPostDto.featuredImageUrl ?? post.featuredImageUrl;
    post.publishOn = patchPostDto.publishOn ?? post.publishOn;

    // Assign new tags
    post.tags = tags;
    // Save the post and return it

    return await this.postsRepository.save(post);
  }

  public async delete(id: number) {
    // Deleting the post
    await this.postsRepository.delete(id);

    return { deleted: true, id };
  }
}
