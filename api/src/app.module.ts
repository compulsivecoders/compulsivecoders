import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health/health.controller';
import { PostsController } from './posts/posts.controller';

@Module({
  imports: [],
  controllers: [AppController, HealthController, PostsController],
  providers: [AppService],
})
export class AppModule {}
