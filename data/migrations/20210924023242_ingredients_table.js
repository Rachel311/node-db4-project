
exports.up = function(knex) {
  return knex.schema.createTable('ingredients', table => {
      table.increments('id')
      table.string('ingredient_name').unique().notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('ingredients')
};
