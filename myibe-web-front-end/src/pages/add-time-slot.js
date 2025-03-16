import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BASE_URL from './config'; // Adjust the path as needed

const AddTimeSlot = () => {
  const [formData, setFormData] = useState({
    timeSlotLength: '',
    price: '',
  });

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.timeSlotLength || !formData.price) {
      toast.error('Please provide both time slot length and price.');
      return;
    }

    try {
      const token = localStorage.getItem('token');

      // Make the API request using BASE_URL
      await axios.post(`${BASE_URL}/api/timeslots`, formData, {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      });

      toast.success('Time slot created successfully!');

      // Clear form fields
      setFormData({
        timeSlotLength: '',
        price: '',
      });

    } catch (error) {
      toast.error('Error creating time slot. Please try again.');
      console.error('There was an error creating the time slot:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <main className="content">
        <div className="form_container">
          <h2>Add Time Slot</h2>
          <form onSubmit={handleSubmit}>
            <div className="form_group">
              <label htmlFor="timeSlotLength">Time Slot Length</label>
              <input
                type="text"
                id="timeSlotLength"
                name="timeSlotLength"
                value={formData.timeSlotLength}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form_group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          <ToastContainer />
        </div>
      </main>
    </div>
  );
};

export default AddTimeSlot;
