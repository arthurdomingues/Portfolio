const Contact = require('../models/Contact')

class ContactController {
  async index (req, res) {
    const messages = await Contact.getAllMessages()
    res.status(200)
    res.json(messages)
  }

  async getOne (req, res) {
    const id = req.params.id
    const message = await Contact.getMessage(id)

    if (message.length === 0) {
      res.status(404)
      res.send('Não Foi Possível')
    } else {
      res.status(200)
      res.json(message)
    }
  }

  async send (req, res) {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const sent = new Date()
    if (name === undefined || name === '' || name === ' ') {
      res.status(400)
      res.json({ err: 'Nome inválido' })
    }

    if (email === undefined || email === '' || email === ' ') {
      res.status(400)
      res.json({ err: 'Email inválido' })
    }

    if (message === undefined || message === '' || message === ' ') {
      res.status(400)
      res.json({ err: 'Mensagem inválida' })
    }

    await Contact.sendMessage(name, email, message, sent)
    res.status(200)
    res.send('Mensagem Enviada com Sucesso')
  }

  async delete (req, res) {
    const id = req.params.id
    const result = await Contact.deleteMessage(id)
    if (result.status) {
      res.status(200)
      res.send('Deletado com Sucesso')
    } else {
      res.status(400)
      res.send('Ocorreu um erro')
    }
  }
}

module.exports = new ContactController()
