
exports.up = function(knex) {
  return knex.schema.withSchema('public').createTable('ong', function (table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('wpp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('ong')
};
