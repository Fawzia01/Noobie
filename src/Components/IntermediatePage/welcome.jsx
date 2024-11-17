import React from 'react';
import './intermediatePage.css'; // Ensure this path is correct

const Welcome= () => {
  return (
    <div className="welcome">
      <div className="welcome-container">
        <div>
          <h1>Welcome Back, Sarah</h1>
          <p>Hello! We’re glad to see you again.</p>
        </div>
        {/* Add any additional content here if needed, such as an image or a button */}
      </div>
    </div>
  );
};

export default Welcome;
