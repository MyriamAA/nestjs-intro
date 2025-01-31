import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PostType } from './enums/post-type.enum';
import { PostStatus } from './enums/post-status.enum';
import { CreatePostMetaOptionsDto } from '../meta-options/dtos/create-post-meta-options.dto';
import { MetaOption } from 'src/meta-options/meta-option.entity';

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
  tags?: string[];

  @OneToOne(() => MetaOption) // Meta options is 1-1 relationship with meta option
  @JoinColumn()
  metaOptions?: MetaOption;
}
