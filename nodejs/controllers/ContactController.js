const Contact = require('../models/Contact')

class ContactController {
  async index (req, res) {
    const messages = await Contact.getAllMessages()
    res.status(200).json(messages)
  }

  async getOne (req, res) {
    const id = req.params.id
    const message = await Contact.getMessage(id)

    if (message.length === 0) {
      res.status(404)
      res.send('Não Foi Possível')
    } else {
      res.status(200).json(message)
    }
  }

  async send (req, res) {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const sent = new Date()
    try {
      await Contact.sendMessage(name, email, message, sent)
      res.status(200).json({
        message: `Sua foi Mensagem Enviada com Sucesso!!
          Obrigado pelo contato`
      })
    } catch (err) {
      res.status(400).json({ err: err })
    }
  }

  async delete (req, res) {
    const id = req.params.id
    const result = await Contact.deleteMessage(id)
    if (result.status) {
      res.status(200).json({ message: 'Deletado com sucesso' })
    } else {
      res.status(400).json({ err: 'Ocorreu algum erro' })
    }
  }
}

module.exports = new ContactController()
