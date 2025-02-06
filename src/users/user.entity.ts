import { Post } from 'src/posts/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

// Column typees differ if we're using SQL or PostgreSQL check typeorm website
// Should match the DTO
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  firstName: string;
  @Column({
    type: 'varchar',
    length: 96,
    nullable: true,
  })
  lastName: string;
  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
    unique: true,
  })
  email: string;
  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  password: string;

  // A user can have many posts
  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];
}
