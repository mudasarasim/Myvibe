const express = require('express');
const router = express.Router();
const { saveQrCodeImage } = require('../controllers/qrCodeController');

// POST route to save QR code image
router.post('/save-qrcode', saveQrCodeImage);

module.exports = router;
