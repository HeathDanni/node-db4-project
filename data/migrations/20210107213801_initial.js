
exports.up = async function(knex) {
  await knex.schema.createTable("recipes", (table) => {
    table.increments("id")
    table.text("name").notNull().unique()
  })

  await knex.schema.createTable("ingredients", (table) => {
    table.increments("id")
    table.text("name").notNull().unique()
  })

  await knex.schema.createTable("recipes_ingredients", (table) => {
    table.integer("recipe_id").notNull().references("id").inTable("recipes")
    table.integer("ingredient_id").notNull().references("id").inTable("ingredients")
    table.primary(["recipe_id", "ingredient_id"])
  })

  await knex.schema.createTable("instructions", (table) => {
    table.increments("id")
    table.text("instructions")
    table.integer("recipes_id").notNull().unique()
  })

};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("instructions")
  await knex.schema.dropTableIfExists("recipes_ingredients")
  await knex.schema.dropTableIfExists("ingredients")
  await knex.schema.dropTableIfExists("recipes")
};
