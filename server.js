
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes.js');


const app = express();
app.use(bodyParser.json());

app.use('/wchannel',router);
app.use('/', express.static('public'));




app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
