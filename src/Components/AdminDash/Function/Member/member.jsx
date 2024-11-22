import React, { useState, useEffect } from "react";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Avatar, IconButton, InputAdornment, Tooltip } from "@mui/material";
import { Notifications, Settings, Message, Search } from '@mui/icons-material';
import './member.css'; // Make sure this file exists for styling
import AdminSidebar from "../../adminheader/AdminSidebar";
import { GiBookCover } from 'react-icons/gi';
import { Edit, Delete } from '@mui/icons-material';

// MemNavBar Component
function MemNavBar({ members, searchTerm, setSearchTerm, setFilteredMembers }) {
  // Filter members based on the search term
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
      {/* Left Section - Empty or Other Content */}
      <div className="memnavbar-left">
        <IconButton className="memnavbar-icon">
          <GiBookCover size={40} color="white" />
        </IconButton>
      </div>

      {/* Centered Search Bar */}
      <div className="memnavbar-center">
        <TextField
          variant="outlined"
          placeholder="Search Members..."
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Handle search term change
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

      {/* Right Section - Icons */}
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
        <Avatar alt="Profile" src="/path/to/profile-picture.jpg" className="profile-avatar" />
      </div>
    </nav>
  );
}

// Main Member Component
const Member = () => {
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState({ studentId: "", name: "", email: "", department: "", batch: "" });
  const [searchTerm, setSearchTerm] = useState(""); // Search term state
  const [filteredMembers, setFilteredMembers] = useState([]); // Filtered members state
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);  // **Initialization of state**
  const [memberToEdit, setMemberToEdit] = useState(null);

  // Example data fetching
  useEffect(() => {
    const mockMembers = [
      { id: 1, studentId: "1904024", name: "Alice Johnson", email: "alice@example.com", department: "CSE", batch: "2019" },
      { id: 2, studentId: "2302018", name: "Bob Smith", email: "bob@example.com", department: "EE", batch: "2023" },
      { id: 3, studentId: "2104035", name: "Catherine Bell", email: "catherine@example.com", department: "CSE", batch: "2021" },
    ];
    setMembers(mockMembers);
    setFilteredMembers(mockMembers); // Initialize with all members
  }, []);

  const handleAddMember = () => {
    if (Object.values(newMember).some(value => value.trim() === "")) {
      alert("All fields must be filled out!");
      return;
    }
    const nextId = members.length ? members[members.length - 1].id + 1 : 1;
    const updatedMembers = [...members, { id: nextId, ...newMember }];
    setMembers(updatedMembers);
    setFilteredMembers(updatedMembers); // Update filtered members as well
    setNewMember({ studentId: "", name: "", email: "", department: "", batch: "" });
  };

  return (
    <div className="admins-dashboard">
      <div className="admins-main-content">
        {/* Pass MemNavBar with necessary props */}
        <AdminSidebar />
        <MemNavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} members={members} setFilteredMembers={setFilteredMembers} />

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
            <TextField
              label="Student ID"
              variant="outlined"
              value={newMember.studentId}
              onChange={(e) => setNewMember({ ...newMember, studentId: e.target.value })}
              className="member-input"
            />
            <TextField
              label="Name"
              variant="outlined"
              value={newMember.name}
              onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
              className="member-input"
            />
            <TextField
              label="Email"
              variant="outlined"
              value={newMember.email}
              onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
              className="member-input"
            />
            <TextField
              label="Department"
              variant="outlined"
              value={newMember.department}
              onChange={(e) => setNewMember({ ...newMember, department: e.target.value })}
              className="member-input"
            />
            <TextField
              label="Batch"
              variant="outlined"
              value={newMember.batch}
              onChange={(e) => setNewMember({ ...newMember, batch: e.target.value })}
              className="member-input"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddMember}
              className="member-add-button"
            >
              Add Member
            </Button>
          </div>

          <TableContainer component={Paper} className="member-table-container">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Student ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Department</TableCell>
                  <TableCell>Batch</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredMembers.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell>{member.studentId}</TableCell>
                    <TableCell>{member.name}</TableCell>
                    <TableCell>{member.email}</TableCell>
                    <TableCell>{member.department}</TableCell>
                    <TableCell>{member.batch}</TableCell>
                    <TableCell>
                      {/* Edit Icon */}
                      <Tooltip title="Edit">
                        <IconButton
                          onClick={() => {
                            setMemberToEdit(member); // Set the selected member to edit
                            setIsEditDialogOpen(true); // Open the edit dialog
                          }}
                          color="primary"
                        >
                          <Edit />
                        </IconButton>
                      </Tooltip>

                      {/* Delete Icon */}
                      <Tooltip title="Delete">
                        <IconButton
                          onClick={() => {
                            setMemberToDelete(member.id); // Set ID for deletion
                            setIsDeleteDialogOpen(true); // Open dialog
                          }}
                          color="secondary"
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
          <Button onClick={() => setIsDeleteDialogOpen(false)} color="primary">Cancel</Button>
          <Button
            onClick={() => {
              setMembers(members.filter(member => member.id !== memberToDelete));
              setFilteredMembers(filteredMembers.filter(member => member.id !== memberToDelete)); // Update filtered members
              setIsDeleteDialogOpen(false); // Close the dialog
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
          <TextField
            label="Student ID"
            variant="outlined"
            value={memberToEdit?.studentId || ""}
            onChange={(e) => setMemberToEdit({ ...memberToEdit, studentId: e.target.value })}
            fullWidth
          />
          <TextField
            label="Name"
            variant="outlined"
            value={memberToEdit?.name || ""}
            onChange={(e) => setMemberToEdit({ ...memberToEdit, name: e.target.value })}
            fullWidth
          />
          <TextField
            label="Email"
            variant="outlined"
            value={memberToEdit?.email || ""}
            onChange={(e) => setMemberToEdit({ ...memberToEdit, email: e.target.value })}
            fullWidth
          />
          <TextField
            label="Department"
            variant="outlined"
            value={memberToEdit?.department || ""}
            onChange={(e) => setMemberToEdit({ ...memberToEdit, department: e.target.value })}
            fullWidth
          />
          <TextField
            label="Batch"
            variant="outlined"
            value={memberToEdit?.batch || ""}
            onChange={(e) => setMemberToEdit({ ...memberToEdit, batch: e.target.value })}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsEditDialogOpen(false)} color="primary">Cancel</Button>
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
