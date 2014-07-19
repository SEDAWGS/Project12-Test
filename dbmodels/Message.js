var ObjectId = require('mongoose-simpledb').Types.ObjectId;

exports.schema = {
  _id: Number,
  body: String,
  sender: Number
};
