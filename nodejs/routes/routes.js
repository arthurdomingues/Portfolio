const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/HomeController')
const ContactController = require('../controllers/ContactController')
const Admin = require('../middleware/admin')
const AdminController = require('../controllers/AdminController')
const {
  idValidator,
  sendValidator,
  archivedValidator
} = require('../middleware/validation/ContactValidator')
const validate = require('../middleware/validation/Validator')
const loginValidator = require('../middleware/validation/AdminValidator')

router.get('/', HomeController.index)

router.get(
  '/contact/:archived?',
  Admin, validate(archivedValidator),
  ContactController.index)

router.get(
  '/contact/:id',
  Admin,
  validate(idValidator),
  ContactController.getOne)

router.post('/contact', validate(sendValidator), ContactController.send)

router.delete(
  '/contact/:id',
  Admin,
  validate(idValidator),
  ContactController.delete)

router.put('/contact/:id', Admin, validate(idValidator), ContactController.edit)

router.post('/login', validate(loginValidator), AdminController.login)
router.post('/validate', Admin, AdminController.validate)
router.get('/logout', AdminController.logout)

module.exports = router
