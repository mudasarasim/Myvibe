const express = require('express');
const router = express.Router();
const { createTimeSlot, getTimeSlots, updateTimeSlot, deleteTimeSlot } = require('../controllers/timeSlotController');
const auth = require('../middleware/auth');

// Create a new time slot
router.post('/', auth, createTimeSlot);

// Get all time slots
router.get('/', getTimeSlots);

// Update a time slot
router.put('/:id', auth, updateTimeSlot);

// Delete a time slot
router.delete('/:id', auth, deleteTimeSlot);

module.exports = router;
