const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RatingSchema = new Schema({
  contentID: {type: String, required: true},
  uid: {type: String, required: true},
  rating: {type: Number, min: 0, max: 100, required: true}
});

const Rating = mongoose.model('Rating', RatingSchema);

module.exports = Rating;
