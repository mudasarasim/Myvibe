const mongoose = require('mongoose');

const MusicSchema = new mongoose.Schema({
  songName: {
    type: String,
    required: true,
  },
  artistName: {
    type: String,
    required: true,
  },
  song: {
    type: String, // Store the file path or file URL
    required: true,
  },
  playlistIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Playlist' }], // Array of playlist IDs
  userIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Array of user IDs
  // timeSlotIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Timeslots' }], // Array of user IDs
  status: {
    type: Number, // 1 for admin, 0 for non-admin
    default: 0,
    required: true,
  },
});

module.exports = mongoose.model('Music', MusicSchema);
