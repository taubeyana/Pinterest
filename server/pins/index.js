const express = require('express');
const router = express.Router();
const collection = require('./collection');
const db = require('../db');


router.get('/', (req,res) => {
    db('pinterest').then(db => {
        db.collection('pins').find({}).toArray().then(data => res.send(data));
    });
});

module.exports = router;