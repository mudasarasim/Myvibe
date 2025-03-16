const mongoose = require('mongoose');

const PlaylistSchema = new mongoose.Schema({
  playlistName: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Playlist', PlaylistSchema);
