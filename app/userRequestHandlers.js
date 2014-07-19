var db = require('mongoose-simpledb').db;

exports.getUsers = function(req, res) {
  db.User.find(function(err, users) {
    if (err) {
      res.json({
        error_code: 100,
        error_type: 'NotFound',
        message: 'Users not found'
      }, 400);
    } else {
      res.json(users, 200);
    }
  });
};

exports.postUser = function(req, res) {
  if (req.body.name == null || req.body.name == '') {
    res.json({
      error_code: 102,
      error_type: 'InvalidParam',
      message: 'Missing name parameter'
    });
    return;
  } else if (req.body.email == null || req.body.email == '') {
    res.json({
      error_code: 102,
      error_type: 'InvalidParam',
      message: 'Missing email parameter'
    });
    return;
  }

  var user = new db.User({
    name: req.body.name,
    email: req.body.email
  });
  user.save(function(err) {
    if (err) {
      res.json({
        error_code: 101,
        error_type: 'WriteError',
        message: 'Unable to create new user'
      }, 400);
    } else {
      res.json({
        message: 'Successfully created user',
        id: user._id
      }, 200);
    }
  });
};

exports.getUser = function(req, res) {
  db.User.findById(req.params.user_id, function(err, user) {
    if (err) {
      res.json({
        message: 'fatal shit'
      }, 400);
    } else if (user == null) {
      res.json({
        error_code: 100,
        error_type: 'NotFound',
        message: 'User does not exist'
      }, 400);
    } else {
      res.json(user, 200);
    }
  });
};

exports.putUser = function(req, res) {
  db.User.findById(req.params.user_id, function(err, user) {
    if (err) {
      res.json({
        message: 'fatal shit'
      }, 400);
    } else if (user == null) {
      res.json({
        error_code: 100,
        error_type: 'NotFound',
        message: 'Attempting to modify user that does not exist'
      }, 400);
    } else {
      if (req.params.name == null || req.params.name == '') {
        res.json({
          error_code: 102,
          error_type: 'InvalidParam',
          message: 'Missing name parameter'
        });
        return;
      }
      if (req.params.email == null || req.params.email == '') {
        res.json({
          error_code: 102,
          error_type: 'InvalidParam',
          message: 'Missing email parameter'
        });
        return;
      }
      user.name = req.params.name;
      user.email = req.params.email;
      user.save(function (err, user) {
        if (err) {
          res.json({
            message: 'fatal shit'
          }, 400);
        } else {
          res.json({
            message: 'Successfully updated user'
          }, 200);
        }
      });
    }
  })
};

exports.deleteUser = function(req, res) {
  db.User.findById(req.params.user_id, function(err, user) {
    if (err) {
      res.json({
        message: 'fatal shit'
      }, 400);
    } else if (user == null) {
      res.json({
        message: 'Attempting to delete user that does not exist'
      }, 200);
    } else {
      user.remove(function(err, user) {
        if (err) {
          res.json({
            message: 'fatal shit'
          }, 400);
        } else {
          res.json({
            message: 'Successfully removed user'
          }, 200);
        }
      });
    }
  });
};

exports.inboxRequestHandlers = require('./inboxRequestHandlers');
