
exports.up = async knex => {
    await knex.schema.createTable("emojis", (table)=> {
          table.string("emoji")
          table.integer("count")
          }
      )
  };
  
  exports.down = async knex => {
      await knex.schema.dropTableIfExists("emojis")
  };
  