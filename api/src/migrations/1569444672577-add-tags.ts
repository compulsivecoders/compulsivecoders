import {MigrationInterface, QueryRunner} from "typeorm";

export class addTags1569444672577 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "tags" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying(256) NOT NULL, CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "blog_posts_tags" ("blogPostsId" integer NOT NULL, "tagsId" integer NOT NULL, CONSTRAINT "PK_535cca16034574ff95de5b16f5e" PRIMARY KEY ("blogPostsId", "tagsId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_b433dbd362603ebb6c47e57ca1" ON "blog_posts_tags" ("blogPostsId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_a8388fd511367e2e693762bf8f" ON "blog_posts_tags" ("tagsId") `, undefined);
        await queryRunner.query(`ALTER TABLE "blog_posts_tags" ADD CONSTRAINT "FK_b433dbd362603ebb6c47e57ca14" FOREIGN KEY ("blogPostsId") REFERENCES "blog_posts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "blog_posts_tags" ADD CONSTRAINT "FK_a8388fd511367e2e693762bf8f9" FOREIGN KEY ("tagsId") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "blog_posts_tags" DROP CONSTRAINT "FK_a8388fd511367e2e693762bf8f9"`, undefined);
        await queryRunner.query(`ALTER TABLE "blog_posts_tags" DROP CONSTRAINT "FK_b433dbd362603ebb6c47e57ca14"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_a8388fd511367e2e693762bf8f"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_b433dbd362603ebb6c47e57ca1"`, undefined);
        await queryRunner.query(`DROP TABLE "blog_posts_tags"`, undefined);
        await queryRunner.query(`DROP TABLE "tags"`, undefined);
    }

}
