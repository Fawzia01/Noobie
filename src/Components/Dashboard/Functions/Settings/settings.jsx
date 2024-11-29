import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For making HTTP requests to the backend
import './settings.css';

const SettingsPage = () => {
  const [userData, setUserData] = useState({
    id: '',
    name: '',
    dept: '',
    email: '',
    batch: '',
    interest: '',
    password: '',
    confirmPassword: '',
    address: '',
    profilePicture: '', // Added profile picture field
  });

  const [darkMode, setDarkMode] = useState(false);
  const [librarySettings, setLibrarySettings] = useState({
    fontSize: 'Medium',
    readingMode: 'Day',
  });

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, []);

  // Toggle Dark Mode
  const handleDarkModeToggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
    if (newDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  // Handle user input changes for settings form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLibrarySettingsChange = (e) => {
    const { name, value } = e.target;
    setLibrarySettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password match check
    if (userData.password !== userData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.put(
        'http://localhost:8080/api/users/settings',
        userData
      );

      if (response.status === 200) {
        alert('Settings updated successfully');
      }
    } catch (error) {
      console.error('Error updating settings:', error);
      alert('Failed to update settings. Please try again later.');
    }
  };

  return (
    <div className="settings-container">
      <h1>Update Your Settings</h1>
      <form onSubmit={handleSubmit} className="settings-form">
        {/* Signup Info */}
        <div className="input-box">
          <input
            type="text"
            name="id"
            placeholder="Student ID"
            value={userData.id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <select
            name="dept"
            value={userData.dept}
            onChange={handleChange}
            required
          >
            <option value="">Department</option>
            <option value="CSE">CSE</option>
            <option value="EE">EE</option>
            <option value="ME">ME</option>
          </select>
        </div>
        <div className="input-box">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            name="batch"
            placeholder="Batch"
            value={userData.batch}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            name="interest"
            placeholder="Interest"
            value={userData.interest}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            name="password"
            placeholder="New Password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={userData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <textarea
            name="address"
            placeholder="Address"
            value={userData.address}
            onChange={handleChange}
            required
          />
        </div>
        {/* Profile Picture Upload */}
        <div className="input-box">
          <input
            type="file"
            name="profilePicture"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setUserData((prevData) => ({
                  ...prevData,
                  profilePicture: URL.createObjectURL(file),
                }));
              }
            }}
          />
        </div>

        <button type="submit" className="save-button">
          Save Changes
        </button>
      </form>

      {/* Dark Mode Toggle */}
      <div className="dark-mode-toggle">
        <label>
          Dark Mode
          <input
            type="checkbox"
            checked={darkMode}
            onChange={handleDarkModeToggle}
          />
        </label>
      </div>

      {/* Library Settings */}
      <div className="library-settings">
        <h3>Reading Preferences</h3>
        <div className="input-box">
          <label htmlFor="fontSize">Font Size</label>
          <select
            name="fontSize"
            value={librarySettings.fontSize}
            onChange={handleLibrarySettingsChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="input-box">
          <label htmlFor="readingMode">Reading Mode</label>
          <select
            name="readingMode"
            value={librarySettings.readingMode}
            onChange={handleLibrarySettingsChange}
          >
            <option value="Day">Day</option>
            <option value="Night">Night</option>
            <option value="Sepia">Sepia</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
