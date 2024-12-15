import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminSidebar from "../../adminheader/AdminSidebar";
import BookNavBar from "../../../AdminDash/Function/AdminBook/adminbooknav";
import dummyImg from "../../../../Assets/dummy.jpeg";
import img from "../../../../Assets/audiobook.jpg";
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
    {
        id: '1',
        title: 'Harry Potter and the Philosopher\'s Stone',
        author: 'J.K. Rowling',
        cover: img1,
        category: 'StoryBooks',
        pdfUrl: 'https://drive.google.com/file/d/0B0tutiHDbaxROVJFNk1sUXQ4Tlk/view?usp=sharing&resourcekey=0-wPpyvKtsPNcKol2HIxX1kQ',
        audiobookUrl: '/audio/harry_potter.mp3',
      },
      {
        id: '2',
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        cover: img2,
        category: 'StoryBooks',
        pdfUrl: '/pdf/the_hobbit.pdf',
        audiobookUrl: '/audio/the_hobbit.mp3',
      },
      {
        id: '3',
        title: '1984',
        author: 'George Orwell',
        cover: img3,
        category: 'StoryBooks',
        pdfUrl: '/pdf/1984.pdf',
        audiobookUrl: '/audio/1984.mp3',
      },
      {
        id: '4',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        cover: img4,
        category: 'StoryBooks',
        pdfUrl: '/pdf/to_kill_a_mockingbird.pdf',
        audiobookUrl: '/audio/to_kill_a_mockingbird.mp3',
      },
      {
        id: '5',
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        cover: img5,
        category: 'StoryBooks',
        pdfUrl: '/pdf/the_catcher_in_the_rye.pdf',
        audiobookUrl: '/audio/the_catcher_in_the_rye.mp3',
      },
      // Computer Science and Engineering Section (6 Books)
      {
        id: '6',
        title: 'Introduction to Algorithms',
        author: 'Thomas H. Cormen',
        cover: img6,
        category: 'Computer Science and Engineering',
        pdfUrl: '/pdf/intro_to_algorithm.pdf',
        audiobookUrl: '/audio/intro_to_algorithms.mp3',
      },
      {
        id: '7',
        title: 'Computer Networks',
        author: 'Andrew S. Tanenbaum',
        cover: img7,
        category: 'Computer Science and Engineering',
        pdfUrl: '/pdf/computer_networks.pdf',
        audiobookUrl: '/audio/computer_networks.mp3',
      },
      {
        id: '8',
        title: 'Data Structures and Algorithms in Java',
        author: 'Robert Lafore',
        cover: img8,
        category: 'Computer Science and Engineering',
        pdfUrl: '/pdf/data_structures_java.pdf',
        audiobookUrl: '/audio/data_structures_java.mp3',
      },
      {
        id: '9',
        title: 'Operating System Concepts',
        author: 'Abraham Silberschatz',
        cover: img9,
        category: 'Computer Science and Engineering',
        pdfUrl: '/pdf/operating_system_concepts.pdf',
        audiobookUrl: '/audio/operating_system_concepts.mp3',
      },
      {
        id: '10',
        title: 'Artificial Intelligence: A Modern Approach',
        author: 'Stuart Russell',
        cover: img10,
        category: 'Computer Science and Engineering',
        pdfUrl: '/pdf/artificial_intelligence.pdf',
        audiobookUrl: '/audio/artificial_intelligence.mp3',
      },
      {
        id: '11',
        title: 'The C Programming Language',
        author: 'Brian W. Kernighan & Dennis M. Ritchie',
        cover: img11,
        category: 'Computer Science and Engineering',
        pdfUrl: '/pdf/c_programming.pdf',
        audiobookUrl: '/audio/c_programming.mp3',
      },
      // Electrical Engineering Section (4 Books)
      {
        id: '12',
        title: 'Electrical Engineering: Principles and Applications',
        author: 'Allan R. Hambley',
        cover: img12,
        category: 'Electrical Engineering',
        pdfUrl: '/pdf/electrical_engineering.pdf',
        audiobookUrl: '/audio/electrical_engineering.mp3',
      },
      {
        id: '13',
        title: 'Fundamentals of Electric Circuits',
        author: 'Alexander S. Sadiku',
        cover: img13,
        category: 'Electrical Engineering',
        pdfUrl: '/pdf/fundamentals_of_circuits.pdf',
        audiobookUrl: '/audio/fundamentals_of_circuits.mp3',
      },
      {
        id: '14',
        title: 'Modern Control Engineering',
        author: 'Ogata Katsuhiko',
        cover: img14,
        category: 'Electrical Engineering',
        pdfUrl: '/pdf/modern_control.pdf',
        audiobookUrl: '/audio/modern_control.mp3',
      },
      {
        id: '15',
        title: 'Electrical Machines',
        author: 'S.K. Bhattacharya',
        cover: img15,
        category: 'Electrical Engineering',
        pdfUrl: '/pdf/electrical_machines.pdf',
        audiobookUrl: '/audio/electrical_machines.mp3',
      },
      // Mechanical Engineering Section (5 Books)
      {
        id: '16',
        title: 'Mechanical Engineering Design',
        author: 'J.E. Shigley',
        cover: img16,
        category: 'Mechanical Engineering',
        pdfUrl: '/pdf/mechanical_design.pdf',
        audiobookUrl: '/audio/mechanical_design.mp3',
      },
      {
        id: '17',
        title: 'Fluid Mechanics',
        author: 'Frank M. White',
        cover: img17,
        category: 'Mechanical Engineering',
        pdfUrl: '/pdf/fluid_mechanics.pdf',
        audiobookUrl: '/audio/fluid_mechanics.mp3',
      },
      {
        id: '18',
        title: 'Engineering Mechanics',
        author: 'J.L. Meriam',
        cover: img18,
        category: 'Mechanical Engineering',
        pdfUrl: '/pdf/engineering_mechanics.pdf',
        audiobookUrl: '/audio/engineering_mechanics.mp3',
      },
      {
        id: '19',
        title: 'Thermodynamics: An Engineering Approach',
        author: 'Yunus A. Cengel',
        cover: img19,
        category: 'Mechanical Engineering',
        pdfUrl: '/pdf/thermodynamics.pdf',
        audiobookUrl: '/audio/thermodynamics.mp3',
      },
      {
        id: '20',
        title: 'Dynamics of Machinery',
        author: 'Ansel C. Ugural',
        cover: img20,
        category: 'Mechanical Engineering',
        pdfUrl: '/pdf/dynamics_of_machinery.pdf',
        audiobookUrl: '/audio/dynamics_of_machinery.mp3',
      }
];
const AdminEBook = () => {
  const [books, setBooks] = useState(initialBooks); // Initially empty array
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isAddBookDialogOpen, setIsAddBookDialogOpen] = useState(false);
  const [filteredBooks, setFilteredBooks] = useState([]);

  const [newBook, setNewBook] = useState({
    title: "",
    cover: "",
    pdfUrl: "",
    audiobookUrl: "",
  });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true); // To handle loading state
  const navigate = useNavigate();

  const API_BASE_URL = "http://localhost:8080/api/admin/books";

  // Fetch all books from the API
  useEffect(() => {
    fetch(API_BASE_URL)
      .then((res) => res.json())
      .then((data) => setBooks((prevBooks) => [...prevBooks, ...data]))
      .catch((err) => {
        console.error("Error fetching books:", err);
        setIsLoading(false); // Stop loading even if there's an error
      });
  }, []);

  // Update suggestions based on search term and selected category
  useEffect(() => {
    const filteredBooks =
      selectedCategory === "All"
        ? books
        : books.filter(
            (book) =>
              book.category.toLowerCase() === selectedCategory.toLowerCase()
          );
    const filteredSuggestions = searchTerm.trim()
      ? filteredBooks.filter((book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : filteredBooks;
    setSuggestions(filteredSuggestions);
  }, [searchTerm, selectedCategory, books]);

  // Add a new book
  const addBook = () => {
    const newBookWithId = { id: (books.length + 1).toString(), ...newBook };
    setBooks([...books, newBookWithId]);

    fetch(API_BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((data) => {
        setBooks((prevBooks) =>
          prevBooks.map((book) =>
            book.id === newBookWithId.id ? data : book
          )
        );
      })
      .catch((err) => console.error("Error adding book:", err))
      .finally(() => closeAddBookDialog());
  };
  const deleteBook = (id) => {
    console.log("Deleting book with ID:", id);  // Check if deleteBook is called
    
    // Send delete request to the backend
    fetch('${API_BASE_URL}/${id}', { method: "DELETE" })
      .then((res) => {
        console.log("Delete response status:", res.status);  // Check response status
  
        if (res.ok) {
          console.log("Book deleted successfully");
          // Remove the book from the state to reflect changes on the frontend
          setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
        } else {
          console.error("Failed to delete book. Status code:", res.status);
        }
      })
      .catch((err) => {
        console.error("Error deleting book:", err);
      });
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  // Open and close the add book dialog
  const openAddBookDialog = () => setIsAddBookDialogOpen(true);
  const closeAddBookDialog = () => {
    setIsAddBookDialogOpen(false);
    setNewBook({
      title: "",
      cover: "",
      pdfUrl: "",
      audiobookUrl: "",
    });
  };

  
  const goToAudio = (audiobookUrl) => {
    navigate("/audio", { state: { audiobookUrl } });
  };
  const [selectedBookId, setSelectedBookId] = useState(null);
  const handleSearch = (searchTerm, filterType) => {
    if (searchTerm.trim() === "") {
      setFilteredBooks(initialBooks); // If no search term, show all books
      return;
    }

    const filtered = initialBooks.filter((book) =>
      book[filterType].toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered); // Update filtered books based on search term
  };

  const handleSelectBook = (bookId) => {
    setSelectedBookId(bookId); // Update the selected book ID
  };


  return (
    <div className="admin-book-container">
      <AdminSidebar />
      <BookNavBar
        books={books}
        onSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSelectBook={handleSelectBook}
        hidepart={false}
      />

      <div className="admain-content">
    
          <>
            <div className="adbook-welcome-bar">
              <div className="adbook-welcome-text">
                <h1>E-Resource and AudioBook</h1>
                <p>
                  Manage content and users to ensure a seamless eResource and
                  audiobook experience.
                </p>
              </div>
              <div className="adbook-welcome-image">
                <img src={img} alt="Book Catalogue" />
              </div>
            </div>
            <div className="add-book-button">
              <button onClick={openAddBookDialog}>Add New Book</button>
            </div>
            <table border="1" className="admin-book-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Cover</th>
                  <th>Title</th>               
                  <th>PDF</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBooks.length > 0 ? (
                  filteredBooks.map((book) => (
                    <tr key={book.id}>
                      <td>{book.id}</td>
                      <td>
                        <img
                          src={book.cover || "path_to_dummy_img"}
                          alt={book.title}
                          style={{ width: "50px", height: "auto" }}
                        />
                      </td>
                      <td>{book.title}</td>
                      
                      <td>
                        <a
                          href={book.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="download-button"
                        >
                          See PDF
                        </a>
                      </td>
                      <td>
                        <button
                          onClick={() => goToAudio(book.audiobookUrl)}
                          className="audio-button"
                        >
                          Audio
                        </button>
                        <button
                          onClick={() => deleteBook(book.id)}
                          className="delete-button"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7">No books found</td>
                  </tr>
                )}
              </tbody>
            </table>
          

            {isAddBookDialogOpen && (
              <div className="add-book-dialog">
                <div className="dialog-content">
                  <h2>Add New Book</h2>
                  <label>
                    Book Cover (URL):
                    <input
                      type="text"
                      name="cover"
                      value={newBook.cover}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    Title:
                    <input
                      type="text"
                      name="title"
                      value={newBook.title}
                      onChange={handleInputChange}
                    />
                  </label>
                  
                  <label>
                    PDF URL:
                    <input
                      type="text"
                      name="pdfUrl"
                      value={newBook.pdfUrl}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    Audiobook URL:
                    <input
                      type="text"
                      name="audiobookUrl"
                      value={newBook.audiobookUrl}
                      onChange={handleInputChange}
                    />
                  </label>
                  <button onClick={addBook}>Add</button>
                  <button onClick={closeAddBookDialog}>Cancel</button>
                </div>
              </div>
            )}
          </>
        
      </div>
    </div>
  );
};

export default AdminEBook;

