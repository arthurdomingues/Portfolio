const { validationResult } = require('express-validator')

const validate = validations => {
  return async (req, res, next) => {
    for (const validation of validations) {
      const result = await validation.run(req)
      if (result.errors.length) break
    }

    const err = validationResult(req)
    if (err.isEmpty()) {
      return next()
    }

    res.status(400).json({ errors: err.array() })
  }
}

module.exports = validate
