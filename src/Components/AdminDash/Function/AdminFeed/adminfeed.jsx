import React, { useState, useEffect } from "react";
import AdminSidebar from "../../adminheader/AdminSidebar";
import BookNavBar from "../../../AdminDash/Function/AdminBook/adminbooknav";
import img from "../../../../Assets/feedback.jpg";
import "./adminfeed.css";

const AdminFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([
    { id: 1, description: "The platform is user-friendly and easy to navigate.", rating: 5, adminId: 101, studentId: 201 },
    { id: 2, description: "The audiobook library needs more variety.", rating: 3, adminId: 102, studentId: 202 },
    { id: 3, description: "Excellent customer support!", rating: 4, adminId: 101, studentId: 203 },
    { id: 4, description: "Found some technical glitches while accessing resources.", rating: 2, adminId: 103, studentId: 204 },
    { id: 5, description: "The mobile app experience is seamless and intuitive.", rating: 5, adminId: 104, studentId: 205 },
    { id: 6, description: "The search functionality could be improved.", rating: 3, adminId: 102, studentId: 206 },
    { id: 7, description: "Appreciate the wide range of resources available.", rating: 4, adminId: 101, studentId: 207 },
    { id: 8, description: "Some of the content is outdated and needs revision.", rating: 2, adminId: 103, studentId: 208 },
    { id: 9, description: "The platform works great, but it lacks offline functionality.", rating: 3, adminId: 102, studentId: 209 },
    { id: 10, description: "Love the customization options for profiles!", rating: 5, adminId: 104, studentId: 210 },
  ]);

  const [filteredFeedbacks, setFilteredFeedbacks] = useState(feedbacks);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterVisible, setFilterVisible] = useState(false);
  const [filterCriteria, setFilterCriteria] = useState("");

  // Handle search and filtering
  useEffect(() => {
    let updatedFeedbacks = [...feedbacks];

    if (searchTerm) {
      updatedFeedbacks = updatedFeedbacks.filter((feedback) =>
        feedback.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterCriteria === "id") {
      updatedFeedbacks.sort((a, b) => a.id - b.id);
    } else if (filterCriteria === "rating") {
      updatedFeedbacks.sort((a, b) => b.rating - a.rating);
    }

    setFilteredFeedbacks(updatedFeedbacks);
  }, [searchTerm, filterCriteria, feedbacks]);

  const deleteFeedback = (id) => {
    setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
  };

  const toggleFilter = () => {
    setFilterVisible((prev) => !prev);
  };

  const handleFilterChange = (criteria) => {
    setFilterCriteria(criteria);
    setFilterVisible(false); // Close the dropdown
  };
  const handleSearch = (term) => {
    console.log({ setSearchTerm }); // This should log the function reference
    if (term) {
      setSearchTerm(term.trim());
    } else {
      setSearchTerm(""); // Reset if no input
    }
  };
  
  

  return (
    <div className="admin-feedback-container">
      <AdminSidebar />
      <BookNavBar onSearch={handleSearch} />

      <div className="adfeed-content">
        <div className="adfeed-welcome-bar">
          <div className="adfeed-welcome-text">
            <h1>Feedback Management</h1>
            <p>Manage and review feedback provided by students.</p>
          </div>
          <div className="adfeed-welcome-image">
            <img src={img} alt="Feedback" />
          </div>
        </div>

        <div className="adfilter-controls">
          <button className="adfilter-button" onClick={toggleFilter} aria-label="Toggle filter options">
            <i className="fas fa-filter"></i> Filter
          </button>
          {filterVisible && (
            <div className="adfilter-dropdown">
              <div className="filter-option" onClick={() => handleFilterChange("id")}>
                ID
              </div>
              <div className="filter-option" onClick={() => handleFilterChange("rating")}>
                Rating
              </div>
            </div>
          )}
        </div>

        <table className="admin-feedback-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Rating (1-5)</th>
              <th>Admin ID</th>
              <th>Student ID</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            {filteredFeedbacks.length > 0 ? (
              filteredFeedbacks.map((feedback) => (
                <tr key={feedback.id}>
                  <td>{feedback.id}</td>
                  <td>{feedback.description}</td>
                  <td>{feedback.rating}</td>
                  <td>{feedback.adminId}</td>
                  <td>{feedback.studentId}</td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => deleteFeedback(feedback.id)}
                      aria-label={`Delete feedback ${feedback.id}`}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No feedback found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminFeedback;
