const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
  from: {type: String, required: true},
  to: {type: String, required: true},
  message: {type: String},
  date: {type: Date, default: Date.now}
});

const Request = mongoose.model('Request', RequestSchema);

module.exports = Request;
