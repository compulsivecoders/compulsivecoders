import {Controller, Get, Post, HttpStatus, Param, Res, Body, Put, Query} from '@nestjs/common';
import { Response } from 'express';
import BlogPost from './blog-post.entity';
import { CreateBlogPostDto } from './create-blog-post.dto';
import { UpdateBlogPostDto } from './update-blog-post.dto';
import { ConfigService } from '../config/config.service';

@Controller('posts')
export class BlogPostsController {
  private config: ConfigService;

  constructor(config: ConfigService) {
     this.config = config;
  }

  @Get()
  async getPosts(@Res() res: Response, @Query() query ) {
    const queryFilters = {};

    if ('main_tag' in query) {
      queryFilters['mainTag'] = query.main_tag;
    }
    if ('slug' in query) {
      queryFilters['slug'] = query.slug;
    }
    const allPosts = await BlogPost.find(queryFilters);

    return res.status(HttpStatus.OK).json(
      allPosts.map(post => ({
        id: post.id,
        cover: post.cover,
        thumbnail: post.thumbnail,
        title: post.title,
        description: post.description,
        slug: post.slug,
        mainTag: post.mainTag,
        date: post.created_at,
        views: post.views,
        content: post.content,
      })),
    );
  }

  @Get(':id')
  async getBlogPostById(@Res() res: Response, @Param('id') id) {
    const post = await BlogPost.findOne({ id });

    if (post === undefined) {
      return res.status(HttpStatus.NOT_FOUND);
    }

    return res.status(HttpStatus.OK).json({
      id: post.id,
      cover: post.cover,
      thumbnail: post.thumbnail,
      title: post.title,
      description: post.description,
      slug: post.slug,
      mainTag: post.mainTag,
      date: post.created_at,
      views: post.views,
      content: post.content,
      author: post.author,
    });
  }

  @Put(':id')
  async update(@Param() params, @Body() updateBlogPostDto: UpdateBlogPostDto, @Res() res: Response): Promise<any> {
    if (updateBlogPostDto.secret !== this.config.get('SECRET_PASSWORD')) {
      return res.status(HttpStatus.FORBIDDEN);
    }

    let blogPost = await BlogPost.findOne({ id: params.id });

    if (blogPost === undefined) {
      return res.status(HttpStatus.NOT_FOUND);
    }

    blogPost.title = updateBlogPostDto.title;
    blogPost.slug = updateBlogPostDto.slug;
    blogPost.mainTag = updateBlogPostDto.mainTag;
    blogPost.thumbnail = updateBlogPostDto.thumbnail;
    blogPost.cover = updateBlogPostDto.cover;
    blogPost.content = updateBlogPostDto.content;
    blogPost.author = updateBlogPostDto.author;

    blogPost = await blogPost.save();

    return res.status(HttpStatus.OK).json({
      id: blogPost.id,
    });
  }

  @Post()
  async create(@Body() createBlogPostDto: CreateBlogPostDto, @Res() res: Response): Promise<any> {
    if (createBlogPostDto.secret !== this.config.get('SECRET_PASSWORD')) {
      return res.status(HttpStatus.FORBIDDEN);
    }

    const blogPost = new BlogPost();
    blogPost.title = createBlogPostDto.title;
    blogPost.slug = createBlogPostDto.slug;
    blogPost.mainTag = createBlogPostDto.mainTag.toLowerCase();
    blogPost.description = createBlogPostDto.description;
    blogPost.thumbnail = createBlogPostDto.thumbnail;
    blogPost.cover = createBlogPostDto.cover;
    blogPost.content = createBlogPostDto.content;
    blogPost.author = createBlogPostDto.author;
    const newBlogPost = await blogPost.save();

    return res.status(HttpStatus.CREATED).json({
      id: newBlogPost.id,
    });
  }
}
