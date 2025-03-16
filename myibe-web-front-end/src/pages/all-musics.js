import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, Button, Table } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import BASE_URL from './config'; // Adjust the path as needed

const AllMusics = () => {
  const [musics, setMusics] = useState([]);
  const [editing, setEditing] = useState(null);
  const [editData, setEditData] = useState({ songName: '', artistName: '' });

  useEffect(() => {
    const fetchMusics = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/music`, {
          headers: { 'x-auth-token': localStorage.getItem('token') }
        });
        setMusics(response.data);
      } catch (error) {
        console.error('Error fetching music:', error);
        toast.error('Error fetching music. Please try again.');
      }
    };

    fetchMusics();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this music?')) {
      try {
        await axios.delete(`${BASE_URL}/api/music/${id}`, {
          headers: { 'x-auth-token': localStorage.getItem('token') }
        });
        setMusics(musics.filter(music => music._id !== id));
        toast.success('Music deleted successfully!');
      } catch (error) {
        console.error('Error deleting music:', error);
        toast.error('Error deleting music. Please try again.');
      }
    }
  };

  const handleEdit = async (id) => {
    try {
      const response = await axios.put(`${BASE_URL}/api/music/${id}`, editData, {
        headers: { 'x-auth-token': localStorage.getItem('token') }
      });
      setMusics(musics.map(music => (music._id === id ? response.data : music)));
      setEditing(null);
      setEditData({ songName: '', artistName: '' });
      toast.success('Music updated successfully!');
    } catch (error) {
      console.error('Error updating music:', error);
      toast.error('Error updating music. Please try again.');
    }
  };

  return (
    <div className='admin-dashboard'>
      <main className="content">
        <div className='container mt-5'>
          <h1 className="mb-4">All Songs</h1>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Serial #</th> {/* Added Serial Number Column */}
                <th>Song Name</th>
                <th>Artist Name</th>
                <th>File</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {musics.map((music, index) => (
                <tr key={music._id}>
                  <td>{index + 1}</td> {/* Display Serial Number */}
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
                    <Button variant="warning" onClick={() => {
                      setEditing(music._id);
                      setEditData({ songName: music.songName, artistName: music.artistName });
                    }}>
                      Edit
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(music._id)} className="ms-2">
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Modal show={editing !== null} onHide={() => setEditing(null)}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Music</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="mb-3">
                  <label htmlFor="songName" className="form-label">Song Name</label>
                  <input
                    type="text"
                    id="songName"
                    className="form-control"
                    value={editData.songName}
                    onChange={(e) => setEditData({ ...editData, songName: e.target.value })}
                    placeholder="Song Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="artistName" className="form-label">Artist Name</label>
                  <input
                    type="text"
                    id="artistName"
                    className="form-control"
                    value={editData.artistName}
                    onChange={(e) => setEditData({ ...editData, artistName: e.target.value })}
                    placeholder="Artist Name"
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

export default AllMusics;
