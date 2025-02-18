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
import { CreatePostMetaOptionsDto } from '../meta-options/dtos/create-post-meta-options.dto';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { User } from 'src/users/user.entity';
import { Tag } from 'src/tags/tag.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 512,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'enum',
    enum: PostType,
    default: PostType.POST,
    nullable: false,
  })
  postType: PostType;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
    unique: true,
  })
  slug: string;

  @Column({
    type: 'enum',
    enum: PostStatus,
    default: PostStatus.DRAFT,
    nullable: false,
  })
  status: PostStatus;
  @Column({
    type: 'text', //Large string
    nullable: true,
  })
  content?: string;
  @Column({
    type: 'text', //Large string
    nullable: true,
  })
  schema?: string;
  @Column({
    type: 'varchar', //Large string
    length: 1024,
    nullable: true,
  })
  featuredImageUrl?: string;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  publishOn?: Date;

  // Work on these in lecture on relationships
  @ManyToMany(() => Tag, {
    eager: true,
  })
  @JoinTable()
  tags?: Tag[];

  // Meta options is 1-1 relationship with meta option now BIDIRECTIONAL
  @OneToOne(() => MetaOption, (metaOptions) => metaOptions.post, {
    cascade: true,
    eager: true, // Will fetch posts AND metaOptions when getting posts
  })

  // We can add specific actions to the cascade (check documentation)
  metaOptions?: MetaOption;

  // Many posts can belong to one user
  @ManyToOne(() => User, (user) => user.posts, {
    eager: true,
  })
  author: User;
}
