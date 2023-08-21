/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('dishes', (table) => {
            table.increments('id')
            table.string("title").unique().notNullable();
            table.string("description").notNullable();
            table.float("price");
            table.text("image-url")
        })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("dishes")
};
