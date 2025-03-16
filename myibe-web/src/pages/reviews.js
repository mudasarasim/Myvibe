// src/AllUsers.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import BASE_URL from './config'; // Import the BASE_URL

const AllReviews = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/playlist/reviews`, {
          headers: { 'x-auth-token': localStorage.getItem('token') }
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
        toast.error('Error fetching users. Please try again.');
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await axios.delete(`${BASE_URL}/api/auth/users/${id}`, {
          headers: { 'x-auth-token': localStorage.getItem('token') }
        });
        setUsers(users.filter(user => user._id !== id));
        toast.success('User deleted successfully!');
      } catch (error) {
        console.error('Error deleting user:', error);
        toast.error('Error deleting user. Please try again.');
      }
    }
  };

  return (
    <div className='admin-dashboard'>
      <main className="content">
        <div className='container mt-5'>
          <h1 className="mb-4">All Reviews</h1>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Serial #</th>
                <th>Email</th>
                <th>Rating</th>
                <th>Feedback</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td> {/* Serial Number Column */}
                  <td>{user.email}</td>
                  <td>{user.rating}<i className='bx bxs-star text-warning' ></i></td>
                  <td>{user.feedback}</td>
                 
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

export default AllReviews;
