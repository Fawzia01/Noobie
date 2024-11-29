import React, { useState } from 'react';
import './feedback.css'; // Import the CSS file for styling
import Header from '../../../Header/header'; // Assuming you have a Header component
import img from '../../../../Assets/feedback.jpg'; // Make sure this path is correct

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    isFirstVisit: '',
    improvementSuggestions: '',
    bookSuggestions: '',
    foundWhatNeeded: '',
    userFriendliness: 0,
  });

  // Handles the changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Feedback Submitted!');
  };

  return (
    <div className="feedback-container">
      <Header />
      <div className="main-content">
        {/* Welcome Bar */}
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
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Enter Your Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Your Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
              placeholder='Your email address will not be disclosed'
            />
          </div>

          <div className="form-group">
            <label>Is this the first time you have visited the website? *</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="isFirstVisit"
                  value="Yes"
                  onChange={handleChange}
                  required
                />{' '}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="isFirstVisit"
                  value="No"
                  onChange={handleChange}
                  required
                />{' '}
                No
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>What improvement do you want us to make?</label>
            <textarea
              name="improvementSuggestions"
              value={formData.improvementSuggestions}
              onChange={handleChange}
              className="form-textarea"
            />
          </div>

          <div className="form-group">
            <label>Suggest what books you want to be added:</label>
            <textarea
              name="bookSuggestions"
              value={formData.bookSuggestions}
              onChange={handleChange}
              className="form-textarea"
            />
          </div>

          <div className="form-group">
            <label>Did you find what you needed? *</label>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="foundWhatNeeded"
                  value="Yes, all of it"
                  onChange={handleChange}
                />{' '}
                Yes, all of it
              </label>
              <label>
                <input
                  type="checkbox"
                  name="foundWhatNeeded"
                  value="Yes, some of it"
                  onChange={handleChange}
                />{' '}
                Yes, some of it
              </label>
              <label>
                <input
                  type="checkbox"
                  name="foundWhatNeeded"
                  value="No, none of it"
                  onChange={handleChange}
                />{' '}
                No, none of it
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>User Friendliness *</label>
            <div className="rating-emoji">
              <label>
                <input
                  type="radio"
                  name="userFriendliness"
                  value="1"
                  onChange={handleChange}
                  required
                />
                <span role="img" aria-label="angry" className="emoji">
                  😡
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="userFriendliness"
                  value="2"
                  onChange={handleChange}
                />
                <span role="img" aria-label="sad" className="emoji">
                  😞
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="userFriendliness"
                  value="3"
                  onChange={handleChange}
                />
                <span role="img" aria-label="neutral" className="emoji">
                  😐
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="userFriendliness"
                  value="4"
                  onChange={handleChange}
                />
                <span role="img" aria-label="happy" className="emoji">
                  🙂 
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="userFriendliness"
                  value="5"
                  onChange={handleChange}
                />
                <span role="img" aria-label="very happy" className="emoji">
                  😊
                </span>
              </label>
            </div>
          </div>

          <button type="submit" className="submit-button">
            Send your feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
