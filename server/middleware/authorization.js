module.exports = {
  mnWP: function (req, res, next) {
    if(req.user) {
      next()
    } else {
      res.status(400).json({
        msg: 'UnAuthorized this page'
      })
    }
  }
}