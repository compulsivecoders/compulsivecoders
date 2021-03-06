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

    queryFilters['isPublished'] = true;

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
        isPublished: post.isPublished,
      })),
    );
  }

  @Get(':id')
  async getBlogPostById(@Res() res: Response, @Param('id') id) {
    const post = await BlogPost.findOne({ id });

    if (post === undefined) {
      return res.status(HttpStatus.NOT_FOUND).json({'error': '404'});
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
      isPublished: post.isPublished,
    });
  }

  @Put(':id')
  async update(@Param() params, @Body() updateBlogPostDto: UpdateBlogPostDto, @Res() res: Response): Promise<any> {
    if (updateBlogPostDto.secret !== this.config.get('SECRET_PASSWORD')) {
      return res.status(HttpStatus.FORBIDDEN).json({'error': '403'});
    }

    let blogPost = await BlogPost.findOne({ id: params.id });

    if (blogPost === undefined) {
      return res.status(HttpStatus.NOT_FOUND).json({'error': '404'});
    }

    blogPost.title = updateBlogPostDto.title;
    blogPost.slug = updateBlogPostDto.slug;
    blogPost.mainTag = updateBlogPostDto.mainTag;
    blogPost.thumbnail = updateBlogPostDto.thumbnail;
    blogPost.cover = updateBlogPostDto.cover;
    blogPost.content = updateBlogPostDto.content;
    blogPost.author = updateBlogPostDto.author;
    blogPost.isPublished = updateBlogPostDto.isPublished;

    blogPost = await blogPost.save();

    return res.status(HttpStatus.OK).json({
      id: blogPost.id,
    });
  }

  @Post()
  async create(@Body() createBlogPostDto: CreateBlogPostDto, @Res() res: Response): Promise<any> {
    if (createBlogPostDto.secret !== this.config.get('SECRET_PASSWORD')) {
      return res.status(HttpStatus.FORBIDDEN).json({'error': '403'});
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
    blogPost.isPublished = createBlogPostDto.isPublished;
    const newBlogPost = await blogPost.save();

    return res.status(HttpStatus.CREATED).json({
      id: newBlogPost.id,
    });
  }

  @Post(':id/view')
  async incrementView(@Param() params, @Res() res: Response): Promise<any> {

    let blogPost = await BlogPost.findOne({ id: params.id });

    if (blogPost === undefined) {
      return res.status(HttpStatus.NOT_FOUND).json({'error': '404'});
    }

    blogPost.views = parseInt(blogPost.views.toString()) + 1;
    blogPost = await blogPost.save();

    return res.status(HttpStatus.OK).json({
      id: blogPost.id,
    });
  }
}
