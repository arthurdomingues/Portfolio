const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const AdminModel = require('../models/AdminUser')
require('dotenv').config()

const secret = process.env.SECRET

class AdminController {
  async login (req, res) {
    const { name, password } = req.body
    const user = await AdminModel.find(name)

    if (user !== undefined) {
      const result = await bcrypt.compare(password, user[0].password)
      if (result) {
        const token = jwt.sign({ name: user[0].name }, secret)
        res.status(200)
        res.json({ token: token })
      } else {
        res.status(406)
        res.json({ err: 'Senha incorreta' })
      }
    } else {
      res.status(406)
      res.json({ status: false, err: 'Usuário incorreto' })
    }
  }

  async changePassword (req, res) {
    const password = req.body.password

    await AdminModel.changePassword(password)
  }
}

module.exports = new AdminController()
