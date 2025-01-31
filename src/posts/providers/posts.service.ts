import { Body, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';

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
}
