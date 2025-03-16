const mongoose = require('mongoose');

const timeSlotSchema = new mongoose.Schema({
  timeSlotLength: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  songCount: { // Add songCount field to track the number of songs
    type: Number,
    default: 0
  }
}, { timestamps: true });

const TimeSlot = mongoose.model('TimeSlot', timeSlotSchema);

module.exports = TimeSlot;
