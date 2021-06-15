const knex = require('../database/connection')

class Contact {
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
