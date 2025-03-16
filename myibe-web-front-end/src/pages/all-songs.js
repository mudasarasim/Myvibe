import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Table, Alert } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from 'react-router-dom'; // To access URL params
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import BASE_URL from './config'; // Adjust the path as needed

const AllSongs = () => {
  const [musics, setMusics] = useState([]);
  const location = useLocation(); // Access the URL

  // Function to extract userId from query params
  const getUserIdFromURL = useCallback(() => {
    const params = new URLSearchParams(location.search);
    return params.get('userId');
  }, [location]);

  useEffect(() => {
    const fetchMusics = async () => {
      try {
        const userId = getUserIdFromURL(); // Get userId from URL

        if (userId) {
          const response = await axios.get(`${BASE_URL}/api/playlist/user-songs?userId=${userId}`, {
            headers: { 'x-auth-token': localStorage.getItem('token') }
          });

          console.log('Fetched musics:', response.data); // Debugging output
          setMusics(response.data);
        } else {
          toast.error('No userId found in URL.');
        }
      } catch (error) {
        console.error('Error fetching music:', error);
        toast.error('Error fetching music. Please try again.');
      }
    };

    fetchMusics();
  }, [getUserIdFromURL]); 

  return (
    <div className='admin-dashboard'>
      <main className="content">
        <div className='container mt-5'>
          <h1 className="mb-4">All Songs</h1>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Serial #</th>
                <th>Song Name</th>
                <th>Artist Name</th>
                <th>File</th>
                {/* Uncomment if you use handleDelete */}
                {/* <th>Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {musics.length === 0 ? (
                <tr>
                  <td colSpan="4">
                    <Alert variant="info">No songs found.</Alert>
                  </td>
                </tr>
              ) : (
                musics.map((music, index) => (
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
                    {/* Uncomment if you use handleDelete */}
                    {/* <td>
                      <Button variant="danger" onClick={() => handleDelete(music._id)} className="ms-2">
                        Delete
                      </Button>
                    </td> */}
                  </tr>
                ))
              )}
            </tbody>
          </Table>
          <ToastContainer />
        </div>
      </main>
    </div>
  );
};

export default AllSongs;
