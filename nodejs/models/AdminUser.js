const knex = require('../database/connection')
const bcrypt = require('bcrypt')

class AdminUser {
  async find (user) {
    try {
      const query = await knex.select(['name', 'password'])
        .where({ name: user })
        .table('admin')
      return query
    } catch (err) {
      console.log(err)
      return undefined
    }
  }

  async changePassword (newPassword) {
    const hash = await bcrypt.hash(newPassword, 10)
    await knex.udpate({ password: hash })
      .where({ user: 'admin' })
      .table('admin')
  }
}

module.exports = new AdminUser()
