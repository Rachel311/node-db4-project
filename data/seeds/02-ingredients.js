
exports.seed = function(knex) {
  return knex('ingredients')
  .del()
  .then(function () {
    return knex('ingredients')
      .insert([
        {
          id: 1,
          ingredient_name: 'butter'
        },
        {
          id: 2,
          ingredient_name: 'white sugar'
        },
        {
          id: 3,
          ingredient_name: 'all-purpose flour'
        },
        {
          id: 4,
          ingredient_name: 'baking soda'
        },
        {
          id: 5,
          ingredient_name: 'cream of tartar'
        },
        {
          id: 6,
          ingredient_name: 'salt'
        },
        {
          id: 7,
          ingredient_name: 'ground cinnamon'
        },
        {
          id: 8,
          ingredient_name: 'egg'
        }
      ])
  })
};
