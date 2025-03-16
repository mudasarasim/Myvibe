const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { addSongToPlaylist, getSongsByPlaylist, deleteSongFromPlaylist } = require('../controllers/playlistSongController'); // Ensure this import is correct

// @route   POST /api/playlist-songs
// @desc    Add a song to a playlist
// @access  Private
router.post('/add-song-to-playlist', auth, addSongToPlaylist);

// @route   DELETE /api/playlist-songs/delete-song-from-playlist
// @desc    Delete a song from a playlist
// @access  Private
router.delete('/delete-song-from-playlist', auth, deleteSongFromPlaylist);

module.exports = router;
