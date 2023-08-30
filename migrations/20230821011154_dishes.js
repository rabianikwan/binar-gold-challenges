/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('dishes', (table) => {
            table.uuid("id");
            table.string("title").unique();
            table.string("description");
            table.string("category");
            table.float("price");
            table.text("imageUrl");
        })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("dishes")
};
