var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
//var session = require('express-session');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var requestHandlers = require('./app/requestHandlers');

var configDB = require('./config/database.js');

mongoose.connect(process.env.MONGOHQ_URL || configDB.url);

// log every request to the console
app.use(morgan('dev'));

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));
//unused
// app.use(session({
//   resave: false,
//   saveUninitialized: false,
//   secret: 'keyboard cat'
// }));

var router = express.Router();
require('./app/routes.js')(router, requestHandlers);
app.use('/api/v1', router);

app.get('/', function(req, res) {
	res.render ('index.html');
});


app.get('/', function(req, res) {
	res.render ('index.html');
});


app.listen(port);
console.log('Server starting on port ' + port);
