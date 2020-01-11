const fetch = require('node-fetch');

module.exports = async (req, res, next) => {
    const url = `http://book-api:3000/book/${req.params.book}`;
    res.locals.book = await (await fetch(url)).json()
    next();
}