const express = require('express')
const app = express()
const router = require('./routes/routes')
const cors = require('cors')
const bcrypt = require('bcrypt')
const knex = require('./database/connection')
require('dotenv').config()

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', router)

async function createAdmin () {
  let admin = await knex.raw('SELECT * FROM admin')
  if (admin.rows[0] === undefined) {
    admin = {
      name: process.env.ADMIN_NAME,
      password: await bcrypt.hash(process.env.ADMIN_PASSWORD, 10)
    }
    await knex.insert(admin).into('admin')
  }
}

createAdmin()

const port = process.env.PORT
app.listen(port, () => {
  console.log('Server Running on http://localhost:' + port)
})

module.exports = app
