const mongoose = require('mongoose');
const PlaylistSong = require('../models/PlaylistSong');
const Music = require('../models/Music');

// Add Song to Playlist
const addSongToPlaylist = async (req, res) => {
  const { songId, playlistId } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(songId) || !mongoose.Types.ObjectId.isValid(playlistId)) {
      return res.status(400).json({ msg: 'Invalid song or playlist ID.' });
    }

    // Check if the song is already in the playlist
    const existingPlaylistSong = await PlaylistSong.findOne({ song: songId, playlist: playlistId });
    if (existingPlaylistSong) {
      return res.status(400).json({ msg: 'Song is already in the playlist.' });
    }

    // Create a new PlaylistSong document
    const playlistSong = new PlaylistSong({
      song: songId,
      playlist: playlistId,
      userId: req.user.id,  // Use the current logged-in user ID
    });

    await playlistSong.save();

    // Update Music document to add both playlistId and userId
    await Music.findByIdAndUpdate(
      songId,
      {
        $addToSet: { 
          playlistIds: playlistId,  // Add playlistId to the playlistIds array
          userIds: req.user.id,      // Add userId to the userIds array
        },
      },
      { new: true, runValidators: true }
    );

    res.json({ msg: 'Song added to playlist successfully!' });
  } catch (error) {
    console.error('Error adding song to playlist:', error.message);
    res.status(500).send('Server Error');
  }
};

// Delete Song from Playlist
const deleteSongFromPlaylist = async (req, res) => {
  const { songId, playlistId } = req.body; // Note: Ensure the request body contains both songId and playlistId

  try {
    if (!mongoose.Types.ObjectId.isValid(songId) || !mongoose.Types.ObjectId.isValid(playlistId)) {
      return res.status(400).json({ msg: 'Invalid song or playlist ID.' });
    }

    // Check if the song is in the playlist
    const existingPlaylistSong = await PlaylistSong.findOne({ song: songId, playlist: playlistId });
    if (!existingPlaylistSong) {
      return res.status(404).json({ msg: 'Song not found in the playlist.' });
    }

    // Delete the PlaylistSong document
    await PlaylistSong.deleteOne({ song: songId, playlist: playlistId });

    // Update Music document to remove playlistId
    await Music.findByIdAndUpdate(
      songId,
      {
        $pull: { playlistIds: playlistId },
      },
      { new: true, runValidators: true }
    );

    // Optionally, remove the userId from the Music document if no other playlists are associated with this user
    const music = await Music.findById(songId);
    if (music && music.playlistIds.length === 0) {
      await Music.findByIdAndUpdate(
        songId,
        {
          $pull: { userIds: req.user.id },
        },
        { new: true, runValidators: true }
      );
    }

    res.json({ msg: 'Song removed from playlist successfully!' });
  } catch (error) {
    console.error('Error removing song from playlist:', error.message);
    res.status(500).send('Server Error');
  }
};


module.exports = { addSongToPlaylist, deleteSongFromPlaylist };
