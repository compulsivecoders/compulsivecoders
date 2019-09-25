import {MigrationInterface, QueryRunner} from "typeorm";

export class removeCategories1569444966489 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "blog_posts" DROP COLUMN "category"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "blog_posts" ADD "category" character varying(256) NOT NULL`, undefined);
    }

}
