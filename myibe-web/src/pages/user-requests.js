import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation for fetching userId from URL
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import BASE_URL from './config'; // Adjust the path as needed

const UserRequests = () => {
  const [musics, setMusics] = useState([]); // Ensure musics is initialized as an empty array
  const location = useLocation(); // Hook to get URL parameters

  // Function to get userId from the URL
  const getUserIdFromURL = () => {
    const params = new URLSearchParams(location.search);
    return params.get('userId');
  };

  useEffect(() => {
    const fetchMusics = async () => {
      try {
        const userId = getUserIdFromURL() || localStorage.getItem('userId'); // Get userId from URL or local storage
        if (!userId) {
          toast.error('User ID not found.');
          return;
        }

        const response = await axios.get(`${BASE_URL}/api/playlist/suggest-songs/${userId}`, {
          headers: { 'x-auth-token': localStorage.getItem('token') }
        });
        
        // Ensure the response data is an array
        if (Array.isArray(response.data)) {
          setMusics(response.data);
        } else {
          setMusics([]); // Fallback to empty array if response is not an array
        }

      } catch (error) {
        console.error('Error fetching music:', error);
        toast.error('Error fetching music. Please try again.');
      }
    };

    fetchMusics();
  }, [location]); // Dependency on location to get updated URL params

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this music?')) {
      try {
        // Sending delete request to the correct route
        await axios.delete(`${BASE_URL}/api/playlist/delete-suggest-songs/${id}`, {
          headers: { 'x-auth-token': localStorage.getItem('token') }
        });
        // Remove the deleted song from the list in state
        setMusics(musics.filter(music => music._id !== id));
        toast.success('Music deleted successfully!');
      } catch (error) {
        console.error('Error deleting music:', error);
        toast.error('Error deleting music. Please try again.');
      }
    }
  };

  const handleSearch = (songTitle) => {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(songTitle)} song mp3 free download`;
    window.open(searchUrl, '_blank'); // Open in new tab
  };

  return (
    <div className='admin-dashboard'>
      <main className="content">
        <div className='container mt-5'>
          <h1 className="mb-4">User requested songs</h1>
          
          {/* Conditional rendering to avoid map errors */}
          {musics.length > 0 ? (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Serial #</th> {/* Added Serial Number Column */}
                  <th>Song Title</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {musics.map((music, index) => (
                  <tr key={music._id}>
                    <td>{index + 1}</td> {/* Display Serial Number */}
                    <td>{music.songTitle}</td>
                    <td>
                      <Button 
                        variant="dark" 
                        onClick={() => handleSearch(music.songTitle)} 
                        className="ms-2"
                      >
                        Search song on Google
                      </Button>
                      <Link to={'/add-user-song'}>
                      <Button 
                        variant="success" 
                        className="ms-2"
                      >
                        Add song
                      </Button>
                      </Link>
                      <Button 
                        variant="danger" 
                        onClick={() => handleDelete(music._id)} 
                        className="ms-2"
                      >
                        Song added
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>No songs found</p> // Fallback message if there are no songs
          )}
          
          <ToastContainer />
        </div>
      </main>
    </div>
  );
};

export default UserRequests;
