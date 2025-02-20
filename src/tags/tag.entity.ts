import { Post } from 'src/posts/post.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * Entity representing a tag.
 */
@Entity()
export class Tag {
  /**
   * Unique identifier for the tag.
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Name of the tag.
   * @example "Technology"
   */
  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
    unique: true,
  })
  name: string;

  /**
   * URL-friendly slug for the tag.
   * @example "technology"
   */
  @Column({
    type: 'varchar',
    length: 512,
    nullable: false,
    unique: true,
  })
  slug: string;

  /**
   * Optional description of the tag.
   * @example "Posts related to technology and innovations"
   */
  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  /**
   * JSON metadata schema for additional tag details.
   * @example '{"color": "blue"}'
   */
  @Column({
    type: 'text',
    nullable: true,
  })
  schema: string;

  /**
   * URL of the featured image for the tag.
   * @example "https://example.com/images/tag-image.jpg"
   */
  @Column({
    type: 'varchar',
    length: 1024,
    nullable: true,
  })
  featuredImage: string;

  /**
   * Many-to-many relationship with posts.
   */
  @ManyToMany(() => Post, (post) => post.tags, {
    onDelete: 'CASCADE',
  })
  posts: Post[];

  // https://orkhan.gitbook.io/typeorm/docs/decorator-reference
  /**
   * Timestamp indicating when the tag was created.
   */
  @CreateDateColumn()
  createDate: Date;

  /**
   * Timestamp indicating when the tag was last updated.
   */
  @UpdateDateColumn()
  updateDate: Date;

  /**
   * Timestamp indicating when the tag was soft deleted.
   */
  @DeleteDateColumn()
  deletedAt: Date;
}
