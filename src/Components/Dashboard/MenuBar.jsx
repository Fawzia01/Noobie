import React from 'react';
import './dashboarduser.css';

function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <h2>Welcome back, Sarah!</h2>
        <p>Find your next favorite book or check your current loans and favorites.</p>
        <div className="metrics">
          <div className="metric-card">Books on Loan: 5</div>
          <div className="metric-card">Reserved Books: 2</div>
          <div className="metric-card">Upcoming Events</div>
        </div>
      </div>
      <div className="banner-image"></div>
    </div>
  );
}

export default Banner;
