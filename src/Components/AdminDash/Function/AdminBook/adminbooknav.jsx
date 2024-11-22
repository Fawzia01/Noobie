import React, { useState, useEffect } from "react";
import { IconButton, TextField, InputAdornment, MenuItem, Select, Avatar } from "@mui/material";
import { Search, Notifications, Settings, Message } from "@mui/icons-material";
import { GiBookCover } from "react-icons/gi";
import "./adminbook.css"; // Ensure your CSS is correct
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



function BookNavBar({ books = [], searchTerm, setSearchTerm, setFilteredBooks }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Handle filtering based on search term and selected category
  useEffect(() => {
    // Make sure books is not empty or undefined
    if (!Array.isArray(books) || books.length === 0) {
      console.error("Books array is undefined or empty");
      return;
    }

    // Filter books based on search term and category
    const filtered = books.filter((book) => {
      const matchesSearch = 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase());
        
      const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    setFilteredBooks(filtered); // Update filtered books
  }, [searchTerm, selectedCategory, books, setFilteredBooks]);

  return (
    <nav className="booknavbar">
      {/* Left Section - Logo Icon */}
      <div className="booknavbar-left">
        <IconButton className="booknavbar-icon">
          <GiBookCover size={40} color="white" />
        </IconButton>
      </div>

      {/* Center Section - Search Bar and Category Filter */}
      <div className="booknavbar-center">
        <TextField
          variant="outlined"
          placeholder="Search Books..."
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          className="booknavbar-search"
          fullWidth
        />

        {/* Category Filter Dropdown */}
        <Select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)} // Update selected category
          className="category-filter"
          variant="outlined"
          size="small"
        >
          <MenuItem value="All">All Categories</MenuItem>
          <MenuItem value="StoryBooks">StoryBooks</MenuItem>
          <MenuItem value="Computer Science and Engineering">Computer Science</MenuItem>
          <MenuItem value="Electrical Engineering">Electrical Engineering</MenuItem>
          <MenuItem value="Mechanical Engineering">Mechanical Engineering</MenuItem>
        </Select>
      </div>

      {/* Right Section - Icons and Avatar */}
      <div className="booknavbar-right">
        <IconButton className="bookicon-button">
          <Message />
        </IconButton>
        <IconButton className="bookicon-button">
          <Notifications />
        </IconButton>
        <IconButton className="bookicon-button">
          <Settings />
        </IconButton>
        <Avatar alt="Profile" src="/path/to/profile-picture.jpg" className="profile-avatar" />
      </div>
    </nav>
  );
}

export default BookNavBar;