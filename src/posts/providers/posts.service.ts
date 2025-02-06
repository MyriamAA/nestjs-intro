import { Body, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { EntityManager } from 'typeorm';

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
    public readonly metaOptionsRepository: Repository<MetaOption>,
  ) {}
  public async findAll(userId: string) {
    const user = this.usersService.findOneById(userId);

    // Get meta options along with the posts
    // return await this.postsRepository.find({
    //   relations: {
    //     metaOptions: true,
    //   },
    // });

    // Same output if the post entity's OneToOne eager key is set to true
    return await this.postsRepository.find({});
  }
  /**
   * Creating new posts
   */
  public async create(@Body() createPostDto: CreatePostDto) {
    // Create post

    const post = this.postsRepository.create(createPostDto); // Only use await for the save method because it returns a promise

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

  public async delete(id: number) {
    // Deleting the post
    await this.postsRepository.delete(id);

    return { deleted: true, id };
  }
}
