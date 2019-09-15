import {MigrationInterface, QueryRunner} from "typeorm";

export class addDescriptionColumnToPosts1568236568380 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "posts" ADD "description" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "description"`);
    }

}
