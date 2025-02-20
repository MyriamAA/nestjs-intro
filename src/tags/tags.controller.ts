import {
  Body,
  Controller,
  Delete,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { TagsService } from './providers/tags.service';
import { CreateTagDto } from './dtos/create-tag.dto';

/**
 * Controller for handling tag-related API requests.
 */
@Controller('tags')
export class TagsController {
  /**
   * Injects the TagsService.
   * @param tagsService The service responsible for tag operations.
   */
  constructor(private readonly tagsService: TagsService) {}

  /**
   * Creates a new tag.
   * @param createTagDto DTO containing tag data.
   * @returns The created tag.
   */
  @Post()
  public create(@Body() createTagDto: CreateTagDto) {
    return this.tagsService.create(createTagDto);
  }

  /**
   * Deletes a tag by its ID.
   * @param id The ID of the tag to delete.
   * @returns An object indicating whether the deletion was successful.
   */
  @Delete()
  public async delete(@Query('id', ParseIntPipe) id: number) {
    return this.tagsService.delete(id);
  }

  /**
   * Soft deletes a tag by its ID, marking it as deleted without removing it from the database.
   * @param id The ID of the tag to soft delete.
   * @returns An object indicating whether the soft deletion was successful.
   */
  @Delete('soft-delete')
  public async softDelete(@Query('id', ParseIntPipe) id: number) {
    // Route is /tags/soft-delete
    return this.tagsService.softRemove(id);
  }
}
