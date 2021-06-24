const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const AdminModel = require('../models/AdminUser')
require('dotenv').config()

const secret = process.env.SECRET

class AdminController {
  async logout (req, res) {
    res.status(200).json({ message: 'Deslogado' })
  }

  async validate (req, res) {
    res.json({ status: 'ok' })
  }

  async login (req, res) {
    const { name, password } = req.body
    const user = await AdminModel.find(name)
    if (user !== undefined) {
      const result = await bcrypt.compare(password, user[0].password)
      if (result) {
        const token = jwt.sign({
          name: user[0].name
        }, secret, { expiresIn: 60 * 60 })
        res.status(200).json({
          token: token,
          message: 'Login efetuado com sucesso'
        })
      } else {
        res.status(406).json({ err: 'Senha incorreta' })
      }
    } else {
      res.status(406).json({ status: false, err: 'Usuário incorreto' })
    }
  }

  async changePassword (req, res) {
    const password = req.body.password

    await AdminModel.changePassword(password)
  }
}

module.exports = new AdminController()
