// src/AllTimeSlots.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, Button, Table } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import BASE_URL from './config'; // Import the BASE_URL

const AllTimeSlots = () => {
  const [timeSlots, setTimeSlots] = useState([]);
  const [editing, setEditing] = useState(null);
  const [editData, setEditData] = useState({ length: '', price: '' });

  useEffect(() => {
    const fetchTimeSlots = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/timeslots`, {
          headers: { 'x-auth-token': localStorage.getItem('token') }
        });
        setTimeSlots(response.data);
      } catch (error) {
        console.error('Error fetching time slots:', error);
        toast.error('Error fetching time slots. Please try again.');
      }
    };
  
    fetchTimeSlots();
  }, []);
  
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this time slot?')) {
      try {
        await axios.delete(`${BASE_URL}/api/timeslots/${id}`, {
          headers: { 'x-auth-token': localStorage.getItem('token') }
        });
        setTimeSlots(timeSlots.filter(slot => slot._id !== id));
        toast.success('Time slot deleted successfully!');
      } catch (error) {
        console.error('Error deleting time slot:', error);
        toast.error('Error deleting time slot. Please try again.');
      }
    }
  };

  const handleEdit = async (id) => {
    console.log('Sending update request with data:', editData); // Debug before sending the request
    
    try {
      // Match property names with backend
      const response = await axios.put(`${BASE_URL}/api/timeslots/${id}`, {
        timeSlotLength: editData.length,
        price: editData.price
      }, {
        headers: { 'x-auth-token': localStorage.getItem('token') }
      });
      
      setTimeSlots(timeSlots.map(slot => (slot._id === id ? response.data : slot)));
      setEditing(null);
      setEditData({ length: '', price: '' });
      toast.success('Time slot updated successfully!');
    } catch (error) {
      console.error('Error updating time slot:', error);
      toast.error('Error updating time slot. Please try again.');
    }
  };
     
  return (
    <div className='admin-dashboard'>
      <main className="content">
        <div className='container mt-5'>
          <h1 className="mb-4">All Time Slots</h1>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Serial #</th>
                <th>Time Slot Length</th>
                <th>Price</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((slot, index) => (
                <tr key={slot._id}>
                  <td>{index + 1}</td>
                  <td>{slot.timeSlotLength}</td>
                  <td>{slot.price}€</td>
                  <td>{new Date(slot.createdAt).toLocaleDateString()}</td>
                  <td>
                    <Button 
                      variant="warning" 
                      onClick={() => {
                        setEditing(slot._id);
                        setEditData({ length: slot.timeSlotLength, price: slot.price });
                      }}>
                      Edit
                    </Button>
                    <Button 
                      variant="danger" 
                      onClick={() => handleDelete(slot._id)} 
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
              <Modal.Title>Edit Time Slot</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="mb-3">
                  <label htmlFor="length" className="form-label">Time Slot Length</label>
                  <input
                    type="text"
                    id="length"
                    className="form-control"
                    value={editData.length}
                    onChange={(e) => setEditData({ ...editData, length: e.target.value })}
                    placeholder="Time Slot Length"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">Price</label>
                  <input
                    type="text"
                    id="price"
                    className="form-control"
                    value={editData.price}
                    onChange={(e) => setEditData({ ...editData, price: e.target.value })}
                    placeholder="Price"
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

export default AllTimeSlots;
