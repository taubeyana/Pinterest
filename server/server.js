const express = require('express');
const app = express();
const users = require('./users/index');
const pins = require('./pins/index');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/api/users/', users);
app.use('/api/pins/', pins);


app.listen(9090);

