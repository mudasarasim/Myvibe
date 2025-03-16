const Playlist = require('../models/Playlist');

// Add Playlist
const addPlaylist = async (req, res) => {
  const { playlistName } = req.body;

  try {
    if (!playlistName) {
      return res.status(400).json({ msg: 'Playlist name is required.' });
    }

    const newPlaylist = new Playlist({
      userId: req.user.id,
      playlistName,
    });

    await newPlaylist.save();
    res.status(201).json(newPlaylist);
  } catch (error) {
    console.error('Error adding playlist:', error);
    res.status(500).json({ msg: 'Server Error' });
  }
};

// Get All Playlists for Logged-In User
const getPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find({ userId: req.user.id });
    res.json(playlists);
  } catch (error) {
    console.error('Error fetching playlists:', error);
    res.status(500).json({ msg: 'Server Error' });
  }
};

// Edit Playlist
const editPlaylist = async (req, res) => {
  const { playlistName } = req.body;

  try {
    let playlist = await Playlist.findById(req.params.id);

    if (!playlist) {
      return res.status(404).json({ msg: 'Playlist not found' });
    }

    // Ensure the playlist belongs to the logged-in user
    if (playlist.userId.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    playlist.playlistName = playlistName || playlist.playlistName;

    await playlist.save();
    res.json(playlist);
  } catch (error) {
    console.error('Error editing playlist:', error);
    res.status(500).json({ msg: 'Server Error' });
  }
};



// Delete Playlist
const deletePlaylist = async (req, res) => {
  try {
    let playlist = await Playlist.findById(req.params.id);

    if (!playlist) {
      return res.status(404).json({ msg: 'Playlist not found' });
    }

    // Ensure the playlist belongs to the logged-in user
    if (playlist.userId.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Playlist.deleteOne({ _id: req.params.id });  // Use deleteOne() instead of remove()
    res.json({ msg: 'Playlist removed' });
  } catch (error) {
    console.error('Error deleting playlist:', error);
    res.status(500).json({ msg: 'Server Error' });
  }
};


module.exports = { addPlaylist, getPlaylists, editPlaylist, deletePlaylist };
