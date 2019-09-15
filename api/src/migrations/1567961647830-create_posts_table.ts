import { MigrationInterface, QueryRunner } from 'typeorm';

export class createPostsTable1567961647830 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "posts" (
                "id" SERIAL NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "title" character varying(256) NOT NULL,
                "content" text NOT NULL,
                "cover" text NOT NULL,
                "thumbnail" text NOT NULL,
                "slug" text NOT NULL,
                "category" character varying(256) NOT NULL,
                "author" character varying(128) NOT NULL,
                "views" bigint NOT NULL, "isPublished" boolean NOT NULL,
                CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id")
            )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "posts"`);
  }
}
