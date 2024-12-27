import React, { useState } from "react";
import './borrow.css';
import AdminSidebar from "../../adminheader/AdminSidebar";
import AdminNav from "../../../AdminDash/adminheader/AdminNav";
import BookNavBar from "../../../AdminDash/Function/AdminBook/adminbooknav";
import img from "../../../../Assets/borrow.webp";

const BorrowReturnPage = () => {
  const [records, setRecords] = useState([
    // Sample records
    {
      bookId: "1",
      studentId: "S123",
      adminId: "A001",
      issueDate: "2024-01-01",
      returnDate: "2024-01-15",
    },
    {
      bookId: "2",
      studentId: "S456",
      adminId: "A002",
      issueDate: "2024-01-05",
      returnDate: "2024-01-20",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecords, setFilteredRecords] = useState(records);
  const [errorMessage, setErrorMessage] = useState("");

  const [editingRecord, setEditingRecord] = useState(null);
  const [newRecord, setNewRecord] = useState({
    bookId: "",
    studentId: "",
    adminId: "",
    issueDate: "",
    returnDate: "",
  });

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleDelete = (bookId) => {
    const updatedRecords = records.filter(record => record.bookId !== bookId);
    setRecords(updatedRecords);
    setFilteredRecords(updatedRecords);  // Update filtered records too
  };

  const handleEdit = (bookId) => {
    const recordToEdit = records.find(record => record.bookId === bookId);
    setEditingRecord(recordToEdit);
  };

  const handleAddRecord = () => {
    const newRecords = [...records, { ...newRecord, bookId: String(records.length + 1) }];
    setRecords(newRecords);
    setFilteredRecords(newRecords);
    setNewRecord({ bookId: "", studentId: "", adminId: "", issueDate: "", returnDate: "" });
  };

  const handleEditSave = () => {
    const updatedRecords = records.map(record => 
      record.bookId === editingRecord.bookId ? editingRecord : record
    );
    setRecords(updatedRecords);
    setFilteredRecords(updatedRecords);
    setEditingRecord(null);  // Close editing mode
  };

  return (
    <div className="admin-feedback-container">
      <AdminSidebar />
      <BookNavBar onSearch={handleSearch}/>
   
      <div className="adfeed-content">
        <div className="adfeed-welcome-bar">
          <div className="adfeed-welcome-text">
            <h1>Borrow and Return Records</h1>
            <p>Manage and review the book details borrowed by students.</p>
          </div>
          <div className="adfeed-welcome-image">
            <img src={img} alt="Feedback" />
          </div>
        </div>

        {/* Add Record Button */}
        <div className="add-record-button-container">
          <button className="add-record-btn" onClick={handleAddRecord}>
            Add Record
          </button>
        </div>

        {/* Add New Record Form */}
        {editingRecord === null && (
          <div className="add-record-form">
            <input
              type="text"
              placeholder="Book ID"
              value={newRecord.bookId}
              onChange={(e) => setNewRecord({ ...newRecord, bookId: e.target.value })}
            />
            <input
              type="text"
              placeholder="Student ID"
              value={newRecord.studentId}
              onChange={(e) => setNewRecord({ ...newRecord, studentId: e.target.value })}
            />
            <input
              type="text"
              placeholder="Admin ID"
              value={newRecord.adminId}
              onChange={(e) => setNewRecord({ ...newRecord, adminId: e.target.value })}
            />
            <input
              type="date"
              placeholder="Issue Date"
              value={newRecord.issueDate}
              onChange={(e) => setNewRecord({ ...newRecord, issueDate: e.target.value })}
            />
            <input
              type="date"
              placeholder="Return Date"
              value={newRecord.returnDate}
              onChange={(e) => setNewRecord({ ...newRecord, returnDate: e.target.value })}
            />
          </div>
        )}

        {/* Editing Record Form */}
        {editingRecord && (
          <div className="edit-record-form">
            <input
              type="text"
              placeholder="Book ID"
              value={editingRecord.bookId}
              onChange={(e) => setEditingRecord({ ...editingRecord, bookId: e.target.value })}
            />
            <input
              type="text"
              placeholder="Student ID"
              value={editingRecord.studentId}
              onChange={(e) => setEditingRecord({ ...editingRecord, studentId: e.target.value })}
            />
            <input
              type="text"
              placeholder="Admin ID"
              value={editingRecord.adminId}
              onChange={(e) => setEditingRecord({ ...editingRecord, adminId: e.target.value })}
            />
            <input
              type="date"
              placeholder="Issue Date"
              value={editingRecord.issueDate}
              onChange={(e) => setEditingRecord({ ...editingRecord, issueDate: e.target.value })}
            />
            <input
              type="date"
              placeholder="Return Date"
              value={editingRecord.returnDate}
              onChange={(e) => setEditingRecord({ ...editingRecord, returnDate: e.target.value })}
            />
            <button onClick={handleEditSave}>Save Changes</button>
          </div>
        )}

        {/* Error message display */}
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        {/* Table to display records */}
        <div className="adfeed-table-container">
          <table className="admin-feedback-table">
            <thead>
              <tr>
                <th>Book ID</th>
                <th>Issue Date</th>
                <th>Return Date</th>
                <th>Admin ID</th>
                <th>Student ID</th>
                <th>Actions</th> {/* Column for Edit and Delete */}
              </tr>
            </thead>
            <tbody>
              {filteredRecords.length > 0 ? (
                filteredRecords.map((record, index) => (
                  <tr key={index}>
                    <td>{record.bookId}</td>
                    <td>{record.issueDate}</td>
                    <td>{record.returnDate}</td>
                    <td>{record.adminId}</td>
                    <td>{record.studentId}</td>
                    <td>
                      <button className='edit-btn' onClick={() => handleEdit(record.bookId)}>Edit</button>
                      <button  className='delete-btn'onClick={() => handleDelete(record.bookId)}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No records found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BorrowReturnPage;



