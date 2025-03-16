// src/PlaylistSongs.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom'; // To extract playlist ID from the URL
import { Button, Table } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import BASE_URL from './config'; // Import BASE_URL from config

const PlaylistSongs = () => {
  const [musics, setMusics] = useState([]);
  const location = useLocation();

  // Extract playlist ID from URL query parameters
  const queryParams = new URLSearchParams(location.search);
  const playlistId = queryParams.get('playlistId');

  useEffect(() => {
    const fetchMusics = async () => {
      if (!playlistId) {
        toast.error('No playlist ID found in URL.');
        return;
      }

      try {
        const response = await axios.get(`${BASE_URL}/api/playlist/playlist-songs/${playlistId}`, {
          headers: { 'x-auth-token': localStorage.getItem('token') }
        });
        console.log('Fetched musics:', response.data); // Debug line
        setMusics(response.data);
      } catch (error) {
        console.error('Error fetching music:', error);
        toast.error('Error fetching music. Please try again.');
      }
    };

    fetchMusics();
  }, [playlistId]); // Dependency array includes playlistId

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this music?')) {
      try {
        await axios.delete(`${BASE_URL}/api/playlist-songs/delete-song-from-playlist`, {
          headers: { 'x-auth-token': localStorage.getItem('token') },
          data: { // This is where you send the body data
            songId: id,
            playlistId: playlistId
          }
        });
        setMusics(musics.filter(music => music._id !== id));
        toast.success('Music deleted successfully!');
      } catch (error) {
        console.error('Error deleting music:', error);
        toast.error('Error deleting music. Please try again.');
      }
    }
  };

  return (
    <div className='admin-dashboard'>
      <main className="content">
        <div className='container mt-5'>
          <h1 className="mb-4">Songs in Playlist</h1>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Serial #</th>
                <th>Song Name</th>
                <th>Artist Name</th>
                <th>File</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {musics.map((music, index) => (
                <tr key={music._id}>
                  <td>{index + 1}</td>
                  <td>{music.songName}</td>
                  <td>{music.artistName}</td>
                  <td>
                    <audio controls>
                      <source 
                        src={`${BASE_URL}/${music.song}`} 
                        type="audio/mpeg"
                        onError={() => toast.error('Error loading audio file.')}
                      />
                      Your browser does not support the audio element.
                    </audio>
                  </td>
                  <td>
                    <Button variant="danger" onClick={() => handleDelete(music._id)} className="ms-2">
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <ToastContainer />
        </div>
      </main>
    </div>
  );
};

export default PlaylistSongs;
