import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // For navigation
import dummyImg from "../../Assets/dummy.jpeg";

import './header.css'; // Combined CSS

const Header = ( {books, onSearch } ) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestedBooks, setSuggestedBooks] = useState([]);
  const [filterVisible, setFilterVisible] = useState(false); // For showing/hiding filter dropdown
  const [filterType, setFilterType] = useState('title'); // Default filter by title

  const navigate = useNavigate();

  
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // If search term is empty, clear suggestions
    if (value.trim() === "") {
      setSuggestedBooks([]); // Clear suggestions if the search term is empty
      onSearch(value, filterType); // Reset to all books (show all)
      return;
    }

    // Filter suggestions based on search term and filter type
    const filteredSuggestions = books.filter((book) =>
      book[filterType].toLowerCase().includes(value.toLowerCase())
    );
    setSuggestedBooks(filteredSuggestions); // Set the filtered suggestions

    // Pass the search term and filter type to the parent to update the filtered books
    onSearch(value, filterType);
  };
  // Handle filter change
  const handleFilterChange = (type) => {
    setFilterType(type);
    onSearch(searchTerm, type); // Update filter and trigger search
  };
  const handleBookClick = ({book,onSelectBook}) => {
    if (book && book.id) {
      onSelectBook(book.id); // Notify parent that a book is selected
    }
  };

  const toggleFilter = () => setFilterVisible(!filterVisible);

  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  const [isCatalogueVisible, setCatalogueVisible] = useState(false);
  
  const toggleSidebar = () => setSidebarExpanded(prev => !prev);
  const toggleCatalogue = () => setCatalogueVisible(prev => !prev);

  return (
    <div>
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarExpanded ? "expanded" : ""}`}>
        <ul className="sidebar-items">
          {/* Book Catalogue */}
          <li onClick={toggleCatalogue}>
            <div>
              <i className="fas fa-book"></i> {isSidebarExpanded && "Book Catalogue"}
            </div>
          </li>

          {/* Subcategories */}
          {isCatalogueVisible && (
            <ul className="submenu">
              <li onClick={() => navigate('/storybooks')}>StoryBooks</li>
              <li onClick={() => navigate('/csebooks')}>Computer Science and Engineering</li>
              <li onClick={() => navigate('/eebooks')}>Electrical Engineering</li>
              <li onClick={() => navigate('/mebooks')}>Mechanical Engineering</li>
            </ul>
          )}

          <li>
            <Link to="/ebooks">
              <i className="fas fa-tablet-alt"></i> {isSidebarExpanded && "eBooks"}
            </Link>
          </li>
          <li><i className="fas fa-user"></i> {isSidebarExpanded && "Profile"}</li>
          <li><i className="fas fa-cog"></i> {isSidebarExpanded && "Settings"}</li>
          <li>
            <Link to="/payment">
              <i className="fas fa-credit-card"></i> {isSidebarExpanded && "Payment"}
            </Link>
          </li>
          <li><i className="fas fa-sign-out-alt"></i> {isSidebarExpanded && "Logout"}</li>
          <li><i className="fas fa-comment-dots"></i> {isSidebarExpanded && "Feedback"}</li>
          <li><i className="fas fa-tachometer-alt"></i> {isSidebarExpanded && "Dashboard"}</li>
        </ul>
      </div>

      {/* Top Navbar */}
      <div className="top-navbar">
        <button className="menu-icon" onClick={toggleSidebar}>☰</button>
        <div className="logo">BookWave</div>

        {/* Search Bar */}
        <input
          type="text"
          className="search-bar"
          placeholder={`Search by ${filterType.charAt(0).toUpperCase() + filterType.slice(1)}...`} // Dynamic placeholder
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {/* Filter Button */}
        <button className="filter-button" onClick={toggleFilter}>
          <i className="fas fa-filter"></i> Filter
        </button>
        {filterVisible && (
        <div className="filter-dropdown">
          <div className="filter-option" onClick={() => handleFilterChange("title")}>Title</div>
          <div className="filter-option" onClick={() => handleFilterChange("author")}>Author</div>
        </div>
      )}


        {/* Suggested Books */}
        {searchTerm && suggestedBooks.length > 0 && (
          <div className="suggestions">
            <h3>Suggested Books:</h3>
            <ul>
              {suggestedBooks.map((book) => (
                <li key={book.id} onClick={() => handleBookClick(book)}>
                  {book.title} by {book.author}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Navbar Icons and Profile */}
        <div className="nav-icons">
          <i className="icon fas fa-bell bell-icon"></i>
          <i className="icon fas fa-comments chat-icon"></i>
          <div className="profile">
            <img src={dummyImg} alt="Profile" className="profile-pic" />
            <span className="username">Sarah Connor</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
