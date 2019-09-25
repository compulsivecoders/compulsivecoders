import {Controller, Get, Post, HttpStatus, Param, Res, Body, Put, Query} from '@nestjs/common';
import { Response } from 'express';
import Tag from './tag.entity';

@Controller('tags')
export class TagsController {
  @Get(':tagName/posts')
  async getPosts(@Param('tagName') tagName, @Res() res: Response) {

    const tag = await Tag.findOne({ name: tagName});
    const posts = tag.posts;

    return res.status(HttpStatus.OK).json(
      posts.map(post => ({
        id: post.id,
        cover: post.cover,
        thumbnail: post.thumbnail,
        title: post.title,
        description: post.description,
        slug: post.slug,
        mainTag: post.mainTag,
        date: post.created_at,
      })),
    );
  }
}
