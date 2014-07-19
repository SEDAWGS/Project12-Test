var ObjectId = require('mongoose-simpledb').Types.ObjectId;

exports.schema = {
  _id: Number,
  messages: [{
    id: Number
  }]
};
