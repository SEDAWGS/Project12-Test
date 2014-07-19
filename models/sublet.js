var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var subletSchema = new Schema({
  address: String,
  price: Number,
  details: String,
  // id: Number
});

module.exports = mongoose.model('Sublet', subletSchema);
