import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../Header/header"; // Make sure to import Header if you have one
import "./book.css"; // CSS for grid layout

// Importing book cover images
import img12 from "../../../../Assets/chap7.jpg";
import img13 from "../../../../Assets/chap8.jpg";
import img14 from "../../../../Assets/chap9.jpeg";
import img15 from "../../../../Assets/cat7.jpg";
import img from "../../../../Assets/eeimg.jpg";

// List of EE Books
const eeBooks = [
  { id: "12", title: "Electrical Engineering: Principles and Applications", author: "Allan R. Hambley", cover: img12 },
  { id: "13", title: "Fundamentals of Electric Circuits", author: "Alexander S. Sadiku", cover: img13 },
  { id: "14", title: "Modern Control Engineering", author: "Ogata Katsuhiko", cover: img14 },
  { id: "15", title: "Electrical Machines", author: "S.K. Bhattacharya", cover: img15 },
];

function EEBooks() {
    const [filteredBooks, setFilteredBooks] = useState(eeBooks); // Default to all books
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
    const [selectedBookId, setSelectedBookId] = useState(null);
    const navigate = useNavigate();
  
    // Function to handle search and filter
    const handleSearch = (searchTerm, filterType) => {
      if (searchTerm.trim() === "") {
        setFilteredBooks(eeBooks); // If no search term, show all books
        return;
      }
  
      const filtered = eeBooks.filter((book) =>
        book[filterType].toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBooks(filtered); // Update filtered books based on search term
    };
  
    const handleSelectBook = (bookId) => {
      setSelectedBookId(bookId); // Update the selected book ID
    };
  
    // Navigate to book details page
    const goToDetails = (id) => {
      navigate(`/bookdetail/${id}`);
    };
  
    return (
      <div className="book-container">
        {/* Include Header Component */}
        <Header books={eeBooks} onSearch={handleSearch} category="Electrical Engineering" onSelectBook={handleSelectBook} />
  
        {/* Main Content */}
        <div className={`main-content ${isSidebarExpanded ? "shrink" : ""}`}>
          {/* Welcome Bar */}
          <div className="welcome-bar">
            <div className="welcome-text">
              <h1>Electrical Engineering</h1>
              <p>Explore a wide range of Electrical Engineering books to enhance your knowledge!</p>
            </div>
            <div className="welcome-image">
              <img src={img} alt="Electrical Engineering Books" />
            </div>
          </div>
  
          {/* Books Grid */}
          <div className="books-grid">
            {filteredBooks.length === 0 ? (
              <p>No books found</p> // Show message if no books match search
            ) : (
              filteredBooks.map((book) => (
                <div
                  className={`book-card ${selectedBookId === book.id ? "highlighted" : ""}`}
                  key={book.id}
                  onClick={() => goToDetails(book.id)}
                >
                  <img src={book.cover} alt={book.title} className="book-cover" />
                  <div className="book-info">
                    <h3 className="book-title">{book.title}</h3>
                    <p className="book-author">by {book.author}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
  
  export default EEBooks;