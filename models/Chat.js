const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  sender: {type: String, required: true},
  message: {type: String, required: true},
  date: {type: Date, default: Date.now}
});

const Chat = mongoose.model('Chat', ChatSchema);

module.exports = Chat;
