const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContentSchema = new Schema({
  contentId: {type: String, required: true},
  contentType: {type: String, required: true},
  lastSeason: {type: Number, default: 0},
  lastEpisode: {type: Number, default: 0}
});

const Content = mongoose.model('Content', ContentSchema);

module.exports = Content;
