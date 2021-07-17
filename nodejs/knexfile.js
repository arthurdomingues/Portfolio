require('dotenv').config()

module.exports = {
  client: 'pg',
  connection: {
    host: process.env.HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}
