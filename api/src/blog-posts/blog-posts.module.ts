import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogPostsService } from './blog-posts.service';
import { BlogPostsController } from './blog-posts.controller';
import { BlogPost } from './blog-post.entity';
import{ ConfigModule } from './../config/config.module'
import { TagsController } from "./tags.controller";

@Module({
  imports: [TypeOrmModule.forFeature([BlogPost]), ConfigModule],
  providers: [BlogPostsService],
  controllers: [BlogPostsController, TagsController],
})
export class BlogPostsModule {}
