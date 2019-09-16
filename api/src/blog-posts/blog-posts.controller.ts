import {Controller, Get, Post, HttpStatus, Param, Res, Body, Put, Query} from '@nestjs/common';
import { Response } from 'express';
import BlogPost from './blog-post.entity';
import { CreateBlogPostDto } from "./create-blog-post.dto";
import { UpdateBlogPostDto } from "./update-blog-post.dto";

@Controller('posts')
export class BlogPostsController {
  @Get()
  async getPosts(@Res() res: Response, @Query() query ) {
    const queryFilters = {};

    if ('category' in query) {
      queryFilters['category'] = query.category;
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
        category: post.category,
        date: post.created_at,
      })),
    );
  }

  @Get(':id')
  async getBlogPostById(@Res() res: Response, @Param('id') id) {
    const post = await BlogPost.findOne({ id: id });

    if (post == undefined) {
      return res.status(HttpStatus.NOT_FOUND)
    }

    return res.status(HttpStatus.OK).json({
      id: post.id,
      cover: post.cover,
      thumbnail: post.thumbnail,
      title: post.title,
      description: post.description,
      slug: post.slug,
      category: post.category,
      date: post.created_at,
    })
  }

  @Put(':id')
  async update(@Param() params, @Body() updateBlogPostDto: UpdateBlogPostDto, @Res() res: Response): Promise<any> {
    const blogPost = await BlogPost.findOne({ id: params.id })

    if (blogPost === undefined) {
      return res.status(HttpStatus.NOT_FOUND)
    }

    blogPost.title = updateBlogPostDto.title;
    blogPost.slug = updateBlogPostDto.slug;
    blogPost.category = updateBlogPostDto.category;
    blogPost.thumbnail = updateBlogPostDto.thumbnail;
    blogPost.cover = updateBlogPostDto.cover;
    blogPost.content = updateBlogPostDto.content;
    blogPost.author = updateBlogPostDto.author;

    return res.status(HttpStatus.OK).json({
      id: blogPost.id
    })
  }

  @Post()
  async create(@Body() createBlogPostDto: CreateBlogPostDto, @Res() res: Response): Promise<any> {
    const blogPost = new BlogPost();
    blogPost.title = createBlogPostDto.title;
    blogPost.slug = createBlogPostDto.slug;
    blogPost.category = createBlogPostDto.category;
    blogPost.description = createBlogPostDto.description;
    blogPost.thumbnail = createBlogPostDto.thumbnail;
    blogPost.cover = createBlogPostDto.cover;
    blogPost.content = createBlogPostDto.content;
    blogPost.author = createBlogPostDto.author;
    const newBlogPost = await blogPost.save();

    return res.status(HttpStatus.CREATED).json({
      id: newBlogPost.id
    })
  }
}
