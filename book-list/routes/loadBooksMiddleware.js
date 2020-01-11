const fetch = require('node-fetch');

module.exports = async (req, res, next)=>{
    res.locals.books = await (await fetch('http://book-api:3000/book')).json();
    next()
}