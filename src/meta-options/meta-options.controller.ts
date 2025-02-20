import { Body, Controller, Post } from '@nestjs/common';
import { CreatePostMetaOptionsDto } from './dtos/create-post-meta-options.dto';
import { MetaOptionsService } from './providers/meta-options.service';

/**
 * Controller for managing post metadata options.
 */
@Controller('meta-options')
export class MetaOptionsController {
  /**
   * Injects the MetaOptionsService.
   * @param metaOptionsService The service responsible for metadata operations.
   */
  constructor(private readonly metaOptionsService: MetaOptionsService) {}

  /**
   * Creates a new meta option for a post.
   * @param createPostMetaOptionDto DTO containing metadata information.
   * @returns The created meta option.
   */
  @Post()
  public createMetaOption(
    @Body() createPostMetaOptionDto: CreatePostMetaOptionsDto,
  ) {
    return this.metaOptionsService.create(createPostMetaOptionDto);
  }
}
