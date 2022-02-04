
exports.up = async knex => {
    await knex.schema.createTable("emojis", (table)=> {
          table.string("");
          table.string("password_hash")
          }
      )
  };
  
  exports.down = async knex => {
      await knex.schema.dropTableIfExists("emojis")
  };
  