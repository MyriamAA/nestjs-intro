import { Module } from '@nestjs/common';
import { MetaOptionsController } from './meta-options.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetaOption } from './meta-option.entity';
import { MetaOptionsService } from './providers/meta-options.service';

/**
 * Module for managing metadata options related to posts.
 */
@Module({
  /**
   * Registers controllers for handling metadata-related routes.
   */
  controllers: [MetaOptionsController],

  /**
   * Imports TypeORM module and registers the MetaOption entity.
   */
  imports: [TypeOrmModule.forFeature([MetaOption])],

  /**
   * Provides the MetaOptionsService for handling business logic.
   */
  providers: [MetaOptionsService],
})
export class MetaOptionsModule {}
