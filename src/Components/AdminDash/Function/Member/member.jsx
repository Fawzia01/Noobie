import React, { useState, useEffect } from "react";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Avatar, IconButton, InputAdornment, Tooltip } from "@mui/material";
import { Notifications, Settings, Message, Search } from '@mui/icons-material';
import './member.css'; // Ensure this file exists for styling
import AdminSidebar from "../../adminheader/AdminSidebar";
import { GiBookCover } from 'react-icons/gi';
import { Edit, Delete } from '@mui/icons-material';
import axios from "axios";
import dummyImg from '../../../../Assets/dummy.jpeg';

// MemNavBar Component
function MemNavBar({ members, searchTerm, setSearchTerm, setFilteredMembers }) {
  useEffect(() => {
    const filtered = members.filter((member) => {
      return (
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.studentId.includes(searchTerm) ||
        member.email.toLowerCase().includes(searchTerm)
      );
    });
    setFilteredMembers(filtered); // Update filtered members in the parent component
  }, [searchTerm, members, setFilteredMembers]);

  return (
    <nav className="mem-navbar">
      <div className="memnavbar-left">
        <IconButton className="memnavbar-icon">
          <GiBookCover size={40} color="white" />
        </IconButton>
      </div>

      <div className="memnavbar-center">
        <TextField
          variant="outlined" // Added "outlined" variant
          placeholder="Search Members..."
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          className="memnavbar-search"
          fullWidth
        />
        </div>


      <div className="memnavbar-right">
        <IconButton className="memicon-button">
          <Message />
        </IconButton>
        <IconButton className="memicon-button">
          <Notifications />
        </IconButton>
        <IconButton className="memicon-button">
          <Settings />
        </IconButton>
        <Avatar alt="Profile" src={dummyImg} className="profile-avatar" />
      </div>
    </nav>
  );
}

const Member = () => {
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [newMember, setNewMember] = useState({
    studentId: "",
    name: "",
    department: "",
    password: "",
    address: "",
    email: "",
    batch: "",
    interest: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [memberToEdit, setMemberToEdit] = useState(null);
  const [memberToDelete, setMemberToDelete] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/admin/students")
      .then((response) => {
        setMembers(response.data);
        setFilteredMembers(response.data);
      })
      .catch((error) => console.error("Error fetching members:", error));
  }, []);

  const handleAddMember = () => {
    if (Object.values(newMember).some((value) => value.trim() === "")) {
      alert("All fields must be filled out!");
      return;
    }

    axios
      .post("http://localhost:8080/api/admin/students", newMember)
      .then((response) => {
        const updatedMembers = [...members, response.data];
        setMembers(updatedMembers);
        setFilteredMembers(updatedMembers);
        setNewMember({
          studentId: "",
          name: "",
          department: "",
          password: "",
          address: "",
          email: "",
          batch: "",
          interest: "",
        });
      })
      .catch((error) => console.error("Error adding member:", error));
  };

  const handleSaveEdit = () => {
    axios
      .put(`http://localhost:8080/api/admin/students/${memberToEdit.id}`, memberToEdit)
      .then((response) => {
        const updatedMembers = members.map((member) =>
          member.id === memberToEdit.id ? response.data : member
        );
        setMembers(updatedMembers);
        setFilteredMembers(updatedMembers);
        setIsEditDialogOpen(false);
        setMemberToEdit(null);
      })
      .catch((error) => console.error("Error updating member:", error));
  };

  const handleDeleteMember = () => {
    axios
      .delete(`http://localhost:8080/api/admin/students/${memberToDelete}`)
      .then(() => {
        const updatedMembers = members.filter((member) => member.id !== memberToDelete);
        setMembers(updatedMembers);
        setFilteredMembers(updatedMembers);
        setIsDeleteDialogOpen(false);
        setMemberToDelete(null);
      })
      .catch((error) => console.error("Error deleting member:", error));
  };

  const handleEditDialogOpen = (member) => {
    setMemberToEdit({ ...member });
    setIsEditDialogOpen(true);
  };

  return (
    <div className="admins-dashboard">
      <div className="admins-main-content">
        {/* Sidebar and Navbar */}
        <AdminSidebar />
        <MemNavBar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          members={members} 
          setFilteredMembers={setFilteredMembers} 
        />
  
        {/* Welcome Section */}
        <div className="mem-welcome">
          <div className="mem-welcome-content">
            <h2>Member Management</h2>
            <p>Here you can manage all your members and their information.</p>
          </div>
          <div className="mem-welcome-image"></div>
        </div>
  
        <div className="member-container">
          {/* Search and Add Member Form */}
          <div className="member-form">

        {["Student ID", "Name", "Department", "Password", "Address", "Email", "Batch", "Interest"].map((field, index) => (
          <TextField
            key={index}
            label={field}
            variant="outlined"
            value={newMember[field.toLowerCase().replace(" ", "")]}
            onChange={(e) =>
              setNewMember({ ...newMember, [field.toLowerCase().replace(" ", "")]: e.target.value })
            }
            className="member-input"
          />
        ))}
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddMember}
          className="member-add-button"
        >
          Add Member
        </Button>
      </div>
  
  
  
      {/* Members Table */}
      <TableContainer component={Paper} className="member-table-container">
        <Table>
          <TableHead>
            <TableRow>
              {["ID", "Name", "Department", "Address", "Email", "Batch", "Interest", "Action"].map((header) => (
                <TableCell key={header}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredMembers.map((member) => (
              <TableRow key={member.id}>
                <TableCell>{member.studentId}</TableCell>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.department}</TableCell>
                <TableCell>{member.address}</TableCell>
                <TableCell>{member.email}</TableCell>
                <TableCell>{member.batch}</TableCell>
                <TableCell>{member.interest}</TableCell>
                <TableCell>
                  <Tooltip title="Edit">
                    <IconButton onClick={() => handleEditDialogOpen(member)}>
                      <Edit />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton
                      onClick={() => {
                        setMemberToDelete(member.id);
                        setIsDeleteDialogOpen(true);
                      }}
                    >
                      <Delete />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
      </div>
  
      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onClose={() => setIsDeleteDialogOpen(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this member?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDeleteDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              setMembers(members.filter((member) => member.id !== memberToDelete));
              setFilteredMembers(filteredMembers.filter((member) => member.id !== memberToDelete));
              setIsDeleteDialogOpen(false);
            }}
            color="secondary"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
  
      {/* Edit Member Dialog */}
      <Dialog open={isEditDialogOpen} onClose={() => setIsEditDialogOpen(false)}>
        <DialogTitle>Edit Member</DialogTitle>
        <DialogContent>
          {["Student ID", "Name", "Email", "Department", "Batch"].map((field, index) => (
            <TextField
              key={index}
              label={field}
              variant="outlined"
              value={memberToEdit?.[field.toLowerCase().replace(" ", "")] || ""}
              onChange={(e) =>
                setMemberToEdit({ ...memberToEdit, [field.toLowerCase().replace(" ", "")]: e.target.value })
              }
              fullWidth
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsEditDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              const updatedMembers = members.map((member) =>
                member.id === memberToEdit.id ? memberToEdit : member
              );
              setMembers(updatedMembers);
              setFilteredMembers(updatedMembers);
              setIsEditDialogOpen(false);
            }}
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Member;
