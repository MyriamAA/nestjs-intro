import { Injectable } from '@nestjs/common';
import { CreateTagDto } from '../dtos/create-tag.dto';
import { In, Repository } from 'typeorm';
import { Tag } from '../tag.entity';
import { InjectRepository } from '@nestjs/typeorm';

//npx nest generate service tags/providers/tags --flat --no-spec
@Injectable()
export class TagsService {
  constructor(
    /**
     * Inject tagsRepository
     */
    @InjectRepository(Tag)
    private readonly tagsRepository: Repository<Tag>,
  ) {}
  /**
   * Creating new tags
   */
  public async create(createTagDto: CreateTagDto) {
    const tag = this.tagsRepository.create(createTagDto);

    return await this.tagsRepository.save(tag);
  }

  public async findMultipleTags(tags: number[]) {
    const results = await this.tagsRepository.find({
      where: {
        id: In(tags), // Finds all the tags with ids within this array
      },
    });

    return results;
  }

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

  public async softRemove(id: number) {
    // Soft delete creates a timestamp and not remove it from DB
    await this.tagsRepository.softDelete(id);

    return { deleted: true, id };
  }
}
