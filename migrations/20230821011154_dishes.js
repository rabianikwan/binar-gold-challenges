/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('dishes', (table) => {
            table.uuid("id", {primaryKey: true}).defaultTo(knex.raw("uuid_generate_v4()"));
            table.string("title").unique().notNullable();
            table.string("description").notNullable();
            table.string("category").notNullable();
            table.float("price").notNullable();
            table.text("imageUrl").notNullable();
        })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("dishes")
};
