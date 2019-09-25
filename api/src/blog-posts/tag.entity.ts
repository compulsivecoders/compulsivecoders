import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity, ManyToMany, JoinTable,
} from 'typeorm';
import BlogPost from "./blog-post.entity";

@Entity('tags')
export class Tag extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: 'varchar', length: 256 })
  name: string;

  @ManyToMany(type => BlogPost, post => post.tags, { eager: true })
  posts: BlogPost[];
}

export default Tag;
