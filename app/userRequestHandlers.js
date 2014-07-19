var User = require('../models/user');
var db = require('mongoose-simpledb').db;

exports.getUsers = function(req, res) {
  res.send('yolo');
};

exports.postUser = function(req, res) {
  var user = new db.User({
    name: req.body.name,
    email: req.body.email
  });
  user.save(function() {
    res.send(user.name + ' added successfully!');
  });
};

exports.getUser = function(req, res) {

};

exports.putUser = function(req, res) {

};

exports.deleteUser = function(req, res) {

};

exports.inboxRequestHandlers = require('./inboxRequestHandlers');
