const db = require('./../db');

const UserSchema = new db.Schema({
    firstName: String,
    lastName: String,
    email: String,
    location: String,
    about: String,
    img: String
});

const User = db.model('User', UserSchema);

module.exports = User;

