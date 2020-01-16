const express = require('express');
const header = require('header');
const router = express.Router();

const footerLoaderMiddleware = require('./footerLoaderMiddleware');
const bookLoaderMiddleware = require('./bookLoaderMiddleware');

/* GET home page. */
router.get('/book/:book', footerLoaderMiddleware, bookLoaderMiddleware, function (req, res, next) {
  res.locals.header = header({ subHeading: res.locals.book.name });
  res.render('book');
});

module.exports = router;
