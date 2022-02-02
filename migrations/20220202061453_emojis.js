
exports.up = async knex => {
    await knex.schema.createTable("emojis", (table)=> {
          table.string("emoji_name");
          table.string("password_hash")
          }
      )
  };
  
  exports.down = async knex => {
      await knex.schema.dropTableIfExists("emojis")
  };
  