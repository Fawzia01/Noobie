// Dashboard/Dashboard.js
import React, { useState } from "react";
import WelcomeBar from "./WelcomeBar";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import "./dashboarduser.css";
import MenuBar from './MenuBar';
import RightSideBar from './RightSideBar';

function Dashboard() {
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(prevState => !prevState);
  };

  return (
    <div className="dashboard">
      <WelcomeBar toggleSidebar={toggleSidebar} /> {/* Full width */}
      <div className="content-area">
        <Sidebar isExpanded={isSidebarExpanded} />
        <div className="main-and-right">
          <div className="main-section">
            <MenuBar />
            <MainContent />
          </div>
          <RightSideBar /> {/* Place RightSidebar beside MainContent */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
