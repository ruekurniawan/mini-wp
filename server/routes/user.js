const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const {Authentication} = require('../middleware/authentication')
const Authorize = require('../middleware/authorization')

router.post('/registrasi', userController.create)
router.post('/login', userController.login)

module.exports = router