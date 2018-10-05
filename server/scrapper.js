const express = require('express');
const router = express.Router();
const cheerio = require('cheerio');
const request = require('request');

router.get('/', (req,res) => {
    let webpageTitle;
    request(req.query.url, (error,response,body) => {
        if (!error && response.statusCode == 200) {
            const $ = cheerio.load(body);
            webpageTitle = $("title").text();
            res.send(webpageTitle)
        }
    });
})

module.exports = router
