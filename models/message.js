var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
  // id: Number,
  body: String,
  sender: Number
});

module.exports = mongoose.model('Message', messageSchema);
