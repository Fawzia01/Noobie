import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import './ebooks.css';
import Header from '../../../Header/header';
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
import img from "../../../../Assets/audiobook.jpg";



const books = [
  // StoryBooks Section (5 Books)
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
  },
];


export default function EbookPage() {
  const navigate = useNavigate();
   // Navigate to book details page
   const goToDetails = (book) => {
    navigate(`/audio`);
  };
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [selectedBookId, setSelectedBookId] = useState(null);


  const handleSearch = (searchTerm, filterType) => {
    if (searchTerm.trim() === "") {
      setFilteredBooks(books); // If no search term, show all books
      return;
    }

    const filtered = books.filter((book) =>
      book[filterType].toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered); // Update filtered books based on search term
  };

  const handleSelectBook = (bookId) => {
    setSelectedBookId(bookId); // Update the selected book ID
  };
   // Group books by category
   const groupedBooks = filteredBooks.reduce((acc, book) => {
    if (!acc[book.category]) acc[book.category] = [];
    acc[book.category].push(book);
    return acc;
  }, {});
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  return (
    <div className="ebook-page-container">
        <Header books={books} onSearch={handleSearch}  onSelectBook={handleSelectBook} />
            {/* Main Content */}
      <div className={`main-content ${isSidebarExpanded ? "shrink" : ""}`}>
        {/* Welcome Bar */}
        <div className="welcome-bar">
          <div className="welcome-text">
            <h2>E-Resource And Audiobook</h2>
            <p>Explore a vast collection of eResources and audiobooks that bring stories to life.</p>
          </div>
          <div className="welcome-image">
            <img src={img} alt="Book Catalogue" />
          </div>
        </div>
        

        {Object.keys(groupedBooks).map((category) => (
          <div className="ebook-section" key={category}>
            <h3>{category}</h3>
            <div className="ebook-grid">
              {groupedBooks[category].map((book) => (
                <div key={book.id} className="ebook-card">
                  <img src={book.cover} alt={book.title} className="ebook-cover" />
                  <h4>{book.title}</h4>
                  <p>{book.author}</p>
                  <div className="ebook-actions">
                    <a href={book.pdfUrl} target="_blank" className="download-button">Download PDF</a>
                    <div className="audio">
                      <button className="play-button" onClick={() => goToDetails(book)}>Play Audio</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
