// src/components/Sidebar/Sidebar.js

import React from "react";
import "./dashboarduser.css";

function Sidebar({ isExpanded }) {
  return (
    <div className={`sidebar ${isExpanded ? "expanded" : ""}`}>
      <ul className="sidebar-items">
        <li><i className="fas fa-book"></i> {isExpanded && "Book Catalogue"}</li>
        <li><i className="fas fa-tablet-alt"></i> {isExpanded && "eBooks"}</li>
        <li><i className="fas fa-user"></i> {isExpanded && "Profile"}</li>
        <li><i className="fas fa-cog"></i> {isExpanded && "Settings"}</li>
        <li><i className="fas fa-credit-card"></i> {isExpanded && "Payment"}</li>
        <li><i className="fas fa-sign-out-alt"></i> {isExpanded && "Logout"}</li>
      </ul>
    </div>
  );
}

export default Sidebar;
