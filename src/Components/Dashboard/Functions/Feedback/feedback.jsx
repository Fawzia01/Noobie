import React, { useState } from 'react';
import axios from 'axios';
import './feedback.css'; // Ensure your CSS file is correctly configured
import Header from '../../../Header/header';
import img from '../../../../Assets/feedback.jpg'; // Verify the path is accurate

const FeedbackForm = () => {
  const [studentId, setStudentId] = useState('');
  const [adminId] = useState('14'); // Default adminId, you can change this logic if needed
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(''); // Emoji rating

  const handleSubmit = async (e) => {
    e.preventDefault();

    const feedback = {
      description,
      rating: parseFloat(rating), // Convert the selected emoji rating to a number
    };

    try {
      const response = await axios.post(
        'http://localhost:8080/api/feedback/submit/${studentId}/${adminId}',
        feedback
      );
      alert('Feedback submitted successfully!');
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error details:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
      }
      alert('Failed to submit feedback.');
    }
  };

  return (
    <div className="feedback-container">
      <Header />
      <div className="main-content">
        {/* Welcome Section */}
        <div className="feedwelcome-bar">
          <div className="welcome-text">
            <h2>Feedback</h2>
            <p>Your feedback is invaluable in helping us improve and provide a better experience for you.</p>
          </div>
          <div className="welcome-image">
            <img src={img} alt="Feedback" />
          </div>
        </div>

        {/* Feedback Form */}
        <form onSubmit={handleSubmit} className="feedback-form">
          <div className="form-group">
            <label>Student ID:</label>
            <input
              type="text"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <input type="hidden" value={adminId} /> 

          <div className="form-group">
            <label>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="form-textarea"
            />
          </div>

          <div className="form-group">
            <label>User Friendliness (Rate Us):</label>
            <div className="rating-emoji">
              <label>
                <input
                  type="radio"
                  name="rating"
                  value="1"
                  onChange={(e) => setRating(e.target.value)}
                  required
                />
                <span role="img" aria-label="angry" className="emoji">
                  😡
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="rating"
                  value="2"
                  onChange={(e) => setRating(e.target.value)}
                />
                <span role="img" aria-label="sad" className="emoji">
                  😞
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="rating"
                  value="3"
                  onChange={(e) => setRating(e.target.value)}
                />
                <span role="img" aria-label="neutral" className="emoji">
                  😐
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="rating"
                  value="4"
                  onChange={(e) => setRating(e.target.value)}
                />
                <span role="img" aria-label="happy" className="emoji">
                  🙂 
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="rating"
                  value="5"
                  onChange={(e) => setRating(e.target.value)}
                />
                <span role="img" aria-label="very happy" className="emoji">
                  😊
                </span>
              </label>
            </div>
          </div>

          <button type="submit" className="submit-button">
            Send Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;