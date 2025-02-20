import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from '../meta-option.entity';
import { Repository } from 'typeorm';
import { CreatePostMetaOptionsDto } from '../dtos/create-post-meta-options.dto';

/**
 * Service for managing MetaOptions.
 * Provides methods to create and save meta options.
 */
@Injectable()
export class MetaOptionsService {
  /**
   * Inject the repository for MetaOption entity.
   * @param metaOptionRepository Repository for interacting with MetaOption entity.
   */
  constructor(
    @InjectRepository(MetaOption)
    private metaOptionRepository: Repository<MetaOption>,
  ) {}

  /**
   * Create a new MetaOption based on the provided data transfer object (DTO).
   * @param createMetaOptionDto Data transfer object containing meta option details.
   * @returns A promise that resolves to the saved MetaOption entity.
   */
  public async create(createMetaOptionDto: CreatePostMetaOptionsDto) {
    const metaOption = this.metaOptionRepository.create(createMetaOptionDto);
    return await this.metaOptionRepository.save(metaOption);
  }
}
