import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import './ClubDashboard.css'; 

const userName = localStorage.getItem('username');

const AdminDashboard = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className='admin-dashboard'>
      <main className="content">
        <div className='container mt-5'>
          <h1 className="mb-4">Welcome to your account, {userName}</h1>

          {/* Stylish Calendar */}
          <div className="calendar-container">
            <h2 className="calendar-heading text-center">Calendar</h2>
            <Calendar onChange={onChange} value={date} />
            <p className="calendar-date text-center">
              Date: {date.toDateString()}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
