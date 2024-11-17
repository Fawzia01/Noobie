import React from "react";
import { List, ListItemText, ListItemButton, ListItemIcon, Divider } from "@mui/material";
import { Dashboard, Group, Book, MenuBook, MonetizationOn, Feedback, Search, AccountCircle } from '@mui/icons-material'; // Import icons
import './admindash.css';

function AdminSidebar() {
  return (
    <div className="admin-sidebar">
      <h2>BookWave</h2>
      <List>
        {/* Dashboard */}
        <ListItemButton className="sidebar-item">
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        {/* Members */}
        <ListItemButton className="sidebar-item">
          <ListItemIcon>
            <Group />
          </ListItemIcon>
          <ListItemText primary="Members" />
        </ListItemButton>

        {/* Books */}
        <ListItemButton className="sidebar-item">
          <ListItemIcon>
            <Book />
          </ListItemIcon>
          <ListItemText primary="Books" />
        </ListItemButton>

        {/* E-books */}
        <ListItemButton className="sidebar-item">
          <ListItemIcon>
            <MenuBook />
          </ListItemIcon>
          <ListItemText primary="E-books" />
        </ListItemButton>

        {/* Dues */}
        <ListItemButton className="sidebar-item">
          <ListItemIcon>
            <MonetizationOn />
          </ListItemIcon>
          <ListItemText primary="Dues" />
        </ListItemButton>

        {/* Feedback */}
        <ListItemButton className="sidebar-item">
          <ListItemIcon>
            <Feedback />
          </ListItemIcon>
          <ListItemText primary="Feedback" />
        </ListItemButton>

        {/* Research */}
        <ListItemButton className="sidebar-item">
          <ListItemIcon>
            <Search />
          </ListItemIcon>
          <ListItemText primary="Research" />
        </ListItemButton>

        <Divider /> {/* Optional Divider for separation */}

        {/* Profile */}
        <ListItemButton className="sidebar-item">
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
      </List>
    </div>
  );
}

export default AdminSidebar;
