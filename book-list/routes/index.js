const express = require('express');
const router = express.Router();

const loadBooksMiddleware = require('./loadBooksMiddleware');
const footerLoaderMiddleware = require('./footerLoaderMiddleware');

/* GET home page. */
router.get('/', footerLoaderMiddleware, loadBooksMiddleware, function (req, res, next) {
  res.render('index');
});

module.exports = router;
