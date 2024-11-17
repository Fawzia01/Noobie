import React from 'react';
import './admindash.css';

function AdminWelcome() {
  return (
    <div className="admin-welcome">
      <div className="admin-welcome-content">
        <h2>Admin Dashboard</h2>
        <p>Here you can manage all your system's settings and features.</p>
      </div>
      <div className="admin-welcome-image"></div>
    </div>
  );
}

export default AdminWelcome;
