import { Post } from 'src/posts/post.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * Represents the MetaOption entity, storing metadata for posts.
 */
@Entity()
export class MetaOption {
  /**
   * Unique identifier for the MetaOption.
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Metadata value stored in JSON format.
   * Note: JSON storage is not available in MySQL.
   */
  @Column({
    type: 'json',
    nullable: false,
  })
  metaValue: string;

  /**
   * Timestamp indicating when the record was created.
   */
  @CreateDateColumn()
  createDate: Date;

  /**
   * Timestamp indicating when the record was last updated.
   */
  @UpdateDateColumn()
  updateDate: Date;

  /**
   * Associated post entity (One-to-One relationship).
   * If the post is deleted, the metaOption is also deleted (`CASCADE`).
   */
  @OneToOne(() => Post, (post) => post.metaOptions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  post: Post;
}
