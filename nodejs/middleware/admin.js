const jwt = require('jsonwebtoken')
require('dotenv').config()

const secret = process.env.SECRET

module.exports = function (req, res, next) {
  const authToken = req.headers.authorization

  if (authToken !== undefined) {
    const bearer = authToken.split(' ')
    const token = bearer[1]
    try {
      jwt.verify(token, secret)
      next()
    } catch (err) {
      res.status(403)
      res.json({ err: 'Ocorreu um erro na autenticação' })
    }
  } else {
    res.status(403)
    res.json({ err: 'Você não está autenticado' })
  }
}
