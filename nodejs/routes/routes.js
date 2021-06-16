const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/HomeController')
const ContactController = require('../controllers/ContactController')

router.get('/', HomeController.index)
router.get('/contact', ContactController.index)
router.get('/contact/:id', ContactController.getOne)
router.post('/contact', ContactController.send)
router.delete('/contact/:id', ContactController.delete)

module.exports = router
