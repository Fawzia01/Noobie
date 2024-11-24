import React, { useState, useEffect } from "react"; // Include useEffect here
import { Link, useNavigate } from "react-router-dom";
import Header from "../../../Header/header"; // Import Header component
import "./adminbook.css"; // CSS for the component
import dummyImg from "../../../../Assets/dummy.jpeg";
import img from "../../../../Assets/bookcatalogue.jpg";
import AdminSidebar from "../../adminheader/AdminSidebar";
import AdminBookNav from "../../Function/AdminBook/adminbooknav";

// Importing book cover images
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
   // StoryBooks Section (5 Books)
   { id: '1', title: 'Harry Potter and the Philosopher\'s Stone', author: 'J.K. Rowling', cover: img1, category: 'StoryBooks', publishedDate: '1997-06-26', availableCopies: 5 },
   { id: '2', title: 'The Hobbit', author: 'J.R.R. Tolkien', cover: img2, category: 'StoryBooks', publishedDate: '1937-09-21', availableCopies: 3 },
   { id: '3', title: '1984', author: 'George Orwell', cover: img3, category: 'StoryBooks', publishedDate: '1949-06-08', availableCopies: 7 },
   { id: '4', title: 'To Kill a Mockingbird', author: 'Harper Lee', cover: img4, category: 'StoryBooks', publishedDate: '1960-07-11', availableCopies: 6 },
   { id: '5', title: 'The Catcher in the Rye', author: 'J.D. Salinger', cover: img5, category: 'StoryBooks', publishedDate: '1951-07-16', availableCopies: 4 },
   
   // Computer Science and Engineering Section (6 Books)
   { id: '6', title: 'Introduction to Algorithms', author: 'Thomas H. Cormen', cover: img6, category: 'Computer Science and Engineering', publishedDate: '1990-07-01', availableCopies: 8 },
   { id: '7', title: 'Computer Networks', author: 'Andrew S. Tanenbaum', cover: img7, category: 'Computer Science and Engineering', publishedDate: '1981-01-01', availableCopies: 4 },
   { id: '8', title: 'Data Structures and Algorithms in Java', author: 'Robert Lafore', cover: img8, category: 'Computer Science and Engineering', publishedDate: '2002-09-01', availableCopies: 2 },
   { id: '9', title: 'Operating System Concepts', author: 'Abraham Silberschatz', cover: img9, category: 'Computer Science and Engineering', publishedDate: '2005-07-01', availableCopies: 10 },
   { id: '10', title: 'Artificial Intelligence: A Modern Approach', author: 'Stuart Russell', cover: img10, category: 'Computer Science and Engineering', publishedDate: '1995-12-15', availableCopies: 5 },
   { id: '11', title: 'The C Programming Language', author: 'Brian W. Kernighan', cover: img11, category: 'Computer Science and Engineering', publishedDate: '1978-02-22', availableCopies: 3 },
 
   // Electrical Engineering Section (4 Books)
   { id: '12', title: 'Electrical Engineering: Principles and Applications', author: 'Allan R. Hambley', cover: img12, category: 'Electrical Engineering', publishedDate: '2013-04-01', availableCopies: 6 },
   { id: '13', title: 'Fundamentals of Electric Circuits', author: 'Alexander S. Sadiku', cover: img13, category: 'Electrical Engineering', publishedDate: '2007-08-01', availableCopies: 5 },
   { id: '14', title: 'Modern Control Engineering', author: 'Ogata Katsuhiko', cover: img14, category: 'Electrical Engineering', publishedDate: '2010-07-01', availableCopies: 3 },
   { id: '15', title: 'Electrical Machines', author: 'S.K. Bhattacharya', cover: img15, category: 'Electrical Engineering', publishedDate: '2002-05-01', availableCopies: 2 },
 
   // Mechanical Engineering Section (5 Books)
   { id: '16', title: 'Mechanical Engineering Design', author: 'J.E. Shigley', cover: img16, category: 'Mechanical Engineering', publishedDate: '2011-01-01', availableCopies: 4 },
   { id: '17', title: 'Fluid Mechanics', author: 'Frank M. White', cover: img17, category: 'Mechanical Engineering', publishedDate: '2011-01-01', availableCopies: 6 },
   { id: '18', title: 'Engineering Mechanics', author: 'J.L. Meriam', cover: img18, category: 'Mechanical Engineering', publishedDate: '2014-05-01', availableCopies: 5 },
   { id: '19', title: 'Thermodynamics: An Engineering Approach', author: 'Yunus A. Cengel', cover: img19, category: 'Mechanical Engineering', publishedDate: '2007-03-01', availableCopies: 3 },
   { id: '20', title: 'Dynamics of Machinery', author: 'Ansel C. Ugural', cover: img20, category: 'Mechanical Engineering', publishedDate: '2004-10-01', availableCopies: 4 },
];


