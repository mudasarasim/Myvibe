import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, Button, Table } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import BASE_URL from './config'; // Adjust the path as needed

const AllPlaylists = () => {
  const [playlists, setPlaylists] = useState([]);
  const [editing, setEditing] = useState(null);
  const [editData, setEditData] = useState({ playlistName: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/playlists`, {
          headers: { 'x-auth-token': localStorage.getItem('token') }
        });
        setPlaylists(response.data);
      } catch (error) {
        console.error('Error fetching playlists:', error);
        toast.error('Error fetching playlists. Please try again.');
      }
    };

    fetchPlaylists();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this playlist?')) {
      try {
        await axios.delete(`${BASE_URL}/api/playlists/${id}`, {
          headers: { 'x-auth-token': localStorage.getItem('token') }
        });
        setPlaylists(playlists.filter(playlist => playlist._id !== id));
        toast.success('Playlist deleted successfully!');
      } catch (error) {
        console.error('Error deleting playlist:', error);
        toast.error('Error deleting playlist. Please try again.');
      }
    }
  };

  const handleEdit = async (id) => {
    try {
      const response = await axios.put(`${BASE_URL}/api/playlists/${id}`, editData, {
        headers: { 'x-auth-token': localStorage.getItem('token') }
      });
      setPlaylists(playlists.map(playlist => (playlist._id === id ? response.data : playlist)));
      setEditing(null);
      setEditData({ playlistName: '' });
      toast.success('Playlist updated successfully!');
    } catch (error) {
      console.error('Error updating playlist:', error);
      toast.error('Error updating playlist. Please try again.');
    }
  };

  const handleViewPlaylist = (id) => {
    navigate(`/playlist-wise-songs?playlistId=${id}`); // Navigate to the playlist-wise song page
  };

  return (
    <div className='admin-dashboard'>
      <main className="content">
        <div className='container mt-5'>
          <h1 className="mb-4">All Playlists</h1>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Serial #</th>
                <th>Playlist Name</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {playlists.map((playlist, index) => (
                <tr key={playlist._id}>
                  <td>{index + 1}</td>
                  <td>{playlist.playlistName}</td>
                  <td>{new Date(playlist.date).toLocaleDateString()}</td>
                  <td>
                    <Button 
                      variant="warning" 
                      onClick={() => {
                        setEditing(playlist._id);
                        setEditData({ playlistName: playlist.playlistName });
                      }}>
                      Edit
                    </Button>
                    <Button 
                      variant="info" 
                      onClick={() => handleViewPlaylist(playlist._id)} // View Playlist button
                      className="ms-2">
                      View Playlist
                    </Button>
                    <Button 
                      variant="danger" 
                      onClick={() => handleDelete(playlist._id)} 
                      className="ms-2">
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Modal show={editing !== null} onHide={() => setEditing(null)}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Playlist</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="mb-3">
                  <label htmlFor="playlistName" className="form-label">Playlist Name</label>
                  <input
                    type="text"
                    id="playlistName"
                    className="form-control"
                    value={editData.playlistName}
                    onChange={(e) => setEditData({ ...editData, playlistName: e.target.value })}
                    placeholder="Playlist Name"
                  />
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setEditing(null)}>
                Close
              </Button>
              <Button variant="primary" onClick={() => handleEdit(editing)}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          <ToastContainer />
        </div>
      </main>
    </div>
  );
};

export default AllPlaylists;
