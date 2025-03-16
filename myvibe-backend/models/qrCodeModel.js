const mongoose = require('mongoose');

// Define the QR Code schema
const qrCodeSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  qrCodeImage: {
    type: String, // Base64 QR Code image (data URL)
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('QrCode', qrCodeSchema);
