
exports.seed = function(knex) {
  return knex('ingredients')
   .then(function () {
    return knex('ingredients')
      .insert([
        {
          
          ingredient_name: 'chocolate chips'
        },
        
      ])
  })
};
