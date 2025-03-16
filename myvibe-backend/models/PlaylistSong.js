const mongoose = require('mongoose');

const PlaylistSongSchema = new mongoose.Schema({
  song: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Song',
    required: true,
  },
  playlist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Playlist',
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('PlaylistSong', PlaylistSongSchema);