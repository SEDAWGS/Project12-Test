var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var conversationSchema = new Schema({
  messages: [{
    id: Number,
    body: String,
    sender: Number
  }]
});

module.exports = mongoose.model('Conversation', conversationSchema);
