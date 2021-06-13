const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'arthur',
    password: '',
    database: 'portfolio-api'
  }
})

module.exports = knex
