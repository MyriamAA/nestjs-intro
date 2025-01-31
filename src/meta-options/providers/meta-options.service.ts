import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from '../meta-option.entity';
import { Repository } from 'typeorm';
import { CreatePostMetaOptionsDto } from '../dtos/create-post-meta-options.dto';

@Injectable()
export class MetaOptionsService {
  constructor(
    /**
     * Inject metaOptionsRepository
     */
    @InjectRepository(MetaOption)
    private metaOptionRepository: Repository<MetaOption>,
  ) {}

  public async createMetaOption(createMetaOptionDto: CreatePostMetaOptionsDto) {
    const metaOption = this.metaOptionRepository.create(createMetaOptionDto);
    return await this.metaOptionRepository.save(metaOption);
  }
}
