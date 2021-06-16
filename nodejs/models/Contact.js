const knex = require('../database/connection')

class Contact {
  async getMessage (id) {
    try {
      const query = knex.select().where({ id: id }).table('contact')
      if (query !== undefined) {
        return query
      } else {
        return undefined
      }
    } catch (err) {
      console.log(err)
      return []
    }
  }

  async getAllMessages () {
    try {
      const query = await knex.select([
        'id',
        'name',
        'email',
        'message',
        'sent']).table('contact')
      return query
    } catch (err) {
      console.log(err)
      return []
    }
  }

  async sendMessage (name, email, message, sent) {
    try {
      await knex.insert({ name, email, message, sent }).table('contact')
    } catch (err) {
      console.log(err)
    }
  }

  async deleteMessage (id) {
    try {
      await knex.delete().where({ id: id }).table('contact')
      return ({ status: 'true' })
    } catch (err) {
      console.log(err)
      return ({ status: 'false', err: 'Não foi Possível deletar mensagem' })
    }
  }
}

module.exports = new Contact()
