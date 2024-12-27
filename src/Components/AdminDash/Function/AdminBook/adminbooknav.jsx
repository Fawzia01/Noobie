import React, { useState, useEffect } from "react";
import { IconButton, TextField, InputAdornment, MenuItem, Select, Avatar } from "@mui/material";
import { Search, Notifications, Settings, Logout } from "@mui/icons-material";
import { GiBookCover } from "react-icons/gi";
import "./adminbook.css"; // Ensure your CSS is correct
import  dummyimg  from  '../../../../Assets/dummy.jpeg';
import Profile from "../../../Profile/profile";
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
import './adminbook.css';
import dummyImg from  '../../../../Assets/dummy.jpeg';
import { Link, useNavigate } from "react-router-dom"; // For navigation
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

const BookNavBar =({
  books = initialBooks,
  searchTerm,
  setSearchTerm,
  onSearch, // Assuming onSearch is passed from the parent to handle book filtering
  onSelectBook,hidepart
}) => {
  const [filterType, setFilterType] = useState("title"); // Default filter is 'title'
  const [filterVisible, setFilterVisible] = useState(false);
  const [suggestedBooks, setSuggestedBooks] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false); 

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value); // Update the search term

    // If search term is empty, clear suggestions and reset filter
    if (value.trim() === "") {
      setSuggestedBooks([]); // Clear suggestions if the search term is empty
      onSearch(value, filterType); // Reset filter
      return;
    }

    // Filter suggestions based on search term and filter type
    const filteredSuggestions = books.filter((book) =>
      book[filterType].toLowerCase().includes(value.toLowerCase())
    );
    setSuggestedBooks(filteredSuggestions); // Set the filtered suggestions

    // Trigger the parent function to update filtered books
    onSearch(value, filterType);
  };

  // Handle filter change
  const handleFilterChange = (type) => {
    setFilterType(type);
    onSearch(searchTerm, type); // Update filter and trigger search
  };

  // Handle book click to select
  const handleBookClick = (book) => {
    if (book && book.id) {
      onSelectBook(book.id); // Notify parent that a book is selected
    }
  };

  // Toggle filter visibility
  const toggleFilter = () => setFilterVisible(!filterVisible);

  useEffect(() => {
    // Whenever searchTerm or filterType changes, update filtered books in parent via onSearch
    onSearch(searchTerm, filterType);
  }, [searchTerm, filterType, onSearch]);
  
    const navigate = useNavigate();
  
    const handleLogout = () => {
      // Clear any user-related data (e.g., tokens)
      localStorage.removeItem("authToken"); // Example: Remove the authentication token
      localStorage.removeItem("userInfo"); // Example: Remove user info (if applicable)
  
      // Redirect to login or home page
      navigate("/login"); // Adjust the path as per your app's routing
  
      // Optionally, display a success message (use a toast library or alert)
      alert("You have been logged out.");
    };
    // Handle Profile click
  const handleProfileClick = () => {
    console.log('Profile clicked!'); // Debug to ensure this runs
    setModalOpen(true);
  };

  // Close Profile Modal
  const closeModal = () => setModalOpen(false); 

  return (
    <nav className="booknavbar">
      {/* Left Section - Logo Icon */}
      <div className="booknavbar-left">
        <IconButton className="booknavbar-icon">
          <GiBookCover size={40} color="white" />
        </IconButton>
      </div>

      <div className="booknavbar-center">
  <TextField
    variant="outlined"
    size="small"
    className="admin-search-bar"
    placeholder={`Search by ${filterType.charAt(0).toUpperCase() + filterType.slice(1)}...`} // Dynamic placeholder
    value={searchTerm} // Binds the search term state
    onChange={handleSearchChange} // Updates state on input change
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <i className="fas fa-search" /> {/* Optionally add a search icon */}
        </InputAdornment>
      ),
    }}
  />
{hidepart && (<>
        {/* Filter Button */}
        <button className="adfilter-button" onClick={toggleFilter}>
          <i className="fas fa-filter"></i> Filter
        </button>

        {/* Filter Dropdown */}
        {filterVisible && (
          <div className="adfilter-dropdown">
            <div className="filter-option" onClick={() => handleFilterChange("title")}>Title</div>
            <div className="filter-option" onClick={() => handleFilterChange("author")}>Author</div>
          </div>
        )}
    
      </>)}
      </div>


      {/* Suggested Books */}
{searchTerm && suggestedBooks.length > 0 && (
  <div className="adsuggestions">
    <h3>Suggested Books:</h3>
    <ul>
      {suggestedBooks.map((book) => (
        <li
          key={book.id} // Unique key for each item
          onClick={() => handleBookClick(book)}
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          <img
            src={book.cover || dummyImg} // Use dummyImg if no cover provided
            alt={book.title}
            style={{
              width: "50px",
              height: "auto",
              marginRight: "10px",
              borderRadius: "4px",
            }}
          />
          <span>{book.title} by {book.author}</span>
        </li>
      ))}
    </ul>
  </div>
)}


      {/* Right Section - Icons and Avatar */}
      <div className="booknavbar-right">
        <IconButton className="icon-button" onClick={handleLogout}>
          <Logout/>
        </IconButton>
        <IconButton className="icon-button">
          <Notifications />
        </IconButton>
        <IconButton className="icon-button">
          <Settings />
        </IconButton>
        <div className="profile" onClick={handleProfileClick}>
            <img src={dummyImg} alt="Profile" className="profile-pic" />
            <span className="adusername">
      <span className="username-first">John</span>
      <br />
      <span className="username-last">Anderson</span>
    </span>
          </div>
      </div>
      <Profile
        isOpen={isModalOpen}
        onClose={closeModal}
        hidenpart={false}
        student={{
          profilePicture: dummyImg,
          name: "John Anderson",
          email: "johndoe@mail.com",
          address: "123, Main Street, Cityname",
          interest: "Machine Learning, Robotics",
        }}
      />

    </nav>
  );
};

export default BookNavBar;