
exports.seed = async function(knex) {
  await knex('instructions').truncate()
  await knex('instructions').insert([
    {instructions: "mixed ingredients together and serve over ice", recipes_id: 1},
    {instructions: "blend ingredients until smooth", recipes_id: 3},
    {instructions: "mix and bake at 350 for 15 minutes", recipes_id: 2}
  ])
};
