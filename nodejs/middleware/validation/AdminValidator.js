const { body } = require('express-validator')

const loginValidator = [
  body('name', 'Insira o nome').notEmpty().not().isIn([' ']),
  body('name', 'Insira o nome corretamente').isString().isLength({ min: 1 }),
  body('password', 'Insira a senha').notEmpty().not().isIn([' ']),
  body('password', 'Insira a Senha corretamente')
    .isString().isLength({ min: 1 })
]

module.exports = loginValidator
