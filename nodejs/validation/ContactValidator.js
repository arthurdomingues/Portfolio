const { body, param } = require('express-validator')

const sendValidator = [
  body('name', 'Campo nome está vazio').notEmpty(),
  body('name', 'Campo Deve conter no mínimo 3 caracteres')
    .isString().isLength({ min: 3 }),

  body('email', 'Email está vazio').notEmpty(),
  body('email', 'Email está incorreto').isEmail(),

  body('message', 'Mensagem deve conter no mínimo 25 caracteres')
    .isString().isLength({ min: 25 })
]

const idValidator = [
  param('id', 'Campo ID está vazio').notEmpty(),
  param('id', 'ID Deve ser inteiro').isInt()
]

module.exports = { sendValidator, idValidator }
