const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const auth = require('../middleware/auth'); // Import the auth middleware

// @desc    Register a new user
// @route   POST api/auth/signup
// @access  Public
const signup = async (req, res) => {
  const { name, email, phone, venueName, venueType, address, role, password, confirmPassword } = req.body;

  console.log('Request Body:', req.body);

  if (password !== confirmPassword) {
    return res.status(400).json({ msg: 'Passwords do not match' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const newUser = new User({
      name,
      email,
      phone,
      venueName,
      venueType,
      address,
      role,
      password,
    });

    await newUser.save();

    // Logging to check if the name is correctly saved
    console.log('New User:', newUser); 

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '24h' });

    // Respond with token and username
    return res.json({
      token,
      userId: newUser._id,
      username: newUser.name,  // Ensure this is correct
      venueType: newUser.venueType,
    });
  } catch (err) {
    console.error('Signup Error:', err);
    res.status(500).send('Server error');
  }
};


// @desc    Authenticate user and get token
// @route   POST api/auth/login
// @access  Public
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });

    // Logging to check if the name is correctly fetched
    console.log('Login User:', user); 

    return res.json({
      token,
      userId: user._id,
      username: user.name,  // Ensure this is correct
      venueType: user.venueType,
    });
  } catch (err) {
    console.error('Login Error:', err);
    res.status(500).send('Server error');
  }
};

// @desc    Get all users
// @route   GET api/users
// @access  Private
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password'); // Exclude passwords from the response
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).send('Server error');
  }
};

/// @desc    Delete a user
// @route   DELETE api/users/:id
// @access  Private
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json({ msg: 'User removed' });
  } catch (err) {
    console.error('Error deleting user:', err);
    res.status(500).send('Server error');
  }
};


// @desc    Update user profile
// @route   PUT api/users/me
// @access  Private
const updateUserProfile = async (req, res) => {
  const { name, email, phone, venueName, venueType, address } = req.body;

  try {
    // Find the logged-in user using the token
    const user = await User.findById(req.user.id); // req.user.id comes from the auth middleware

    // if (!user) {
    //   return res.status(404).json({ msg: 'User not found' });
    // }

    // Update user fields
    user.name = name || user.name;
    user.email = email || user.email;
    user.phone = phone || user.phone;
    user.venueName = venueName || user.venueName;
    user.venueType = venueType || user.venueType;
    user.address = address || user.address;

    await user.save();

    res.json(user);
  } catch (err) {
    console.error('Error updating user profile:', err);
    res.status(500).send('Server error');
  }
};

// @desc    Get the profile of the currently logged-in user
// @route   GET api/users/me
// @access  Private
const getUserProfile = async (req, res) => {
  try {
    // Find the logged-in user using the token
    const user = await User.findById(req.user.id).select('-password'); // Exclude password from the response

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    res.json(user);
  } catch (err) {
    console.error('Error fetching user profile:', err);
    res.status(500).send('Server error');
  }
};

module.exports = { signup, login, getAllUsers, deleteUser, updateUserProfile, getUserProfile };

