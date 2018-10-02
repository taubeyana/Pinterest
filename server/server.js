const express = require('express');
const app = express();
const users = require('./users/index');
const pins = require('./pins/index');
const bodyParser = require('body-parser');
const path = require('path');
const buildFolder = path.join(__dirname, '../webapp/build')

app.use(bodyParser.json());
app.use('/api/users/', users);
app.use('/api/pins/', pins);
app.use(express.static(buildFolder))

app.listen(9090,(error)=>{
    if(error)console.log(error.message);
    console.log('listening on http://localhost:9090')
});

