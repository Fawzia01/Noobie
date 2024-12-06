import React from "react";
import { IconButton, Typography, Avatar, TextField, InputAdornment } from "@mui/material";
import { Notifications, Settings, Message, Search } from '@mui/icons-material';
import dummyimg from '../../../Assets/dummy.jpeg';

function AdminNav() {
  return (
    <nav className="admin-navbar">
      {/* Left Section - Welcome Message */}
      <div className="navbar-left">
        <Typography variant="h6" className="welcome-message">
          Welcome back,
        </Typography>
        <Typography variant="h5" className="admin-username">
          John Anderson!
        </Typography>
      </div>

      {/* Center Section - Search Bar */}
      <div className="navbar-center">
        <TextField
          variant="outlined"
          placeholder="Search..."
          size="small"
          className="search-bar"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search /> {/* Magnifying glass icon */}
              </InputAdornment>
            ),
          }}
        />
      </div>

      {/* Right Section - Icons */}
      <div className="navbar-right">
        <IconButton className="icon-button">
          <Message /> {/* Message Icon */}
        </IconButton>
        <IconButton className="icon-button">
          <Notifications /> {/* Notifications Icon */}
        </IconButton>
        <IconButton className="icon-button">
          <Settings /> {/* Settings Icon */}
        </IconButton>
        <Avatar alt="John Anderson" src={dummyimg} className="profile-avatar" />
      </div>
    </nav>
  );
}

export default AdminNav;
