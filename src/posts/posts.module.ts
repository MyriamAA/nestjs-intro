import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './providers/posts.service';
import { UsersModule } from 'src/users/users.module';

// Import entire module not only a service (view users module exports key)
@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [UsersModule],
})
export class PostsModule {}
