const express = require('express')
const router = express.Router()
const articleController = require('../controllers/articleController')

router.get('/', articleController.myArticle)
router.post('/', articleController.createArticle)
router.put('/:id', articleController.update)
router.delete('/:id', articleController.delete)


module.exports = router