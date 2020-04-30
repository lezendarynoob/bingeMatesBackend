const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  profilePicURL: {type: String},
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  gender: {type: String, required: true},
  dob: {type:Date, required: true},
  durationWatched: {type: Number, default: 0},
  favGenres: {type: [String], required: true},
  joined: {type: Date, default: Date.now},
  friends: {type: [String]},
  conversations: {type: [String]},
  bio: {type: String},
  unreadChats: {type: Number, default: 0},
  pendingRequests: {type: Boolean, default: false},
  watchlist: {type: [String]},
  ratings: {type: [String]}

});

const User = mongoose.model('User', UserSchema);

module.exports = User;
