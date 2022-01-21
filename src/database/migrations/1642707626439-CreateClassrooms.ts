import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClassrooms1642707626439 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "classrooms",
                    columns: [
                        {
                            name: "id",
                            type: "varchar",
                            isPrimary: true,
                            generationStrategy: "uuid"
                        },
                        {
                            name: "name",
                            type: "varchar"
                        },
                        {
                            name: "description",
                            type: "varchar"
                        },
                        {
                            name: "capacity",
                            type: "integer"
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default: "now()"
                        }
                    ]
                }
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("classrooms")
    }

}
