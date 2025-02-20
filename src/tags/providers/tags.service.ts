import { Injectable } from '@nestjs/common';
import { CreateTagDto } from '../dtos/create-tag.dto';
import { In, Repository } from 'typeorm';
import { Tag } from '../tag.entity';
import { InjectRepository } from '@nestjs/typeorm';

//npx nest generate service tags/providers/tags --flat --no-spec

/**
 * Service for handling tag-related operations.
 */
@Injectable()
export class TagsService {
  /**
   * Injects the repository for interacting with the `Tag` entity.
   * @param tagsRepository The TypeORM repository for the `Tag` entity.
   */
  constructor(
    @InjectRepository(Tag)
    private readonly tagsRepository: Repository<Tag>,
  ) {}

  /**
   * Creates a new tag.
   * @param createTagDto Data Transfer Object (DTO) containing tag details.
   * @returns The created tag.
   */
  public async create(createTagDto: CreateTagDto) {
    const tag = this.tagsRepository.create(createTagDto);
    return await this.tagsRepository.save(tag);
  }

  /**
   * Finds multiple tags based on an array of tag IDs.
   * @param tags An array of tag IDs.
   * @returns A list of found tags.
   */
  public async findMultipleTags(tags: number[]) {
    const results = await this.tagsRepository.find({
      where: {
        id: In(tags), // Finds all the tags with IDs within this array.
      },
    });

    return results;
  }

  /**
   * Deletes a tag by its ID.
   * @param id The ID of the tag to delete.
   * @returns An object indicating whether the deletion was successful.
   */
  public async delete(id: number) {
    // Check if the tag exists before deleting
    const tag = await this.tagsRepository.findOne({
      where: { id },
    });

    if (!tag) {
      return { deleted: false, message: 'Tag not found' };
    }

    // Proceed with deletion
    await this.tagsRepository.delete(id);

    return { deleted: true, id };
  }

  /**
   * Soft deletes a tag by its ID, marking it as deleted without removing it from the database.
   * @param id The ID of the tag to soft delete.
   * @returns An object indicating whether the soft deletion was successful.
   */
  public async softRemove(id: number) {
    await this.tagsRepository.softDelete(id);
    return { deleted: true, id };
  }
}
