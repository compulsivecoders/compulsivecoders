import {MigrationInterface, QueryRunner} from "typeorm";

export class createBlogPostsTable1568660031011 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "blog_posts" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying(256) NOT NULL, "description" text NOT NULL, "content" text NOT NULL, "cover" text NOT NULL, "thumbnail" text NOT NULL, "slug" text NOT NULL, "category" character varying(256) NOT NULL, "author" character varying(128) NOT NULL, "views" bigint NOT NULL, "isPublished" boolean NOT NULL, CONSTRAINT "PK_dd2add25eac93daefc93da9d387" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "blog_posts"`, undefined);
    }

}
