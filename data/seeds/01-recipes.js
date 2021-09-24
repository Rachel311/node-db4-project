exports.seed = function (knex) {
  return knex('recipes')
    .then(function () {
      return knex('recipes')
        .insert([
          {
            recipe_name: 'Snickerdoodles',
          }
        ])
    })
}
