const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  profilePicURI: {type: String},
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  durationWatched: {type: Number, default: 0},
  joined: {type: Date, default: Date.now},
  friends: {type: [String]},
  conversations: {type: [String]},
  bio: {type: String},
  unreadChats: {type: Number, default: 0},
  pendingRequests: {type: Boolean, default: false},
  watchlist: {type: [String]},
  ratings: {type: [String]}
});

module.exports = mongoose.models['User'] || mongoose.model('User', UserSchema);
