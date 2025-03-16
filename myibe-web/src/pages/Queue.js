import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Table, Alert, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import BASE_URL from './config';

const Queue = () => {
  const [musics, setMusics] = useState([]);
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null);
  const [lastPlayedIndex, setLastPlayedIndex] = useState(-1);
  const [isFirstSongPlayed, setIsFirstSongPlayed] = useState(false); // Track if first song is played
  const location = useLocation();

  const getUserIdFromURL = () => {
    const params = new URLSearchParams(location.search);
    return params.get('userId');
  };

  const userId = getUserIdFromURL();
  const isUserIdAvailable = localStorage.getItem('userId') !== null;

  const fetchQueueMusics = useCallback(async () => {
    try {
      if (userId) {
        const response = await axios.get(`${BASE_URL}/api/playlist/queue-songs`, {
          params: { userId },
          headers: { 'x-auth-token': localStorage.getItem('token') },
        });
        setMusics(response.data);
        return response.data; // Return the fetched data
      } else {
        toast.error('No userId found in URL.');
      }
    } catch (error) {
      console.error('Error fetching queue music:', error);
      toast.error('No song in the queue. Please add song in the queue.');
    }
  }, [userId]);

  useEffect(() => {
    const id = setInterval(fetchQueueMusics, 5000);
    return () => clearInterval(id);
  }, [fetchQueueMusics]);

  useEffect(() => {
    if (musics.length > 0 && lastPlayedIndex < musics.length - 1) {
      // Automatically start playback of newly added songs if nothing is currently playing
      if (currentPlayingIndex === null && isFirstSongPlayed) {
        playMusicAtIndex(lastPlayedIndex + 1);
      }
    }
  }, [musics, currentPlayingIndex, lastPlayedIndex, isFirstSongPlayed]);

  const deleteSongFromQueue = async (musicId) => {
    try {
      await axios.delete(`${BASE_URL}/api/playlist/queue/delete/${musicId}`, {
        headers: { 'x-auth-token': localStorage.getItem('token') },
      });
      toast.success('Song deleted from queue successfully.');
      fetchQueueMusics();
    } catch (error) {
      console.error('Error deleting song from queue:', error);
      toast.error('Error deleting song from queue. Please try again.');
    }
  };

  const playMusicAtIndex = (index) => {
    const audioElements = document.querySelectorAll('audio');
    if (audioElements.length > 0 && index < audioElements.length) {
      const audioElement = audioElements[index];
      audioElement.play();
      setCurrentPlayingIndex(index);
      setLastPlayedIndex(index);

      audioElement.onended = async () => {
        await deleteSongFromQueue(musics[index]._id);
        const nextIndex = index + 1;
        if (nextIndex < musics.length) {
          playMusicAtIndex(nextIndex);
        } else {
          setCurrentPlayingIndex(null); // Reset when all songs are played
        }
      };
    }
  };

  const handleFirstSongPlay = () => {
    // Trigger the first song play after user interaction
    if (musics.length > 0) {
      playMusicAtIndex(0);
      setIsFirstSongPlayed(true); // Mark that the first song has been played
    }
  };

  const handlePlayPause = (musicId, audioElement) => {
    const audio = audioElement;
    if (audio) {
      if (audio.paused) {
        audio.play();
        setCurrentPlayingIndex(musics.findIndex((music) => music._id === musicId));
      } else {
        audio.pause();
        setCurrentPlayingIndex(null);
      }
    }
  };

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
      {/* Display the play button for the first song only */}
      <Button
        onClick={handleFirstSongPlay}
        className="mb-4"
        disabled={musics.length === 0 || isFirstSongPlayed}
      >
        Play First Song
      </Button>
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
                      onClick={(e) => {
                        if (isUserIdAvailable) {
                          handlePlayPause(music._id, e.target.nextSibling);
                        }
                      }}
                      disabled={!isUserIdAvailable}
                    >
                      {currentPlayingIndex === index &&
                      !document.querySelector(`audio[data-id='${music._id}']`)?.paused
                        ? '⏸️'
                        : '▶️'}
                    </Button>
                    <audio
                      src={`${BASE_URL}/${music.song}`}
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

export default Queue;
