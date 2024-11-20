import { MigrationInterface, QueryRunner } from "typeorm";

export class UploadUserEntity1727801533850 implements MigrationInterface {
    name = 'UploadUserEntity1727801533850'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isAdmin" SET DEFAULT 'USER'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isAdmin" SET DEFAULT 'ADMIN'`);
    }

}
