import { MigrationInterface, QueryRunner } from "typeorm"

export class AddProductChanges1689090285169 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "grape" character varying`);
        await queryRunner.query(`ALTER TABLE "product" ADD "year" smallint`);
        await queryRunner.query(`ALTER TABLE "product" ADD "alchool" smallint`)
    }
    

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "grape"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "alchool"`)
    }

}


