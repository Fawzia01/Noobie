import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../Header/header"; // Make sure to import Header if you have one
import "./book.css"; // CSS for grid layout

// Importing book cover images
import img16 from "../../../../Assets/chap10.jpg";
import img17 from "../../../../Assets/chap11.jpg";
import img18 from "../../../../Assets/chap12.jpeg";
import img19 from "../../../../Assets/cat7.jpg";
import img20 from "../../../../Assets/cat8.jpg";
import img from "../../../../Assets/MEimg.jpg";

// List of ME Books
const meBooks = [
  { id: "16", title: "Mechanical Engineering Design", author: "J.E. Shigley", cover: img16 },
  { id: "17", title: "Fluid Mechanics", author: "Frank M. White", cover: img17 },
  { id: "18", title: "Engineering Mechanics", author: "J.L. Meriam", cover: img18 },
  { id: "19", title: "Thermodynamics: An Engineering Approach", author: "Yunus A. Cengel", cover: img19 },
  { id: "20", title: "Dynamics of Machinery", author: "Ansel C. Ugural", cover: img20 },
];

function MEBooks() {
    const [filteredBooks, setFilteredBooks] = useState(meBooks); // Default to all books
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
    const [selectedBookId, setSelectedBookId] = useState(null);
    const navigate = useNavigate();
  
    // Function to handle search and filter
    const handleSearch = (searchTerm, filterType) => {
      if (searchTerm.trim() === "") {
        setFilteredBooks(meBooks); // If no search term, show all books
        return;
      }
  
      const filtered = meBooks.filter((book) =>
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
        <Header books={meBooks} onSearch={handleSearch} category="Mechanical Engineering" onSelectBook={handleSelectBook} />
  
        {/* Main Content */}
        <div className={`main-content ${isSidebarExpanded ? "shrink" : ""}`}>
          {/* Welcome Bar */}
          <div className="welcome-bar">
            <div className="welcome-text">
              <h1>Mechanical Engineering</h1>
              <p>Explore the world of mechanical engineering with these amazing books!</p>
            </div>
            <div className="welcome-image">
              <img src={img} alt="Mechanical Engineering Books" />
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
  
  export default MEBooks;