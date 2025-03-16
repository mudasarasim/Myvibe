const express = require('express');
const router = express.Router();
const { addPlaylist, getPlaylists, editPlaylist, deletePlaylist } = require('../controllers/playlistController');
const auth = require('../middleware/auth');
const Playlist = require('../models/Playlist'); // Import Playlist model
const Song = require('../models/Song'); // Import Song model

// @route   POST /api/playlists
// @desc    Create a new playlist
// @access  Private
router.post('/', auth, addPlaylist);

// @route   GET /api/playlists
// @desc    Get all playlists for the logged-in user
// @access  Private
router.get('/', auth, getPlaylists);

// @route   GET /api/playlists/user
// @desc    Get all playlists for the logged-in user
// @access  Private
router.get('/user', auth, async (req, res) => {
  try {
    const playlists = await Playlist.find({ userId: req.user.id });
    res.json(playlists);
  } catch (err) {
    console.error('Error fetching playlists:', err);
    res.status(500).send('Server error');
  }
});

// playlistRouter.js
// @route   GET /api/playlists/songs/:playlistId
// @desc    Get all songs for a specific playlist
// @access  Private
// router.get('/songs/:playlistId', auth, getSongsByPlaylist);


// @route   PUT /api/playlists/:id
// @desc    Edit a playlist
// @access  Private
router.put('/:id', auth, editPlaylist);

// @route   DELETE /api/playlists/:id
// @desc    Delete a playlist
// @access  Private
router.delete('/:id', auth, deletePlaylist);

module.exports = router;
