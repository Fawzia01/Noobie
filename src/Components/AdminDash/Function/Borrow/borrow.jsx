import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminSidebar from "../../adminheader/AdminSidebar";
import BookNavBar from "../../../AdminDash/Function/AdminBook/adminbooknav";
import img from "../../../../Assets/borrow.webp";
import "./borrow.css";

const BorrowReturnPage = () => {
  const [records, setRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    bookId: "",
    studentId: "",
    issuedDate: "",
    returnDate: "",
  });

  const API_URL = "http://localhost:8080/api/borrows-return";

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const response = await axios.get(`${API_URL}/all`);
      setRecords(response.data);
      setFilteredRecords(response.data);
    } catch (error) {
      console.error("Error fetching records:", error);
    }
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    if (isNaN(date.getTime())) return "Invalid Date";
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const calculateDue = (returnDate) => {
    if (!returnDate) return { status: "No Due Date", days: "" };
    const currentDate = new Date();
    const dueDate = new Date(returnDate);

    const diffInTime = currentDate - dueDate;
    const diffInDays = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));

    if (diffInTime > 0) {
      return { status: "Overdue", days: `${diffInDays} days` };
    } else {
      return { status: "On Time", days: "0 days" };
    }
  };

  const handleSearch = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    setFilteredRecords(
      records.filter(
        (record) =>
          record.bookId.toString().toLowerCase().includes(lowerCaseSearchTerm) ||
          record.studentId.toString().toLowerCase().includes(lowerCaseSearchTerm)
      )
    );
  };

  const handleAddRecordClick = () => {
    setIsEditing(false);
    setIsFormVisible(true);
    setFormData({
      bookId: "",
      studentId: "",
      issuedDate: "",
      returnDate: "",
    });
  };

  const handleEditClick = (bookId) => {
    const recordToEdit = records.find((record) => record.bookId === bookId);
    setIsEditing(true);
    setIsFormVisible(true);
    setFormData({
      bookId: recordToEdit.bookId,
      studentId: recordToEdit.studentId,
      issuedDate: recordToEdit.issuedDate,
      returnDate: recordToEdit.returnDate,
    });
  };

  const handleDeleteClick = async (bookId, studentId) => {
    try {
      await axios.delete(`${API_URL}/delete/${studentId}/${bookId}`);
      fetchRecords();
    } catch (error) {
      console.error("Error deleting record:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(
          `${API_URL}/update/${formData.studentId}/${formData.bookId}`,
          formData
        );
      } else {
        await axios.post(`${API_URL}/create`, formData);
      }
      fetchRecords();
      setIsFormVisible(false);
      setFormData({
        bookId: "",
        studentId: "",
        issuedDate: "",
        returnDate: "",
      });
    } catch (error) {
      console.error("Error saving record:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setIsFormVisible(false);
    setFormData({
      bookId: "",
      studentId: "",
      issuedDate: "",
      returnDate: "",
    });
  };

  return (
    <div className="admin-borrow-container">
      <AdminSidebar />
      <div className="admin-content">
        <BookNavBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={handleSearch}
          hidepart={true}
        />
        <div className="admain-content">
          <div className="adbor-welcome-bar">
            <div className="adbor-welcome-text">
              <h1>Borrow and Return Records</h1>
              <p>Manage borrowing and returning records of students.</p>
            </div>
            <div className="adbor-welcome-image">
              <img src={img} alt="Borrow and Return" />
            </div>
          </div>

          <div className="add-record-button-container">
            <button className="add-record-btn" onClick={handleAddRecordClick}>
              Add Record
            </button>
          </div>

          {isFormVisible && (
            <form onSubmit={handleSubmit} className="add-record-form">
              <input
                type="text"
                name="bookId"
                value={formData.bookId}
                onChange={handleChange}
                placeholder="Book ID"
                required
              />
              <input
                type="text"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                placeholder="Student ID"
                required
              />
              <input
                type="date"
                name="issuedDate"
                value={formData.issuedDate}
                onChange={handleChange}
                required
              />
              <input
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
                required
              />
              <button type="submit" className="add-record-btn">
                {isEditing ? "Update" : "Add"}
              </button>
              <button
                type="button"
                className="cancel-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </form>
          )}

          <table className="admin-borrow-table">
            <thead>
              <tr>
                <th>Book ID</th>
                <th>Student ID</th>
                <th>Issued Date</th>
                <th>Return Date</th>
                <th>Due</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.length > 0 ? (
                filteredRecords.map((record) => {
                  const formattedIssuedDate = record.issuedDate
                    ? formatDate(record.issuedDate)
                    : "No Issued Date";
                  const formattedReturnDate = record.returnDate
                    ? formatDate(record.returnDate)
                    : "No Return Date";

                  const due = calculateDue(record.returnDate);

                  return (
                    <tr key={record.bookId}>
                      <td>{record.bookId}</td>
                      <td>{record.studentId}</td>
                      <td>{formattedIssuedDate}</td>
                      <td>{formattedReturnDate}</td>
                      <td>
                        <div>{due.status}</div>
                        <div style={{ fontSize: "0.9em", color: "#555" }}>
                          {due.days}
                        </div>
                      </td>
                      <td>
                        <button
                          className="edit-btn"
                          onClick={() => handleEditClick(record.bookId)}
                        >
                          Edit
                        </button>
                        <button
                          className="delete-btn"
                          onClick={() =>
                            handleDeleteClick(record.bookId, record.studentId)
                          }
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
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