function AdminBook() {
  const [books, setBooks] = useState(initialBooks);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  const [isAddBookDialogOpen, setIsAddBookDialogOpen] = useState(false);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    cover: dummyImg,
    category: "",
    publishedDate: "",
    availableCopies: 0,
  });

  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

// Update suggestions based on both search term and selected category
useEffect(() => {
  const filteredByCategory = selectedCategory === "All"
    ? books
    : books.filter((book) => book.category.toLowerCase() === selectedCategory.toLowerCase());

  const filteredSuggestions = searchTerm.trim()
    ? filteredByCategory.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
    : filteredByCategory;

  setSuggestions(filteredSuggestions);
}, [searchTerm, selectedCategory, books]);
  
  const openAddBookDialog = () => setIsAddBookDialogOpen(true);

  const closeAddBookDialog = () => {
    setIsAddBookDialogOpen(false);
    setNewBook({
      title: "",
      author: "",
      cover: dummyImg,
      category: "",
      publishedDate: "",
      availableCopies: 0,
    });
  };

  const addBook = () => {
    setBooks([...books, { id: (books.length + 1).toString(), ...newBook }]);
    closeAddBookDialog();
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const goToDetails = (id) => navigate(`/bookdetail/${id}`);

  return (
    <div className="admin-book-container">
      <AdminSidebar />
      <AdminBookNav
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Search Suggestions */}
      {searchTerm && suggestions.length > 0 && (
        <div className="search-suggestions-box">
          {suggestions.map((book) => (
            <div
              key={book.id}
              className="search-suggestion"
              onClick={() => goToDetails(book.id)}
            >
              <img
                src={book.cover}
                alt={book.title}
                style={{ width: "50px", height: "auto", marginRight: "10px" }}
              />
              <span>{book.title}</span>
            </div>
          ))}
        </div>
      )}

      <div className={`admain-content ${isSidebarExpanded ? "shrink" : ""}`}>
        <div className="adbook-welcome-bar">
          <div className="adbook-welcome-text">
            <h1>Book Management</h1>
            <p>Manage the book catalog, edit or delete books, and add new books to the system.</p>
          </div>
          <div className="adbook-welcome-image">
            <img src={img} alt="Book Catalogue" />
          </div>
        </div>

        {/* Add Book Button */}
        <div className="add-book-button">
          <button onClick={openAddBookDialog}>Add New Book</button>
        </div>

        {/* Book Table */}
        <table border="1" className="admin-book-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Cover</th>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Published</th>
              <th>Available</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {books
            .filter((book) => selectedCategory === "All" || book.category === selectedCategory)
            .map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td><img src={book.cover} alt={book.title} style={{ width: "80px" }} /></td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.category}</td>
                <td>{book.publishedDate}</td>
                <td>{book.availableCopies}</td>
                <td>
                  <button onClick={() => goToDetails(book.id)}>View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Book Dialog */}
      {isAddBookDialogOpen && (
        <div className="add-book-dialog">
          <div className="dialog-content">
            <h2>Add New Book</h2>
            {/* Add Book Fields */}
            <button onClick={addBook}>Add Book</button>
            <button onClick={closeAddBookDialog}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminBook;