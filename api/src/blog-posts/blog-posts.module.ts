import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogPostsService } from './blog-posts.service';
import { BlogPostsController } from './blog-posts.controller';
import { BlogPost } from './blog-post.entity';
import{ ConfigModule } from './../config/config.module'

@Module({
  imports: [TypeOrmModule.forFeature([BlogPost]), ConfigModule],
  providers: [BlogPostsService],
  controllers: [BlogPostsController],
})
export class BlogPostsModule {}
