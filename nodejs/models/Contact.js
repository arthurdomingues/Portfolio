const knex = require('../database/connection')

class Contact {
  async getMessage (id) {
    try {
      const query = await knex.select().where({ id: id }).table('contact')
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

  async getAllMessages (isArchived) {
    const archived = isArchived
    try {
      const query = await knex.select([
        'id',
        'name',
        'email',
        'message',
        'sent',
        'archived']).where({ archived: archived }).table('contact')
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

  async editMessage (id, archived) {
    try {
      await knex.update({ archived: archived })
        .where({ id: id })
        .table('contact')
      return ({ status: 'true' })
    } catch (err) {
      return ({ status: 'false' })
    }
  }
}

module.exports = new Contact()
