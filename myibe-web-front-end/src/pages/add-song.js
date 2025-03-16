import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select'; // Import react-select
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BASE_URL from './config'; // Adjust the path as needed

const AddSong = () => {
  const [formData, setFormData] = useState({
    songId: '',
    playlistId: '',
  });
  const [songs, setSongs] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const songsResponse = await axios.get(`${BASE_URL}/api/music`, {
          headers: { 'x-auth-token': token },
        });
        setSongs(songsResponse.data);

        const playlistsResponse = await axios.get(`${BASE_URL}/api/playlists/user`, {
          headers: { 'x-auth-token': token },
        });
        setPlaylists(playlistsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('Error fetching data. Please try again.');
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { songId, playlistId } = formData;

    if (!songId || !playlistId) {
      toast.error('Please select both a song and a playlist.');
      return;
    }

    try {
      const token = localStorage.getItem('token');

      const response = await axios.post(`${BASE_URL}/api/playlist-songs/add-song-to-playlist`, {
        songId,
        playlistId,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      });

      toast.success(response.data.msg || 'Song added to playlist successfully!');
      setFormData({ songId: '', playlistId: '' }); // Reset form
    } catch (error) {
      const errorMessage = error.response?.data?.msg || 'Error adding song to playlist. Please try again.';
      toast.error(errorMessage);
      console.error('There was an error adding the song to the playlist:', errorMessage);
    }
  };

  // Prepare options for react-select
  const songOptions = songs.map((song) => ({
    value: song._id,
    label: song.songName,
  }));

  const playlistOptions = playlists.map((playlist) => ({
    value: playlist._id,
    label: playlist.playlistName,
  }));

  return (
    <div className="admin-dashboard">
      <main className="content">
        <div className="container mt-5">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title mb-4">Add Song to Playlist</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="songId" className="form-label">Select Song:</label>
                  <Select
                    id="songId"
                    name="songId"
                    value={songOptions.find(option => option.value === formData.songId)}
                    onChange={(selectedOption) => setFormData({ ...formData, songId: selectedOption.value })}
                    options={songOptions}
                    placeholder="Search for a song..."
                    isSearchable
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="playlistId" className="form-label">Select Playlist:</label>
                  <Select
                    id="playlistId"
                    name="playlistId"
                    value={playlistOptions.find(option => option.value === formData.playlistId)}
                    onChange={(selectedOption) => setFormData({ ...formData, playlistId: selectedOption.value })}
                    options={playlistOptions}
                    placeholder="Search for a playlist..."
                    isSearchable
                    required
                  />
                </div>

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
          <ToastContainer />
        </div>
      </main>
    </div>
  );
};

export default AddSong;
