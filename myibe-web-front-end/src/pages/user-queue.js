import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Table, Alert, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import BASE_URL from './config'; // Import the base URL

const UserQueue = () => {
  const [musics, setMusics] = useState([]);
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null);
  const location = useLocation();

  // Extract userId from URL
  const getUserIdFromURL = () => {
    const params = new URLSearchParams(location.search);
    return params.get('userId');
  };

  const userId = getUserIdFromURL(); // Extract userId

  // Fetch queued musics for the user
  const fetchQueueMusics = useCallback(async () => {
    try {
      if (userId) {
        const response = await axios.get(`${BASE_URL}/api/playlist/queue-songs`, {
          params: { userId },
          headers: { 'x-auth-token': localStorage.getItem('token') },
        });
        console.log('Fetched queue musics:', response.data);
        setMusics(response.data); // Set the musics in the state
      } else {
        toast.error('No userId found in URL.');
      }
    } catch (error) {
      console.error('Error fetching queue music:', error);
      toast.error('Error fetching queue music. Please try again.');
    }
  }, [userId]);

  useEffect(() => {
    fetchQueueMusics(); // Fetch data when component mounts

    // Set up interval to fetch data every 5 seconds (5000ms)
    const id = setInterval(() => {
      fetchQueueMusics();
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(id);
  }, [fetchQueueMusics]); // Include fetchQueueMusics in the dependency array

  // Play a specific music at the given index
  const playMusicAtIndex = (index) => {
    const audioElements = document.querySelectorAll('audio');
    if (audioElements.length > 0 && index < audioElements.length) {
      const audioElement = audioElements[index];
      audioElement.play();
      setCurrentPlayingIndex(index);
      audioElement.onended = () => {
        const nextIndex = index + 1;
        if (nextIndex < musics.length) {
          playMusicAtIndex(nextIndex); // Play the next song
        } else {
          console.log('All songs have been played.');
        }
      };
    }
  };

  // Handle play all action
  const handlePlayAll = () => {
    if (musics.length > 0) {
      playMusicAtIndex(0); // Start playing from the first song
    }
  };

  // Toggle play/pause for a specific song
  const handlePlayPause = (musicId, audioElement) => {
    const audio = audioElement;
    if (audio) {
      if (audio.paused) {
        audio.play();
        setCurrentPlayingIndex(musics.findIndex((music) => music._id === musicId));
      } else {
        audio.pause();
        setCurrentPlayingIndex(null); // Reset the current playing index when paused
      }
    }
  };

  // Determine the play button class based on the music's play state
  const getPlayButtonClass = (musicId) => {
    const isPlaying =
      currentPlayingIndex !== null && !document.querySelector(`audio[data-id='${musicId}']`)?.paused;
    return isPlaying ? 'play-button playing' : 'play-button';
  };

  return (
    <div className="container mt-4">
      <div className="lock">
        <img src="images/logo.png" width={230} height={100} alt="Logo" />
      </div>
      <h1 className="mb-2 mt-3">Songs in Queue</h1>
      <Table striped bordered hover responsive>
        <tbody>
          {musics.length === 0 ? (
            <tr>
              <td colSpan="4">
                <Alert variant="info">No songs in the queue.</Alert>
              </td>
            </tr>
          ) : (
            musics.map((music, index) => (
              <tr key={music._id}>
                <td>
                  <h2>
                    {music.songName} - {music.artistName}
                  </h2>
                </td>
                <td>
                  <div className="music-item">
                    <Button
                      className={getPlayButtonClass(music._id)}
                      onClick={(e) => handlePlayPause(music._id, e.target.nextSibling)}
                    >
                      {currentPlayingIndex === index &&
                      !document.querySelector(`audio[data-id='${music._id}']`)?.paused
                        ? '⏸️'
                        : '▶️'}
                    </Button>
                    <audio
                      src={`${BASE_URL}/${music.song}`} // Use base URL for audio file
                      type="audio/mpeg"
                      data-id={music._id}
                      ref={(audio) => {
                        if (audio)
                          audio.addEventListener('error', () => toast.error('Error loading audio file.'));
                      }}
                    />
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
      <ToastContainer />
    </div>
  );
};

export default UserQueue;
