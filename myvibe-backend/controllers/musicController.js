const Music = require('../models/Music');
const path = require('path');
const fs = require('fs');

// @desc    Add new music
// @route   POST api/music
// @access  Private
const addMusic = async (req, res) => {
  try {
    const { songName, artistName, status } = req.body; // Extract status from req.body
    const songFile = req.file; // multer will store the file in req.file

    if (!songName || !artistName || !songFile) {
      return res.status(400).json({ msg: 'Please include all fields' });
    }

    // Save file path or handle file as needed
    const songFilePath = songFile.path;

    const newMusic = new Music({
      songName,
      artistName,
      song: songFilePath, // Store the file path in the database
      status, // Save status (1 for admin, 0 for non-admin)
    });

    const music = await newMusic.save();
    res.json(music);
  } catch (err) {
    console.error('Error adding music:', err);
    res.status(500).send('Server error');
  }
};

// @desc    Get all music uploaded by admin
// @route   GET api/music/admin
// @access  Private
const getAllMusic = async (req, res) => {
  try {
    // Find all music without any status filter
    const musics = await Music.find({});
    
    res.json(musics);
  } catch (err) {
    console.error('Error fetching music:', err);
    res.status(500).send('Server error');
  }
};

// @desc    Get all user-uploaded songs (status: 0)
// @route   GET api/music/user-songs
// @access  Private
const getAllUserSongs = async (req, res) => {
  try {
    // Find all songs where the status is 0 (user-uploaded songs)
    const musics = await Music.find({ status: 0 });

    res.json(musics);
  } catch (err) {
    console.error('Error fetching user songs:', err);
    res.status(500).send('Server error');
  }
};

// @desc    Approve music (update status from 0 to 1)
// @route   PUT api/music/approve/:id
// @access  Private (Admin only)
const approveMusic = async (req, res) => {
  try {
    const music = await Music.findById(req.params.id);

    if (!music) {
      return res.status(404).json({ msg: 'Music not found' });
    }

    // Check if the song is already approved
    if (music.status === 1) {
      return res.status(400).json({ msg: 'Music is already approved' });
    }

    // Update status to 1 (approved)
    music.status = 1;
    await music.save();

    res.json({ msg: 'Music approved successfully', music });
  } catch (err) {
    console.error('Error approving music:', err);
    res.status(500).send('Server error');
  }
};


// @desc    Delete a music entry
// @route   DELETE api/music/:id
// @access  Private
const deleteMusic = async (req, res) => {
  try {
    // Find the music entry by ID and delete it
    const music = await Music.findById(req.params.id);

    if (!music) {
      return res.status(404).json({ msg: 'Music not found' });
    }

    // Attempt to delete the file from the server
    if (fs.existsSync(music.song)) {
      fs.unlinkSync(music.song);
    }

    // Delete the music entry from the database
    await Music.findByIdAndDelete(req.params.id);

    res.json({ msg: 'Music removed' });
  } catch (err) {
    console.error('Error deleting music:', err);
    res.status(500).send('Server error');
  }
};
// @desc    Update a music entry
// @route   PUT api/music/:id
// @access  Private
const updateMusic = async (req, res) => {
  try {
    const { songName, artistName } = req.body;
    const music = await Music.findById(req.params.id);
    if (!music) {
      return res.status(404).json({ msg: 'Music not found' });
    }

    music.songName = songName || music.songName;
    music.artistName = artistName || music.artistName;

    const updatedMusic = await music.save();
    res.json(updatedMusic);
  } catch (err) {
    console.error('Error updating music:', err);
    res.status(500).send('Server error');
  }
};

module.exports = {
  addMusic,
  getAllMusic,
  deleteMusic,
  updateMusic,
  getAllUserSongs, 
  approveMusic
};
