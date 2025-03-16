const QRCode = require('qrcode');
const QrCodeModel = require('../models/qrCodeModel');

// Function to save QR code image
exports.saveQrCodeImage = async (req, res) => {
  try {
    const { link, color, userId } = req.body;

    if (!link || !color || !userId) {
      return res.status(400).json({ message: 'Missing required fields.' });
    }

    // Generate QR code image (Base64)
    const qrCodeDataURL = await QRCode.toDataURL(link, { color: { dark: color, light: '#FFFFFF' } });

    // Create a new QR code entry with just the image and user ID
    const newQrCode = new QrCodeModel({
      userId,
      qrCodeImage: qrCodeDataURL,
    });

    // Save to the database
    await newQrCode.save();

    // Send success response
    res.status(201).json({ message: 'QR Code image saved successfully!', qrCode: newQrCode });
  } catch (error) {
    console.error('Error saving QR Code image:', error); // Log error details
    res.status(500).json({ message: 'Error saving QR Code image', error: error.message });
  }
};
