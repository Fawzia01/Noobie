import React from "react";
import {
  IconButton,
  Typography,
  Avatar,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Notifications, Settings, Logout, Search } from "@mui/icons-material";
import dummyimg from "../../../Assets/dummy.jpeg";
import { Link, useNavigate } from "react-router-dom"; // For navigation

const AdminNav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any user-related data (e.g., tokens)
    localStorage.removeItem("authToken"); // Example: Remove the authentication token
    localStorage.removeItem("userInfo"); // Example: Remove user info (if applicable)

    // Redirect to login or home page
    navigate("/login"); // Adjust the path as per your app's routing

    // Optionally, display a success message (use a toast library or alert)
    alert("You have been logged out.");
  };

  return (
    <>
      <nav className="admin-navbar">
        {/* Left Section - Welcome Message */}
        <div className="navbar-left">
          <Typography variant="h6" className="welcome-message">
            Welcome back
          </Typography>
          
        </div>

       

        {/* Right Section - Icons */}
        <div className="navbar-right">
          <IconButton className="icon-button" onClick={handleLogout}>
            <Logout />
          </IconButton>

          
        
          <IconButton className="icon-button">
            <Settings /> {/* Settings Icon */}
          </IconButton>
          <Avatar alt="John Anderson" src={dummyimg} className="profile-avatar" />
        </div>
      </nav>
    </>
  );
};

export default AdminNav;
