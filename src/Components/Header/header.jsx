import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // For navigation
import dummyImg from "../../Assets/dummy.jpeg";
import img1 from "../../Assets/chap1pic.jpeg";
import img2 from "../../Assets/chap3.jpeg";
import img3 from "../../Assets/chap2.jpeg";
import img4 from "../../Assets/cat1.jpg";
import img5 from "../../Assets/cat2.jpg";
import img6 from "../../Assets/chap4.jpeg";
import img7 from "../../Assets/chap5.jpg";
import img8 from "../../Assets/chap6.jpeg";
import img9 from "../../Assets/cat3.jpg";
import img10 from "../../Assets/cat4.jpg";
import img11 from "../../Assets/cat5.jpg";
import img12 from "../../Assets/chap7.jpg";
import img13 from "../../Assets/chap8.jpg";
import img14 from "../../Assets/chap9.jpeg";
import img15 from "../../Assets/cat6.jpg";
import img16 from "../../Assets/chap10.jpg";
import img17 from "../../Assets/chap11.jpg";
import img18 from "../../Assets/chap12.jpeg";
import img19 from "../../Assets/cat7.jpg";
import img20 from "../../Assets/cat8.jpg";
import './header.css'; // Combined CSS

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [suggestedBooks, setSuggestedBooks] = useState([]);
  const [books] = useState([
    { id: '1', title: 'Harry Potter and the Philosopher\'s Stone', author: 'J.K. Rowling', cover: img1, category: 'StoryBooks', publishedDate: '1997-06-26', availableCopies: 5 },
    { id: '2', title: 'The Hobbit', author: 'J.R.R. Tolkien', cover: img2, category: 'StoryBooks', publishedDate: '1937-09-21', availableCopies: 3 },
    { id: '3', title: '1984', author: 'George Orwell', cover: img3, category: 'StoryBooks', publishedDate: '1949-06-08', availableCopies: 7 },
    { id: '4', title: 'To Kill a Mockingbird', author: 'Harper Lee', cover: img4, category: 'StoryBooks', publishedDate: '1960-07-11', availableCopies: 6 },
    { id: '5', title: 'The Catcher in the Rye', author: 'J.D. Salinger', cover: img5, category: 'StoryBooks', publishedDate: '1951-07-16', availableCopies: 4 },

    { id: '6', title: 'Introduction to Algorithms', author: 'Thomas H. Cormen', cover: img6, category: 'Computer Science and Engineering', publishedDate: '1990-07-01', availableCopies: 8 },
    { id: '7', title: 'Computer Networks', author: 'Andrew S. Tanenbaum', cover: img7, category: 'Computer Science and Engineering', publishedDate: '1981-01-01', availableCopies: 4 },
    { id: '8', title: 'Data Structures and Algorithms in Java', author: 'Robert Lafore', cover: img8, category: 'Computer Science and Engineering', publishedDate: '2002-09-01', availableCopies: 2 },
    { id: '9', title: 'Operating System Concepts', author: 'Abraham Silberschatz', cover: img9, category: 'Computer Science and Engineering', publishedDate: '2005-07-01', availableCopies: 10 },
    { id: '10', title: 'Artificial Intelligence: A Modern Approach', author: 'Stuart Russell', cover: img10, category: 'Computer Science and Engineering', publishedDate: '1995-12-15', availableCopies: 5 },

    { id: '11', title: 'Electrical Engineering: Principles and Applications', author: 'Allan R. Hambley', cover: img11, category: 'Electrical Engineering', publishedDate: '2013-04-01', availableCopies: 6 },
    { id: '12', title: 'Fundamentals of Electric Circuits', author: 'Alexander S. Sadiku', cover: img12, category: 'Electrical Engineering', publishedDate: '2007-08-01', availableCopies: 5 },
    { id: '13', title: 'Modern Control Engineering', author: 'Ogata Katsuhiko', cover: img13, category: 'Electrical Engineering', publishedDate: '2010-07-01', availableCopies: 3 },
    { id: '14', title: 'Electrical Machines', author: 'S.K. Bhattacharya', cover: img14, category: 'Electrical Engineering', publishedDate: '2002-05-01', availableCopies: 2 },

    { id: '15', title: 'Mechanical Engineering Design', author: 'J.E. Shigley', cover: img15, category: 'Mechanical Engineering', publishedDate: '2011-01-01', availableCopies: 4 },
    { id: '16', title: 'Fluid Mechanics', author: 'Frank M. White', cover: img16, category: 'Mechanical Engineering', publishedDate: '2011-01-01', availableCopies: 6 },
    { id: '17', title: 'Engineering Mechanics', author: 'J.L. Meriam', cover: img17, category: 'Mechanical Engineering', publishedDate: '2014-05-01', availableCopies: 5 },
    { id: '18', title: 'Thermodynamics: An Engineering Approach', author: 'Yunus A. Cengel', cover: img18, category: 'Mechanical Engineering', publishedDate: '2007-03-01', availableCopies: 3 },
    { id: '19', title: 'Dynamics of Machinery', author: 'Ansel C. Ugural', cover: img19, category: 'Mechanical Engineering', publishedDate: '2004-10-01', availableCopies: 4 }
  ]);

  const navigate = useNavigate(); // Using useNavigate for navigation

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(value.toLowerCase()) &&
      (selectedCategory ? book.category === selectedCategory : true)
    );

    setSuggestedBooks(filteredBooks);
  };

  const handleBookClick = (book) => {
    navigate(`/bookdetail/${book.id}`); // Navigating to the Book Detail page
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchTerm(''); // Clear search term
    const filteredBooks = books.filter((book) => book.category === category);
    setSuggestedBooks(filteredBooks); // Show only books from selected category
  };

  const toggleFilter = () => setFilterVisible(!filterVisible);

  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  const toggleSidebar = () => setSidebarExpanded((prev) => !prev);

  return (
    <div>
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarExpanded ? "expanded" : ""}`}>
        <ul className="sidebar-items">
          <li>
            <Link to="/book">
              <i className="fas fa-book"></i> {isSidebarExpanded && "Book Catalogue"}
            </Link>
          </li>
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
          placeholder="Search for books, authors..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        
        {/* Filter Button */}
        <button className="filter-button" onClick={toggleFilter}>
          <i className="fas fa-filter"></i> Filter
        </button>

        {/* Filter Dropdown */}
        {filterVisible && (
          <div className="filter-dropdown">
            <div className="filter-option" onClick={() => handleCategoryChange("StoryBooks")}>StoryBooks</div>
            <div className="filter-option" onClick={() => handleCategoryChange("Computer Science and Engineering")}>Computer Science and Engineering</div>
            <div className="filter-option" onClick={() => handleCategoryChange("Electrical Engineering")}>Electrical Engineering</div>
            <div className="filter-option" onClick={() => handleCategoryChange("Mechanical Engineering")}>Mechanical Engineering</div>
          </div>
        )}

        {/* Suggested Books */}
        {searchTerm && (
          <div className="suggestions">
            <h3>Suggested Books:</h3>
            <ul>
              {suggestedBooks.map((book) => (
                <li key={book.id} onClick={() => handleBookClick(book)}>
                  {book.title}
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