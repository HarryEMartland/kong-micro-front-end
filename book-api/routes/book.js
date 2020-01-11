var express = require('express');
var router = express.Router();

const books = [
  { name: "Harry Potter and the Philosopher's Stone", author: "J. K. Rowling", pages: 246 },
  { name: "The Colour of Magic", author: "Terry Pratchett", pages: 206 }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json(books.map(({ name }, id) => ({ name, id })));
});

router.get('/:book', function (req, res, next) {
  res.json(books[req.params.book]);
});

module.exports = router;
