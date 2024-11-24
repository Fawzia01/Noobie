import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./book.css"; // CSS for grid layout

// Importing book cover images
import img6 from "../../../../Assets/chap4.jpeg";
import img7 from "../../../../Assets/chap5.jpg";
import img8 from "../../../../Assets/chap6.jpeg";
import img9 from "../../../../Assets/cat3.jpg";
import img10 from "../../../../Assets/cat4.jpg";
import img11 from "../../../../Assets/cat5.jpg";
import img from "../../../../Assets/cseimg.jpg";
import Header from "../../../Header/header";


const cseBooks = [
  { id: "6", title: "Introduction to Algorithms", author: "Thomas H. Cormen", cover: img6 },
  { id: "7", title: "Computer Networks", author: "Andrew S. Tanenbaum", cover: img7 },
  { id: "8", title: "Data Structures and Algorithms in Java", author: "Robert Lafore", cover: img8 },
  { id: "9", title: "Operating System Concepts", author: "Abraham Silberschatz", cover: img9 },
  { id: "10", title: "Artificial Intelligence: A Modern Approach", author: "Stuart Russell", cover: img10 },
  { id: "11", title: "The C Programming Language", author: "Brian W. Kernighan", cover: img11 },
];

function CSEBooks() {
    const [filteredBooks, setFilteredBooks] = useState(cseBooks); // Default to all books
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
    const [selectedBookId, setSelectedBookId] = useState(null);
    const navigate = useNavigate();
  
    // Function to handle search and filter
    const handleSearch = (searchTerm, filterType) => {
      if (searchTerm.trim() === "") {
        setFilteredBooks(cseBooks); // If no search term, show all books
        return;
      }
  
      const filtered = cseBooks.filter((book) =>
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
      <Header books={cseBooks} onSearch={handleSearch} category="Computer Science and Engineering" onSelectBook={handleSelectBook} /> 
       
      {/* Main Content */}
      <div className={`main-content ${isSidebarExpanded ? "shrink" : ""}`}>
        {/* Welcome Bar */}
        <div className="welcome-bar">
          <div className="welcome-text">
            <h1>Computer Science and Engineering</h1>
            <p>Dive into the world of computer science and engineering books.</p>
          </div>
          <div className="csewelcome-image">
            <img src={img} alt="Book Catalogue" />
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

export default CSEBooks;
