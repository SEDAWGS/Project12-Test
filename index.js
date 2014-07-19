var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');

var morgan = require('morgan');
var bodyParser = require('body-parser');

var configDB = require('./config/database.js');

mongoose.connect(process.env.MONGOHQ_URL || configDB.url);

// log every request to the console
app.use(morgan('dev'));

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.use(logfmt.requestLogger());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'keyboard cat'
}));

require('./app/routes.js')(app);

app.listen(port);
console.log('Server starting on port ' + port);
