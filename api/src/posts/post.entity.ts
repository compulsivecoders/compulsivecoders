import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';

@Entity('posts')
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: 'varchar', length: 256 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ type: 'text' })
  cover: string;

  @Column({ type: 'text' })
  thumbnail: string;

  @Column({ type: 'text' })
  slug: string;

  @Column({ type: 'varchar', length: 256 })
  category: string;

  @Column({ type: 'varchar', length: 128 })
  author: string;

  @Column({ type: 'bigint' })
  views: number;

  @Column({ type: 'bool' })
  isPublished: boolean;
}

export default Post;
