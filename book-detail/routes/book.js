var express = require('express');
var router = express.Router();

const footerLoaderMiddleware = require('./footerLoaderMiddleware');
const bookLoaderMiddleware = require('./bookLoaderMiddleware');

/* GET home page. */
router.get('/book/:book', footerLoaderMiddleware, bookLoaderMiddleware, function (req, res, next) {
  res.render('book');
});

module.exports = router;
