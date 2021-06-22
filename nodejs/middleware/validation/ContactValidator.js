const { body, param } = require('express-validator')

const sendValidator = [
  body('name', 'Campo nome está vazio').notEmpty(),
  body('name', 'Campo Nome Deve conter no mínimo 3 caracteres')
    .isString().isLength({ min: 3 }),

  body('email', 'Campo Email está vazio').notEmpty(),
  body('email', 'Campo Email está incorreto').isEmail(),

  body('message', 'Mensagem deve conter no mínimo 25 caracteres')
    .isString().isLength({ min: 25 })
]

const idValidator = [
  param('id', 'Campo ID está vazio').notEmpty(),
  param('id', 'ID Deve ser inteiro').isInt()
]

const archivedValidator = [
  param('archived').isIn(['archived', ''])
]

module.exports = {
  sendValidator,
  idValidator,
  archivedValidator
}
