const User = require('../models/User');
const bcrypt = require('bcryptjs'); // Added bcrypt for password hashing
const crypto = require('crypto');
const nodemailer = require('nodemailer');

// Function to send an email using nodemailer
const sendEmail = async (to, subject, html) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services like SendGrid or SES
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    html,
  };

  await transporter.sendMail(mailOptions);
};

// Function to send password reset email
const sendPasswordResetEmail = (email, token) => {
  const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;

  const message = `
    <h1>You requested a password reset</h1>
    <p>Please click on the following link to reset your password:</p>
    <a href="${resetUrl}" clicktracking=off>${resetUrl}</a>
  `;

  return sendEmail(email, 'Password Reset Request', message);
};

// @desc    Forgot password
// @route   POST api/auth/forgot-password
// @access  Public
const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    // Check if the user with the email exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Email does not exist' });
    }

    // Generate a reset token
    const resetToken = crypto.randomBytes(20).toString('hex');
    
    // Set token expiration (1 hour)
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpire = Date.now() + 3600000; // 1 hour
    await user.save();

    // Send the email
    await sendPasswordResetEmail(user.email, resetToken);

    res.status(200).json({ msg: 'Email sent with password reset link' });

  } catch (err) {
    console.error('Error in forgot password:', err);
    res.status(500).send('Server error');
  }
};

// @desc    Reset password
// @route   POST api/auth/reset-password
// @access  Public
const resetPassword = async (req, res) => {
    const { resetToken } = req.params;
    const { password } = req.body;

    try {
        // Find user by reset token and check expiration
        const user = await User.findOne({
            resetPasswordToken: resetToken,
            resetPasswordExpire: { $gt: Date.now() }, // Ensure token is valid
        });

        if (!user) {
            return res.status(400).json({ msg: 'Invalid or expired reset token' });
        }

        // Hash and update the user's password
        const hashedPassword = password;
        user.password = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

        res.status(200).json({ msg: 'Password reset successfully' });
    } catch (err) {
        console.error('Error resetting password:', err);
        res.status(500).send('Server error');
    }
};
  

module.exports = { forgotPassword, resetPassword };
