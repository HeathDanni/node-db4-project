
exports.seed = async function(knex) {
  await knex('recipes').truncate()
  await knex('recipes').insert([
    {name: "iced coffee"},
    {name: "blueberry muffins"},
    {name: "hummus"}
  ])
};
