// models/SongSuggestion.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSuggestionSchema = new Schema({
  songTitle: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Assuming a User model exists
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('SongSuggestion', SongSuggestionSchema);
