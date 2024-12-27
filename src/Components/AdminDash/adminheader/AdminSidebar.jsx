import React from "react";
import { useNavigate } from "react-router-dom";
import { List, ListItemText, ListItemButton, ListItemIcon, Divider } from "@mui/material";
import { Dashboard, Group, Book, MenuBook, MonetizationOn, Feedback, Search, AccountCircle } from '@mui/icons-material'; // Import icons
import './admindash.css';


function AdminSidebar() {
  const navigate = useNavigate(); // Hook for navigation

  // Define the handleNavigation function
  const handleNavigation = (path) => {
    navigate(path); // Navigate to the given path
  };

  return (
    <div className="admin-sidebar">
      <h2>BookWave</h2>
      <List>
        {/* Dashboard */}

        <ListItemButton className="sidebar-item" onClick={() => handleNavigation("/admindash")}>
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton className="sidebar-item" onClick={() => handleNavigation("/member")}>
          <ListItemIcon>
            <Group />
          </ListItemIcon>
          <ListItemText primary="Members" />
        </ListItemButton>
        {/* Books */}
        <ListItemButton className="sidebar-item" onClick={() => handleNavigation("/adminbook")}>
          <ListItemIcon>
            <Book />
          </ListItemIcon>
          <ListItemText primary="Books"/>
        </ListItemButton>

        <ListItemButton className="sidebar-item" onClick={() => handleNavigation("/borrow")}>
          <ListItemIcon>
            <Book />
          </ListItemIcon>
          <ListItemText primary="Book Details"/>
        </ListItemButton>

        {/* E-books */}
        <ListItemButton className="sidebar-item"  onClick={() => handleNavigation('/adminebook')}>
          <ListItemIcon>
            <MenuBook />
          </ListItemIcon>
          <ListItemText primary="E-books" />
        </ListItemButton>

        {/* Dues */}
        <ListItemButton className="sidebar-item" onClick={()=> handleNavigation('/adminpay')}>
          <ListItemIcon>
            <MonetizationOn />
          </ListItemIcon>
          <ListItemText primary="Dues" />
        </ListItemButton>

        {/* Feedback */}
        <ListItemButton className="sidebar-item"  onClick={() => handleNavigation('/adminfeed')}>
      
          <ListItemIcon>
            <Feedback />
          </ListItemIcon>
          <ListItemText primary="Feedback" />
        </ListItemButton>

        <Divider /> {/* Optional Divider for separation */}

  
      </List>
    </div>
  );
}

export default AdminSidebar;
