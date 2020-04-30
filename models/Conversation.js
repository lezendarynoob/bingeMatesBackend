const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConversationSchema = new Schema({
  users: {type: [String], required: true},
  chats: {type: [String], required: true},
  unread: {type: Number, default: 0}
});

const Conversation = mongoose.model('Conversation', ConversationSchema);

module.exports = Conversation;
