import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BASE_URL from './config';  // Import the base URL

const AddUserSong = () => {
  const [formData, setFormData] = useState({
    songName: '',
    artistName: '',
    songFile: null,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      const file = files[0];
      // Check if the file is an audio file
      if (file && !file.type.startsWith('audio/')) {
        toast.error('Only audio files are allowed!');
        setFormData({
          ...formData,
          [name]: null,
        });
      } else {
        setFormData({
          ...formData,
          [name]: file,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.songFile) {
      toast.error('Please upload a valid audio file.');
      return;
    }

    // Get venueType from localStorage and set status accordingly
    const venueType = localStorage.getItem('venueType');
    const status = venueType === 'admin' ? 1 : 0; // Set status based on venueType

    // Create a FormData object to handle file uploads
    const data = new FormData();
    data.append('songName', formData.songName);
    data.append('artistName', formData.artistName);
    data.append('songFile', formData.songFile);
    data.append('status', status); // Append status to form data

    try {
      // Retrieve token from localStorage
      const token = localStorage.getItem('token');
      
      // Make the API request using BASE_URL
      const response = await axios.post(`${BASE_URL}/api/music`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-auth-token': token,  // Include the token in the headers
        },
      });

      // Handle success with response data
      toast.success(`Music added successfully! ID: ${response.data.id}`);
      
      // Clear form fields
      setFormData({
        songName: '',
        artistName: '',
        songFile: null,
      });

    } catch (error) {
      // Handle error
      toast.error('Error adding music. Please try again.');
      console.error('There was an error uploading the music:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <main className="content">
        <div className="form_container">
          <h2>Add song</h2>
          <form onSubmit={handleSubmit}>
            <div className="form_group">
              <label htmlFor="songName">Song Name:</label>
              <input
                type="text"
                id="songName"
                name="songName"
                value={formData.songName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form_group">
              <label htmlFor="artistName">Artist Name:</label>
              <input
                type="text"
                id="artistName"
                name="artistName"
                value={formData.artistName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form_group">
              <label htmlFor="songFile">Upload Song:</label>
              <input
                type="file"
                id="songFile"
                name="songFile"
                accept="audio/*"  // Restrict file type on the file input
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

export default AddUserSong;
