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
  public findAll(userId: string) {
    const user = this.usersService.findOneById(userId);
    return [
      {
        user: user,
        title: 'Test Title',
        content: 'Test Content',
      },
      {
        user: user,
        title: 'Test Title 2',
        content: 'Test Content 2',
      },
    ];
  }
  /**
   * Creating new posts
   */
  public async create(@Body() createPostDto: CreatePostDto) {
    // Create metaOptions
    const metaOptions = createPostDto.metaOptions
      ? this.metaOptionsRepository.create(createPostDto.metaOptions)
      : null;

    if (metaOptions) {
      await this.metaOptionsRepository.save(metaOptions);
    }
    // Create post

    const post = this.postsRepository.create({
      ...createPostDto,
    }); // ONly use await for the save method because it returns a promise
    // Add metaOptions to the post

    if (metaOptions) {
      post.metaOptions = metaOptions;
    }
    // Return the post

    return await this.postsRepository.save(post);
  }
}
