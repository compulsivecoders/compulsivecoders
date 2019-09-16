import * as path from 'path';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health/health.controller';
import { BlogPostsModule } from './blog-posts/blog-posts.module';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.dbHost,
        port: configService.dbPort,
        username: configService.dbUsername,
        password: configService.dbPassword,
        database: configService.dbName,
        entities: [path.join(__dirname, '/**/*.entity{.ts,.js}')],
        synchronize: configService.nodeEnv !== 'production',
        logging: configService.nodeEnv !== 'production' ? 'all' : false,
        migrations: [path.join(__dirname, '/migrations/*{.ts,.js}')],
        migrationsRun: false,
        dropSchema: false,
        cli: {
          migrationsDir: 'src/migrations',
        },
      }),
      inject: [ConfigService],
    }),
    BlogPostsModule,
  ],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
