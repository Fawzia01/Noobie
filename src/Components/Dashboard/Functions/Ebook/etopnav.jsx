import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router for navigation
import './ebooks.css'; // Include your styles
import dummy from '../../../../Assets/dummy.jpeg';
import img1 from '../../../../Assets/chap1pic.jpeg';
import img2 from '../../../../Assets/chap2.jpeg';
import img3 from '../../../../Assets/chap3.jpeg';
import img4 from '../../../../Assets/chap4.jpeg';
import img5 from '../../../../Assets/chap5.jpg';
import img6 from '../../../../Assets/chap6.jpeg';
import img7 from '../../../../Assets/chap7.jpg';
import img8 from '../../../../Assets/chap8.jpg';
import img9 from '../../../../Assets/chap9.jpeg';
import img10 from '../../../../Assets/chap10.jpg';
import img11 from '../../../../Assets/chap11.jpg';
import img12 from '../../../../Assets/chap12.jpeg';

// Example books array
const books = [
  { id: '1', title: 'Harry Potter and the Philosopher\'s Stone', author: 'J.K. Rowling', pdfUrl: '/pdf/harry_potter.pdf', audiobookUrl: '/audio/harry_potter.mp3', cover: img1, category: 'StoryBooks' },
  { id: '2', title: 'The Hobbit', author: 'J.R.R. Tolkien', pdfUrl: '/pdf/the_hobbit.pdf', audiobookUrl: '/audio/the_hobbit.mp3', cover: img2, category: 'StoryBooks' },
  { id: '3', title: '1984', author: 'George Orwell', pdfUrl: '/pdf/1984.pdf', audiobookUrl: '/audio/1984.mp3', cover: img3, category: 'StoryBooks' },
  { id: '4', title: 'Introduction to Algorithms', author: 'Thomas H. Cormen', pdfUrl: '/pdf/intro_to_algorithms.pdf', audiobookUrl: '/audio/intro_to_algorithms.mp3', cover: img4, category: 'Computer Science and Engineering' },
  { id: '5', title: 'Computer Networks', author: 'Andrew S. Tanenbaum', pdfUrl: '/pdf/computer_networks.pdf', audiobookUrl: '/audio/computer_networks.mp3', cover: img5, category: 'Computer Science and Engineering' },
  { id: '6', title: 'Data Structures and Algorithms in Java', author: 'Robert Lafore', pdfUrl: '/pdf/data_structures_java.pdf', audiobookUrl: '/audio/data_structures_java.mp3', cover: img6, category: 'Computer Science and Engineering' },
  { id: '7', title: 'Electrical Engineering: Principles and Applications', author: 'Allan R. Hambley', pdfUrl: '/pdf/electrical_engineering.pdf', audiobookUrl: '/audio/electrical_engineering.mp3', cover: img7, category: 'Electrical Engineering' },
  { id: '8', title: 'Fundamentals of Electric Circuits', author: 'Alexander S. Sadiku', pdfUrl: '/pdf/fundamentals_of_circuits.pdf', audiobookUrl: '/audio/fundamentals_of_circuits.mp3', cover: img8, category: 'Electrical Engineering' },
  { id: '9', title: 'Modern Control Engineering', author: 'Ogata Katsuhiko', pdfUrl: '/pdf/modern_control.pdf', audiobookUrl: '/audio/modern_control.mp3', cover: img9, category: 'Electrical Engineering' },
  { id: '10', title: 'Mechanical Engineering Design', author: 'J.E. Shigley', pdfUrl: '/pdf/mechanical_design.pdf', audiobookUrl: '/audio/mechanical_design.mp3', cover: img10, category: 'Mechanical Engineering' },
  { id: '11', title: 'Fluid Mechanics', author: 'Frank M. White', pdfUrl: '/pdf/fluid_mechanics.pdf', audiobookUrl: '/audio/fluid_mechanics.mp3', cover: img11, category: 'Mechanical Engineering' },
  { id: '12', title: 'Engineering Mechanics', author: 'J.L. Meriam', pdfUrl: '/pdf/engineering_mechanics.pdf', audiobookUrl: '/audio/engineering_mechanics.mp3', cover: img12, category: 'Mechanical Engineering' },
];

function TopNavbar({ toggleSidebar }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterBy, setFilterBy] = useState('title');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim()) {
      const filtered = books.filter((book) => {
        const searchIn = book[filterBy]?.toLowerCase() || '';
        return searchIn.includes(query.toLowerCase());
      });

      const wordSuggestions = books.filter((book) =>
        `${book.title} ${book.author}`.toLowerCase().includes(query.toLowerCase())
      );

      const uniqueResults = [...new Set([...filtered, ...wordSuggestions])];
      setFilteredBooks(uniqueResults);
    } else {
      setFilteredBooks([]);
    }
  };

  const handleFilterChange = (e) => {
    setFilterBy(e.target.value);
    setFilteredBooks([]);
  };

  const handleSuggestionClick = (book) => {
    // Navigate to book's details page or perform desired action
    navigate(`/book/${book.id}`, { state: book });
  };

  return (
    <div className="top-navbar">
      <button className="menu-icon" onClick={toggleSidebar}>
        ☰
      </button>
      <div className="logo">BookWave</div>
      <div className="search-container">
        <div className="search-bar-wrapper">
          <select className="filter-dropdown" value={filterBy} onChange={handleFilterChange}>
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="id">ID</option>
          </select>
          <input
            type="text"
            className="search-bar"
            placeholder={`Search by ${filterBy}...`}
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <i className="filter-icon fas fa-filter"></i>
        </div>
        {searchQuery && filteredBooks.length > 0 && (
          <div className="suggestions-dropdown">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(book)} // Handle click
              >
                <img src={book.cover} alt={book.title} className="suggestion-cover" />
                <div className="suggestion-text">
                  <span>{book.title}</span>
                  <span className="author-name">{book.author}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="nav-icons">
        <i className="icon fas fa-bell bell-icon"></i>
        <i className="icon fas fa-comments chat-icon"></i>
        <div className="profile">
          <img src={dummy} alt="Profile" className="profile-pic" />
          <span className="username">Sarah Cannor</span>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
