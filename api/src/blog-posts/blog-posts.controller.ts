import {Controller, Get, Post, HttpStatus, Param, Res, Body, Put} from '@nestjs/common';
import { Response } from 'express';
import BlogPost from './blog-post.entity';
import { CreateBlogPostDto } from "./create-blog-post.dto";
import { UpdateBlogPostDto } from "./update-blog-post.dto";

@Controller('posts')
export class BlogPostsController {
  @Get()
  async getPosts(@Res() res: Response) {
    const allPosts = await BlogPost.find();

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

  @Get(':category')
  async getPostsByCategory(@Res() res: Response, @Param() params) {
    const postsForCategory = await BlogPost.find({ category: params.category });

    if (postsForCategory === undefined) {
      return res.status(HttpStatus.NOT_FOUND)
    }

    return res.status(HttpStatus.OK).json(
      postsForCategory.map(post => ({
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

  @Get(':category/:slug')
  async getPostBySlug(@Res() res: Response, @Param() params) {
    const post = await BlogPost.findOne({ category: params.category, slug: params.slug });

    if (post === undefined) {
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
      }
    );
  }

  @Put('admin/update')
  async update(@Body() updateBlogPostDto: UpdateBlogPostDto, @Res() res: Response): Promise<any> {
    const blogPost = await BlogPost.findOne({ id: updateBlogPostDto.id })

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

  @Post('admin/create')
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
