const { param } = require('express-validator')

const loginValidator = [
  param('name', 'Insira o nome').notEmpty().not().isIn([' ']),
  param('name', 'Insira o nome corretamente').isString().isLength({ min: 1 }),
  param('password', 'Insira a senha').notEmpty().not().isIn([' ']),
  param('password', 'Insira a Senha corretamente')
    .isString().isLength({ min: 1 })
]

module.exports = loginValidator
