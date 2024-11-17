// src/Components/IntermediatePage/IntermediatePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './sidebar'; // Assuming you are using a separate Sidebar component
import Topbar from './topbar'; // Assuming you are using a separate Topbar component
import Welcome from './welcome';
import FancyBook from './fancybook';

import './intermediatePage.css';

const IntermediatePage = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded); // Toggle sidebar state
  };

  const handleDashboardClick = () => {
    navigate('/dashboarduser');  // Navigate to Dashboard when clicked
  };

  return (
    <div className="intermediate-page">
      {/* Topbar: Passing toggleSidebar to control sidebar */}
      <Topbar toggleSidebar={toggleSidebar} />

      <Welcome />

      <div className="page-layout">
        {/* Sidebar: Passing isSidebarExpanded to control whether it's expanded */}
        <Sidebar isExpanded={isSidebarExpanded} onDashboardClick={handleDashboardClick} />
        
         
          <div className="bookpage main">
          <div className="bookpage main-sec">
            <FancyBook />
          </div>
          </div>
      </div>
    </div>
  );
};

export default IntermediatePage;
