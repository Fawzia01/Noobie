import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../Header/header";// Make sure to import Header if you have one
import "./book.css"; // CSS for grid layout

// Importing book cover images
import img1 from "../../../../Assets/chap1pic.jpeg";
import img2 from "../../../../Assets/chap3.jpeg";
import img3 from "../../../../Assets/chap2.jpeg";
import img4 from "../../../../Assets/cat1.jpg";
import img5 from "../../../../Assets/cat2.jpg";
import img from "../../../../Assets/storyimg.jpeg";

// List of Story Books
const storyBooks = [
  { id: "1", title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", cover: img1 },
  { id: "2", title: "The Hobbit", author: "J.R.R. Tolkien", cover: img2 },
  { id: "3", title: "1984", author: "George Orwell", cover: img3 },
  { id: "4", title: "To Kill a Mockingbird", author: "Harper Lee", cover: img4 },
  { id: "5", title: "The Catcher in the Rye", author: "J.D. Salinger", cover: img5 },
];

function StoryBooks() {
  const [filteredBooks, setFilteredBooks] = useState(storyBooks); // Default to all books
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [selectedBookId, setSelectedBookId] = useState(null);
  const navigate = useNavigate();

  // Function to handle search and filter
  const handleSearch = (searchTerm, filterType) => {
    if (searchTerm.trim() === "") {
      setFilteredBooks(storyBooks); // If no search term, show all books
      return;
    }

    const filtered = storyBooks.filter((book) =>
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
      <Header books={storyBooks} onSearch={handleSearch} category="StoryBooks" onSelectBook={handleSelectBook} />
       
      {/* Main Content */}
      <div className={`main-content ${isSidebarExpanded ? "shrink" : ""}`}>
        {/* Welcome Bar */}
        <div className="welcome-bar">
          <div className="welcome-text">
            <h1>Story Books</h1>
            <p>Explore a wide variety of captivating story books. Find your next adventure here!</p>
          </div>
          <div className="swelcome-image">
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

export default StoryBooks;