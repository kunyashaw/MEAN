var express = require('express');
var app = express();
app.listen(3000);

var cors = require('cors');
app.use(cors());

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var cookiesParser = require('cookie-parser');
app.use(cookiesParser());

app.use('/user', require('./routes/user'));
app.use('/api', require('./routes/api'))


