
exports.seed = function(knex) {
  return knex('steps')
    .then(function () {
      return knex('steps')
        .insert([
          {
            
            step_id: 1,
            instructions: `Cream butter and sugar until smooth. Add eggs, one at a time. Combine flour, soda, tartar, and salt. Stir into butter mixture. Chill for 30 minutes.`,
            
          },
          {
            
            step_id: 2,
            instructions: `Preheat oven to 400 degrees F. Line cookie sheet with parchment or grease.`,
            
          },
          {
            
            step_id: 3,
            instructions: `Mix cinnamon with remaining sugar. Roll dough into walnut-sized balls and roll in mixture; place 2 inches apart on prepared cookie sheet.`,
            
          },
          {
            
            step_id: 4,
            instructions: `Bake for 8 minutes; cool and enjoy!`,
            
          }
        ])
    })
};


const recipes = [
  {recipe_name: 'Snickerdoodles'
}
]
const ingredients = [
  {ingredient_name: 'cinnamon',
  
}
]
const steps = [
  {instructions: 'break egg into bowl',
  step_number: 1,
  recipe_id: 1
}
]
const ingredients_recipes = [
  { ingredient_id: 1,
  recipe_id: 1,
  quantity: 3
}
]

exports.seed = async function (knex){
  await knex('recipes').insert(recipes)
  await knex('ingredients').insert(ingredients)
  await knex('steps').insert(steps)
  await knex('ingredients_recipes').insert(ingredients_recipes)
}