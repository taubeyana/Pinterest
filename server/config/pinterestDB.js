const mongoose = require('mongoose');
const keys = require('../config/keys')
const pinterestDB = process.env.MONGODB_URI || keys.mongoURI;

mongoose.connect(pinterestDB)
.then(console.log('Connected to pinterestDB'))
.catch(err => console.log(err.message))

module.exports = mongoose;
