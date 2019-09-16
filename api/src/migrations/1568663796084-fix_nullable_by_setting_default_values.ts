import {MigrationInterface, QueryRunner} from "typeorm";

export class fixNullableBySettingDefaultValues1568663796084 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "blog_posts" ALTER COLUMN "views" SET DEFAULT 0`, undefined);
        await queryRunner.query(`ALTER TABLE "blog_posts" ALTER COLUMN "isPublished" SET DEFAULT false`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "blog_posts" ALTER COLUMN "isPublished" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "blog_posts" ALTER COLUMN "views" DROP DEFAULT`, undefined);
    }

}
