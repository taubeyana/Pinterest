const express = require('express');
const app = express();
const db = require('./db');
const users = require('./users/index');
const pins = require('./pins/index');


app.use('/api/users/', users);
app.use('/api/pins/', pins);


app.listen(9090);

