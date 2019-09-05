import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 256 })
  title: string;

  @Column({ type: 'text' })
  content: string;

  @Column()
  cover: string;

  @Column()
  thumbnail: string;

  @Column()
  slug: string

  @Column()
  category: string

  @Column()
  author: string

  @Column()
  views: number;

  @Column()
  isPublished: boolean;
}

export default Post;
