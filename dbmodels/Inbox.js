var ObjectId = require('mongoose-simpledb').Types.ObjectId;

exports.schema = {
  _id: Number,
  owner: Number,
  conversations: [{
    id: Number,
    recipient: Number
  }]
};
