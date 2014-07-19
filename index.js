var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');

var morgan = require('morgan');
var bodyParser = require('body-parser');

var configDB = require('./config/database.js');

mongoose.connect(configDB.url);

// log every request to the console
app.use(morgan('dev'));

app.use(bodyParser());

require('./app/routes.js')(app);

app.listen(port);
console.log('Server starting on port ' + port);
