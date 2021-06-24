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
      res.status(200)
      next()
    } catch (err) {
      return res.status(403).json({ err: 'Ocorreu um erro na verificação' })
    }
  } else {
    return res.status(401).json({ err: 'Você não está autenticado' })
  }
}
