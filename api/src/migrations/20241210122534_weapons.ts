import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('weapons', (table) => {
    table.string('id').primary();
    table.string('name');
    table.string('icon');
    table.string('watermark');
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('weapons');
}

