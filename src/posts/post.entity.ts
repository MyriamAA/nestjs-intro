import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PostType } from './enums/post-type.enum';
import { PostStatus } from './enums/post-status.enum';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { User } from 'src/users/user.entity';
import { Tag } from 'src/tags/tag.entity';

/**
 * Represents a blog post entity.
 */
@Entity()
export class Post {
  /**
   * Unique identifier for the post.
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Title of the post.
   */
  @Column({ type: 'varchar', length: 512, nullable: false })
  title: string;

  /**
   * Type of the post (e.g., post, page, story, series.).
   */
  @Column({
    type: 'enum',
    enum: PostType,
    default: PostType.POST,
    nullable: false,
  })
  postType: PostType;

  /**
   * URL-friendly identifier for the post.
   */
  @Column({ type: 'varchar', length: 256, nullable: false, unique: true })
  slug: string;

  /**
   * Status of the post (draft, published, etc.).
   */
  @Column({
    type: 'enum',
    enum: PostStatus,
    default: PostStatus.DRAFT,
    nullable: false,
  })
  status: PostStatus;

  /**
   * Main content of the post (large string)
   */
  @Column({ type: 'text', nullable: true })
  content?: string;

  /**
   * JSON schema for structured data.
   */
  @Column({ type: 'text', nullable: true })
  schema?: string;

  /**
   * URL of the featured image.
   */
  @Column({ type: 'varchar', length: 1024, nullable: true })
  featuredImageUrl?: string;

  /**
   * Date and time when the post is published.
   */
  @Column({ type: 'timestamp', nullable: true })
  publishOn?: Date;

  /**
   * Tags associated with the post (many-to-many relationship).
   */
  @ManyToMany(() => Tag, (tag) => tag.posts, { eager: true })
  @JoinTable()
  tags?: Tag[];

  /**
   * Meta options associated with the post (one-to-one relationship bidirectional).
   */
  @OneToOne(() => MetaOption, (metaOptions) => metaOptions.post, {
    cascade: true,
    eager: true, // Will fetch posts AND metaOptions when getting posts
  })
  metaOptions?: MetaOption;

  /**
   * Author of the post (many-to-one relationship with User).
   */
  @ManyToOne(() => User, (user) => user.posts, { eager: true })
  author: User;
}
