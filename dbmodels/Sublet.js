var ObjectId = require('mongoose-simpledb').Types.ObjectId;

exports.schema = {
  _id: Number,
  address: String,
  price: Number,
  details: String
};
