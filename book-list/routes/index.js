const express = require('express');
const router = express.Router();
const header = require('header');

const loadBooksMiddleware = require('./loadBooksMiddleware');
const footerLoaderMiddleware = require('./footerLoaderMiddleware');

/* GET home page. */
router.get('/', footerLoaderMiddleware, loadBooksMiddleware, function (req, res, next) {
  res.locals.header = header({ subHeading: "List" });
  res.render('index');
});

module.exports = router;
