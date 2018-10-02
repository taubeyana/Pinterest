const mongoose = require('mongoose');
const localDBUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/pinterest';


mongoose.connect(localDBUrl)
.then(console.log('Connected to local database'))
.catch((err => {
    console.log(err + 'Local database is not available, redirecting to MLAB');
}))

module.exports = mongoose;