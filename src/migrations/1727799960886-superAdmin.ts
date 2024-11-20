import { MigrationInterface, QueryRunner } from "typeorm";

export class SuperAdmin1727799960886 implements MigrationInterface {
    name = 'SuperAdmin1727799960886'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isAdmin"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "isAdmin" character varying DEFAULT 'ADMIN'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isAdmin"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "isAdmin" boolean DEFAULT false`);
    }

}
