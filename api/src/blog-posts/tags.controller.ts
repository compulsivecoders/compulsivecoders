import {Controller, Get, Post, HttpStatus, Param, Res, Body, Put, Query} from '@nestjs/common';
import { Response } from 'express';
import Tag from './tag.entity';

@Controller('posts')
export class BlogPostsController {
  @Get(':tag/posts')
  async getPosts(@Param('tag') tag, @Res() res: Response) {

    return res.status(HttpStatus.OK).json(
      {}
    );
  }
}
