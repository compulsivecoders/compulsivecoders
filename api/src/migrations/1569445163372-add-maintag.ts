import {MigrationInterface, QueryRunner} from "typeorm";

export class addMaintag1569445163372 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "blog_posts" ADD "mainTag" character varying(256)`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "blog_posts" DROP COLUMN "mainTag"`, undefined);
    }

}
