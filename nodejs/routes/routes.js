const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/HomeController')
const ContactController = require('../controllers/ContactController')
const Admin = require('../middleware/admin')
const AdminController = require('../controllers/AdminController')

router.get('/', HomeController.index)
router.get('/contact', Admin, ContactController.index)
router.get('/contact/:id', Admin, ContactController.getOne)
router.post('/contact', ContactController.send)
router.delete('/contact/:id', Admin, ContactController.delete)
router.post('/login', AdminController.login)

module.exports = router
