var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var conversationSchema = new Schema({
  messages: [{
    id: Number
  }]
});

conversationSchema.plugin(autoIncrement.plugin, 'Conversation');
module.exports = mongoose.model('Conversation', conversationSchema);
