// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */


 module.exports = {

  development: {
    client: 'pg',
    connection: 'postgress:///dog-scanner-database'
  },

  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      tablename: 'knex_migrations',
      directory: './migrations', 
    },
    seeds: { directory: './seeds' }
  }
  
};
