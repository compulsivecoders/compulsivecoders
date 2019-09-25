import {
  Entity,
  Column,
  ManyToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinTable,
  BaseEntity,
} from 'typeorm';
import Tag from "./tag.entity";

@Entity('blog_posts')
export class BlogPost extends BaseEntity {
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

  @Column({ type: 'varchar', length: 256, nullable: true })
  mainTag: string;

  @Column({ type: 'varchar', length: 128 })
  author: string;

  @Column({ type: 'bigint', default: 0 })
  views: number;

  @Column({ type: 'bool', default: false })
  isPublished: boolean;

  @ManyToMany(type => Tag, tag => tag.posts)
  @JoinTable({ name: 'blog_posts_tags'})
  tags: Tag[];
}

export default BlogPost;
