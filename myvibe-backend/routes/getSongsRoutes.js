const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { 
  getSongsByPlaylist, 
  getAllSongsForUser, 
  getAllSongsByUserNoAuth, 
  addToQueue,
  getQueueSongsForUser,
  getQueueSongsRequests,
  updateSongStatus,
  suggestSong,
  getSuggestSongs,
  deleteSuggestedSong,
  submitReview,
  getAllReviews,
  deleteSongFromQueue // Import the new function
} = require('../controllers/getSongsController');

// @route   GET /api/playlist-songs/:playlistId
// @desc    Get all songs in a playlist for the logged-in user
// @access  Private
router.get('/playlist-songs/:playlistId', auth, getSongsByPlaylist);

// @route   GET /api/user-songs
// @desc    Get all songs of the logged-in user
// @access  Private
router.get('/user-songs', auth, getAllSongsForUser);

// @route   GET /api/public-user-songs
// @desc    Get all songs of a user without authentication
// @access  Public
router.get('/public-user-songs', getAllSongsByUserNoAuth);

// @route   POST /api/add-to-queue
// @desc    Add a song to the queue for the logged-in user
// @access  Private
router.post('/add-to-queue', addToQueue);

// @route   GET /api/queue-songs
// @desc    Get all songs in the queue for the logged-in user
// @access  Private
router.get('/queue-songs', getQueueSongsForUser);

// @route   GET /api/queue-songs-requests
// @desc    Get all song requests with status 0 for the logged-in user
// @access  Private
router.get('/queue-songs-requests', auth, getQueueSongsRequests);

// @route   PUT /api/update-song-status
// @desc    Update the status of a song from 0 to 1
// @access  Private
router.put('/update-song-status', auth, updateSongStatus);

// @route   DELETE /api/queue/delete/:songId
// @desc    Delete a song from the queue
// @access  Private
router.delete('/queue/delete/:songId', auth, deleteSongFromQueue);

// POST route to suggest a song
router.post('/suggest/:userId', suggestSong);

// @route   GET /api/playlists
// @desc    Get all playlists for the logged-in user
// @access  Private
router.get('/suggest-songs/:userId', getSuggestSongs);

// Route to delete a song suggestion by ID (DELETE)
router.delete('/delete-suggest-songs/:id', deleteSuggestedSong);

// @route   POST /api/add-to-queue
// @desc    Add a song to the queue for the logged-in user
// @access  Private
router.post('/reviews', submitReview);

// Route to get all reviews
router.get('/reviews', getAllReviews);

module.exports = router;
