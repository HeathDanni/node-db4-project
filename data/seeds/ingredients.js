
exports.seed = async function(knex) {
  await knex("ingredients").truncate()
  await knex("ingredients").insert([
    {name: "ice"},
    {name: "coffee"},
    {name: "milk"},
    {name: "sugar"},
    {name: "blueberries"},
    {name: "eggs"},
    {name: "flour"},
    {name: "chickpeas"},
    {name: "lemon juice"},
    {name: "salt"},
    {name: "garlic"},
    {name: "tahini"} 
  ])
};
