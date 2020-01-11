const fetch = require('node-fetch');

module.exports = async (req, res, next) => {
    const url = `http://footer:3000`;
    res.locals.footer = await (await fetch(url)).text()
    next();
}