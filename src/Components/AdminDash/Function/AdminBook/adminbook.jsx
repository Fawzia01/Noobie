import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "./adminbook.css";
import AdminSidebar from "../../adminheader/AdminSidebar";
import AdminBookNav from "../../Function/AdminBook/adminbooknav";
import dummyImg from "../../../../Assets/dummy.jpeg";
import img from "../../../../Assets/bookcatalogue.jpg";
import img1 from "../../../../Assets/chap1pic.jpeg";
import img2 from "../../../../Assets/chap3.jpeg";
import img3 from "../../../../Assets/chap2.jpeg";
import img4 from "../../../../Assets/cat1.jpg";
import img5 from "../../../../Assets/cat2.jpg";
import img6 from "../../../../Assets/chap4.jpeg";
import img7 from "../../../../Assets/chap5.jpg";
import img8 from "../../../../Assets/chap6.jpeg";
import img9 from "../../../../Assets/cat3.jpg";
import img10 from "../../../../Assets/cat4.jpg";
import img11 from "../../../../Assets/cat5.jpg";
import img12 from "../../../../Assets/chap7.jpg";
import img13 from "../../../../Assets/chap8.jpg";
import img14 from "../../../../Assets/chap9.jpeg";
import img15 from "../../../../Assets/cat6.jpg";
import img16 from "../../../../Assets/chap10.jpg";
import img17 from "../../../../Assets/chap11.jpg";
import img18 from "../../../../Assets/chap12.jpeg";
import img19 from "../../../../Assets/cat7.jpg";
import img20 from "../../../../Assets/cat8.jpg";

// Full list of books
const initialBooks = [
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
  { id: '11', title: 'The C Programming Language', author: 'Brian W. Kernighan', cover: img11, category: 'Computer Science and Engineering', publishedDate: '1978-02-22', availableCopies: 3 },
  { id: '12', title: 'Electrical Engineering: Principles and Applications', author: 'Allan R. Hambley', cover: img12, category: 'Electrical Engineering', publishedDate: '2013-04-01', availableCopies: 6 },
  { id: '13', title: 'Fundamentals of Electric Circuits', author: 'Alexander S. Sadiku', cover: img13, category: 'Electrical Engineering', publishedDate: '2007-08-01', availableCopies: 5 },
  { id: '14', title: 'Modern Control Engineering', author: 'Ogata Katsuhiko', cover: img14, category: 'Electrical Engineering', publishedDate: '2010-07-01', availableCopies: 3 },
  { id: '15', title: 'Electrical Machines', author: 'S.K. Bhattacharya', cover: img15, category: 'Electrical Engineering', publishedDate: '2002-05-01', availableCopies: 2 },
  { id: '16', title: 'Mechanical Engineering Design', author: 'J.E. Shigley', cover: img16, category: 'Mechanical Engineering', publishedDate: '2011-01-01', availableCopies: 4 },
  { id: '17', title: 'Fluid Mechanics', author: 'Frank M. White', cover: img17, category: 'Mechanical Engineering', publishedDate: '2011-01-01', availableCopies: 6 },
  { id: '18', title: 'Engineering Mechanics', author: 'J.L. Meriam', cover: img18, category: 'Mechanical Engineering', publishedDate: '2014-05-01', availableCopies: 5 },
  { id: '19', title: 'Thermodynamics: An Engineering Approach', author: 'Yunus A. Cengel', cover: img19, category: 'Mechanical Engineering', publishedDate: '2007-03-01', availableCopies: 3 },
  { id: '20', title: 'Dynamics of Machinery', author: 'Ansel C. Ugural', cover: img20, category: 'Mechanical Engineering', publishedDate: '2004-10-01', availableCopies: 4 },
];

