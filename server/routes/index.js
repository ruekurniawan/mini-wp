const express = require('express')
const router = express.Router()
const userRoutes = require('../routes/user')
const articleRoutes = require('../routes/article')
const {Authentication} = require('../middleware/authentication')

router.use('/users', userRoutes)
router.use(Authentication)
router.use('/articles', articleRoutes)

module.exports = router
