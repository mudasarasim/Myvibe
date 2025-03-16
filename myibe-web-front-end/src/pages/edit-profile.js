// src/EditProfile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BASE_URL from './config'; // Import the BASE_URL

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    venueName: '',
    venueType: '',
    address: '',
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');

        const response = await axios.get(`${BASE_URL}/api/auth/users/profile`, {
          headers: {
            'x-auth-token': token,
          },
        });

        setFormData({
          name: response.data.name || '',
          email: response.data.email || '',
          phone: response.data.phone || '',
          venueName: response.data.venueName || '',
          venueType: response.data.role || '',
          address: response.data.address || '',
        });
        setLoading(false);

      } catch (error) {
        toast.error('Error fetching user data.');
        console.error('There was an error fetching the user data:', error);
      }
    };

    fetchUserData();
  }, []);

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

    try {
      const token = localStorage.getItem('token');

      const response = await axios.put(`${BASE_URL}/api/auth/users/me`, formData, {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      });

      toast.success('Profile updated successfully!');
      setFormData(response.data); // Update formData with the response data

    } catch (error) {
      toast.error('Error updating profile. Please try again.');
      console.error('There was an error updating the profile:', error);
    }
  };

  return (
    <div className="edit-profile">
      <main className="content">
        <div className="form_container">
          <h2>Edit Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="form_group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form_group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form_group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form_group">
              <label htmlFor="venueName">Venue Name:</label>
              <input
                type="text"
                id="venueName"
                name="venueName"
                value={formData.venueName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form_group">
              <label htmlFor="venueType">Your Role:</label>
              <input
                type="text"
                id="venueType"
                name="venueType"
                value={formData.venueType}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form_group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Save Changes</button>
          </form>
          <ToastContainer />
        </div>
      </main>
    </div>
  );
};

export default EditProfile;
