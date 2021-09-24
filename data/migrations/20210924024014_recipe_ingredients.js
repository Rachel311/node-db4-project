
exports.up = function(knex) {
  return knex.schema.createTable('recipe_ingredients', table => {
      table.increments()
        .integer('recipe_id')
        .unsigned()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.integer('ingredient_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.float('quantity')
        .notNullable()    
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipe_ingredients')
};
