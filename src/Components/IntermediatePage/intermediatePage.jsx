// src/Components/IntermediatePage/IntermediatePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Welcome from './welcome';
import FancyBook from './fancybook';
import Header from '../Header/header';

import './intermediatePage.css';

const IntermediatePage = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const navigate = useNavigate();

 

  return (
    <div className="intermediate-page">
      <Header/>
      <div className={`main-content ${isSidebarExpanded ? "shrink" : ""}`}>
      <Welcome />

      <div className="page-layout">
        {/* Sidebar: Passing isSidebarExpanded to control whether it's expanded */}
       
        
         
          <div className="bookpage main">
          <div className="bookpage main-sec">
            <FancyBook />
          </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default IntermediatePage;
