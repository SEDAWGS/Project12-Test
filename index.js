var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 8080;
var simpledb = require('mongoose-simpledb');
var session = require('express-session');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var requestHandlers = require('./app/requestHandlers');
var configDB = require('./config/database');

var options = {
  connectionString: process.env.MONGOHQ_URL || configDB.url,
  autoIncrementNumberIds: true
};
var callback = function(err, db) {
  if (err)
    return console.error(err);

    // log every request to the console
    app.use(morgan('dev'));

    app.set('views', path.join(__dirname, 'views'));
    app.engine('html', require('ejs').renderFile);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(session({
      resave: false,
      saveUninitialized: false,
      secret: 'keyboard cat'
    }));

    var router = express.Router();
    require('./app/routes.js')(router, requestHandlers, db);
    app.use('/api/v1', router);

    app.get('/', function(req, res) {
      res.render ('index.html');
    });

    app.get('/', function(req, res) {
      res.render ('index.html');
    });

    app.listen(port);
    console.log('Server starting on port ' + port);
};
simpledb.init(options, callback);
