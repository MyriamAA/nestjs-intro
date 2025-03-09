import { Post } from 'src/posts/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Represents a user entity in the database.
 */
@Entity()
export class User {
  /**
   * Unique identifier for the user.
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * The first name of the user.
   */
  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  firstName: string;

  /**
   * The last name of the user.
   * This field is optional.
   */
  @Column({
    type: 'varchar',
    length: 96,
    nullable: true,
  })
  lastName: string;

  /**
   * The email address of the user.
   * Must be unique.
   */
  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
    unique: true,
  })
  email: string;

  /**
   * The password of the user.
   */
  @Column({
    type: 'varchar',
    length: 96,
    nullable: true,
  })
  password?: string;

  /**
   * The Google Identity of the user.
   */
  @Column({
    type: 'varchar',
    nullable: true,
  })
  googleId?: string;
  /**
   * The list of posts authored by the user.
   */
  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];
}
