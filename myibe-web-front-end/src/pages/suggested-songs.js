import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, Button, Table } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import BASE_URL from './config'; // Adjust the path as needed

const SuggestedMusics = () => {
    const [musics, setMusics] = useState([]);
    const [editing, setEditing] = useState(null);
    const [editData, setEditData] = useState({ songName: '', artistName: '' });

    useEffect(() => {
        const fetchMusics = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/music/user-songs`, {
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

    const handleApprove = async (id) => {
        try {
            const response = await axios.put(`${BASE_URL}/api/music/approve/${id}`, null, {
                headers: { 'x-auth-token': localStorage.getItem('token') }
            });

            // Update the music list with the approved status
            setMusics(musics.map(music => (music._id === id ? { ...music, status: 1 } : music)));

            toast.success('Music approved successfully!');
        } catch (error) {
            console.error('Error approving music:', error);
            toast.error('Error approving music. Please try again.');
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
                                        {/* {music.status === 0 ? (
                                            <Button variant="warning" onClick={() => handleApprove(music._id)}>
                                                Approve
                                            </Button>
                                        ) : (
                                            <Button variant="success" disabled>
                                                Approved
                                            </Button>
                                        )} */}
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

export default SuggestedMusics;
