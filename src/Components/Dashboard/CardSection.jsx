// src/components/CardSection/CardSection.js

import React from 'react';
import './dashboarduser.css';

function CardSection() {
  return (
    <div className="card-section">
      <div className="card card1">
        <i className="fas fa-book-reader"></i> {/* Icon for "Total eBooks Read" */}
        <div>Total eBooks Read</div>
        <div className="card-value">5</div>
      </div>

      <div className="card card2">
        <i className="fas fa-bookmark"></i> {/* Icon for "Total Reserved Books" */}
        <div>Total Issued Books</div>
        <div className="card-value">3</div>
      </div>

      <div className="card card3">
        <i className="fas fa-calendar-alt"></i> {/* Icon for "Books on Due" */}
        <div>On Due</div>
        <div className="card-value">1</div>
      </div>

      <div className="card card4">
        <i className="fas fa-trophy"></i> {/* Icon for "Challenges Completed" */}
        <div>Challenges Participated</div>
        <div className="card-value">1</div>
      </div>



    </div>
  );
}

export default CardSection;