const AdminBook = () => {
  const [books, setBooks] = useState(initialBooks);  // Initialize directly with books
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(initialBooks);  // Initial filter is all books
  const [searchBy, setSearchBy] = useState("title");
  const [isAddBookDialogOpen, setIsAddBookDialogOpen] = useState(false);
  const [newBook, setNewBook] = useState({ title: "", author: "", category: "", cover: "", available: 0 });
  const [currentBookId, setCurrentBookId] = useState(null);
  const navigate = useNavigate();
  const API_BASE_URL = "http://localhost:8080/api/admin/books";

  useEffect(() => {
    // Fetch books only if they're not already loaded
    if (books.length === 0) {
      axios.get(API_BASE_URL)
        .then((response) => {
          setBooks(response.data);
          setFilteredBooks(response.data);
        })
        .catch((error) => console.error("Error fetching books:", error));
    }
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const searchResults = books.filter((book) =>
        book[searchBy].toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBooks(searchResults);
    } else {
      setFilteredBooks(books);
    }
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setFilteredBooks(books);
  };

  const handleSaveBook = () => {
    if (currentBookId) {
      axios.put(`${API_BASE_URL}/${currentBookId}`, newBook)
        .then((response) => {
          setBooks(books.map((book) => book.id === currentBookId ? response.data : book));
          setFilteredBooks(filteredBooks.map((book) => book.id === currentBookId ? response.data : book));
          closeAddBookDialog();
        })
        .catch((error) => console.error("Error updating book:", error));
    } else {
      axios.post(API_BASE_URL, newBook)
        .then((response) => {
          setBooks([...books, response.data]);
          setFilteredBooks([...filteredBooks, response.data]);
          closeAddBookDialog();
        })
        .catch((error) => console.error("Error adding book:", error));
    }
  };

  const deleteBook = (bookId) => {
    axios.delete(`${API_BASE_URL}/${bookId}`)
      .then(() => {
        setBooks(books.filter((book) => book.id !== bookId));
        setFilteredBooks(filteredBooks.filter((book) => book.id !== bookId));
      })
      .catch((error) => console.error("Error deleting book:", error));
  };

  const openAddBookDialog = (book = null) => {
    setCurrentBookId(book ? book.id : null);
    setNewBook(book || { title: "", author: "", category: "", cover: "", available: 0 });
    setIsAddBookDialogOpen(true);
  };

  const closeAddBookDialog = () => {
    setIsAddBookDialogOpen(false);
    setNewBook({ title: "", author: "", category: "", cover: "", available: 0 });
    setCurrentBookId(null);
  };

  return (
    <div className="admin-book-container">
      <AdminSidebar />
      <AdminBookNav
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
        setFilteredBooks={setFilteredBooks}
        hidepart={true}
      />
      <div className="admain-content">
        <div className="adbook-welcome-bar">
          <div className="adbook-welcome-text">
            <h1>Book Management</h1>
            <p>Manage the book catalog, edit or delete books, and add new books to the system.</p>
          </div>
          <div className="adbook-welcome-image">
            <img src={img} alt="Book Catalogue" />
          </div>
        </div>



        <div className="add-book-button">
          <button onClick={() => openAddBookDialog()}>Add New Book</button>
        </div>

        <table className="admin-book-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Cover</th>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Available</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td><img src={book.cover || dummyImg} alt={book.title} style={{ width: "50px" }} /></td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.category}</td>
                  <td>{book.available}</td>
                  <td>
                    <button onClick={() => openAddBookDialog(book)}>Edit</button>
                    <button onClick={() => deleteBook(book.id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="7">No books found</td></tr>
            )}
          </tbody>
        </table>

        {isAddBookDialogOpen && (
          <div className="add-book-dialog">
            <div className="dialog-content">
              <h2>{currentBookId ? "Edit Book" : "Add New Book"}</h2>
              <input
                type="text"
                placeholder="Title"
                value={newBook.title}
                onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
              />
              <input
                type="text"
                placeholder="Author"
                value={newBook.author}
                onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
              />
              <input
                type="text"
                placeholder="Category"
                value={newBook.category}
                onChange={(e) => setNewBook({ ...newBook, category: e.target.value })}
              />
              <input
                type="text"
                placeholder="Cover URL"
                value={newBook.cover}
                onChange={(e) => setNewBook({ ...newBook, cover: e.target.value })}
              />
              <input
                type="number"
                placeholder="Available"
                value={newBook.available}
                onChange={(e) => setNewBook({ ...newBook, available: e.target.value })}
              />
              <button onClick={handleSaveBook}>{currentBookId ? "Update Book" : "Add Book"}</button>
              <button onClick={closeAddBookDialog}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminBook;
