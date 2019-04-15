const Article = require('../models/articleModels')

class ArticleController {
  static myArticle(req, res) {
    Article
    .find()
      .find({author:req.user._id})
      .populate('author', '-password')
      .then((data) => {
        res.status(200).json(data)
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  }

  static createArticle(req, res) {
    Article
      .create({
        //didapat saat authentication
        author: req.user.id,
        title: req.body.title,
        content: req.body.content,
      })
      .then((data) => {
        res.status(201).json({
          data, 
          msg: 'Successfully created new article'
        })
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  }

  static update(req, res) {
    Article
      .findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        content: req.body.content
      })
      .then((data) => {
        res.status(200).json({
          data,
          msg: 'Successfully update article'
        })
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  }

  static delete(req, res) {
    Article
      .findByIdAndDelete(req.params.id)
      .then((data) => {
        res.status(200).json({
          data,
          msg: 'Success delete article'
        })
      })
      .catch((err) => {
        res.status(500).json(err.message)
      })
  }

}

module.exports = ArticleController