const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

function connectDB(db) {
    return new Promise((resolve) => {
        MongoClient.connect(url,(err, client) => {
            resolve(client.db(db));
        });
    });
}

module.exports = connectDB;
