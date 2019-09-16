import {Controller, Get, Post, HttpStatus, Param, Res, Body} from '@nestjs/common';
import { Response } from 'express';
import BlogPost from './blog-post.entity';
import {CreateBlogPostDto} from "./create-blog-post.dto";

@Controller('posts')
export class BlogPostsController {
  @Get()
  getPosts(@Res() res: Response) {
    return res.status(HttpStatus.OK).json([
      {
        imageSrc: 'images/compute-pi.webp',
        title: 'Compute Pi with Javascript and big.js',
        description:
          'There is no need to introduce Pi! Pi is one of the most interesting mathematical constant. Originally, Pi has been defined as the ratio of a circle’s circumference to its diameter. However, Pi is more than that: it unexpectedly shows up in almost all areas of mathematics and physics.',
        tag: 'maths',
        date: '2 months ago',
      },
      {
        imageSrc: 'images/heroku-edit-files.webp',
        title: 'How to Edit a File on Heroku Dynos using Nano or Vim',
        description:
          'Heroku is a cloud platform offering server hosting and management, along with a rich ecosystem of integrated services such as PostgreSQL, Redis cache, Sentry, PaperTrail, MailTrap, NewRelic, etc. Hosted on AWS behind the scene, Heroku is offering high-level control over your web infrastructure',
        tag: 'tech',
        date: '2 months ago',
      },
      {
        imageSrc: 'images/laradock-permission-denied.webp',
        title: 'Laradock: How to fix Permission denied issue',
        description:
          'Symptoms You have built your Docker environment for Laravel (Laradock). But while: running your application (storage access, laravel.log…) ;installing dependencies (npm, yarn, composer…) ;running php artisan commands. You get this kind of error: The stream or file “/var/www/storage/logs/laravel.log” could not be opened: failed to open stream: Permission denied',
        tag: 'debug',
        date: '2 months ago',
      },
      {
        imageSrc: 'images/laravel-multiple-vendors.webp',
        title:
          'How to Split Dependencies into Multiple Vendors using Laravel Mix',
        description:
          'Laravel is a modern open-source PHP framework for web applications, created by Tailor Otwell. It has been designed to produce elegant code, run fast and simplify web development. It comes with a lot of tools such as a router, a queue manager (Horizon), a CLI (Artisan), and a front builder (Mix)',
        tag: 'tech',
        date: '2 months ago',
      },
      {
        imageSrc: 'images/npm-unscoped-packages.png',
        title: 'NPM Error: unscoped packages cannot be private',
        description:
          'NPM Errors are sometimes opaque. Yesterday, while working on a personal npm package, I faced the following issue while publishing using usual command: npm publish Output! npm ERR! publish Failed PUT 400 npm ERR! code E400 npm ERR! unscoped packages cannot be private : my-package',
        tag: 'debug',
        date: '2 months ago',
      },
      {
        imageSrc: 'images/object-entries.webp',
        title: 'Javascript ES6 – TypeError: Object.entries is not a function',
        description:
          'You get this error into your browser console: TypeError: Object.entries is not a function. It means that you are using Object.entries() function in your code (or one of your JS dependencies is using it) but your browser does not support it.',
        tag: 'debug',
        date: '2 months ago',
      },
      {
        imageSrc: 'images/php-ext-zip.webp',
        title: 'How to Install PHP ext-zip extension?',
        description:
          'Typical error message, meaning that PHP ext-zip extension is missing: laravel/installer v2.0.1 requires ext-zip * -> the requested PHP extension zip is missing from your system. Fix me First, get PHP version running on your computer: php –version Then, on Ubuntu, just run this command: ',
        tag: 'debug',
        date: '2 months ago',
      },
      {
        imageSrc: 'images/vuejs-root.png',
        title:
          'VueJS: Component template should contain exactly one root element',
        description:
          'While working on a VueJS component, you face the following error in your browser console (or in your JS linter output): Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.',
        tag: 'debug',
        date: '2 months ago',
      },
    ]);
  }

  @Get(':category')
  async getPostsByCategory(@Res() res: Response, @Param() params) {
    const postsForCategory = await BlogPost.find({ category: params.category });

    if (postsForCategory === undefined) {
      return res.status(HttpStatus.NOT_FOUND)
    }

    return res.status(HttpStatus.OK).json(
      postsForCategory.map(post => ({
        imageSrc: post.cover,
        title: post.title,
        description: post.description,
        tag: 'tech',
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
        imageSrc: post.cover,
        title: post.title,
        description: post.description,
        tag: 'tech',
        slug: post.slug,
        category: post.category,
        date: post.created_at,
      }
    );
  }
}
