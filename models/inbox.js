var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var inboxSchema = new Schema({
  owner: Number,
  conversations: [{
    id: Number,
    recipient: Number
  }],
  // id: Number
});

module.exports = mongoose.model('Inbox', inboxSchema);
