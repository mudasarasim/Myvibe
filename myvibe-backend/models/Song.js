const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
  songName: {
    type: String,
    required: true,
  },
  artistName: {
    type: String,
    required: true,
  },
  songFile: {
    type: String, // URL or path to the song file
  },
  
});

module.exports = mongoose.model('Song', SongSchema);
