const mongoose = require('mongoose'); // Ensure mongoose is imported
const Schema = mongoose.Schema; // Destructure Schema from mongoose

const QueueSchema = new Schema({
  songId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Music', 
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false, // User ID is optional
  },
  timeSlotId: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TimeSlot', // Assuming you have a TimeSlot model
    required: false, // Make it optional to allow null values
    default: null, // Default to null if no time slot is provided
  },
  status: {
    type: Number,
    required: true, // Status is required
    default: 0, // Default to 0 if not provided
  },
  addedAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Queue', QueueSchema);
