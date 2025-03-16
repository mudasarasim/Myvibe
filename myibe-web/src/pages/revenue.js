// src/AllTimeSlots.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import BASE_URL from './config'; // Import the BASE_URL

const Revenue = () => {
  const [timeSlots, setTimeSlots] = useState([]);

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

  // Calculate total revenue
  const totalRevenue = timeSlots.reduce((acc, slot) => {
    return acc + (slot.price * slot.songCount);
  }, 0);

  return (
    <div className='admin-dashboard'>
      <main className="content">
        <div className='container mt-5'>
          <h1 className="mb-4">Total revenue</h1>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Serial #</th>
                <th>Time Slot Length</th>
                <th>Price</th>
                <th>Date</th>
                <th>Revenue</th>
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
                    {(slot.price * slot.songCount).toFixed(2)}€
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={4} className="text-end"><strong>Total Revenue:</strong></td>
                <td>{totalRevenue.toFixed(2)}€</td>
              </tr>
            </tbody>
          </Table>

          <ToastContainer />
        </div>
      </main>
    </div>
  );
};

export default Revenue;
