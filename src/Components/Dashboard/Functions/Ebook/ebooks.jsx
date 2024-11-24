
import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import './ebooks.css';
import TopNavbar from '../Ebook/etopnav';  // Import TopNavbar component
import Sidebar from '../../Sidebar';     // Import Sidebar component
import img1 from '../../../../Assets/chap1pic.jpeg';
import img2 from '../../../../Assets/chap3.jpeg';
import img3 from '../../../../Assets/chap2.jpeg';
import img4 from '../../../../Assets/chap4.jpeg';
import img5 from '../../../../Assets/chap5.jpg';
import img6 from '../../../../Assets/chap6.jpeg';
import img7 from '../../../../Assets/chap7.jpg';
import img8 from '../../../../Assets/chap8.jpg';
import img9 from '../../../../Assets/chap9.jpeg';
import img10 from '../../../../Assets/chap10.jpg';
import img11 from '../../../../Assets/chap11.jpg';
import img12 from '../../../../Assets/chap12.jpeg';
import Header from '../../../Header/header';

const books = [
  // StoryBooks Section
  { id: '1', title: 'Harry Potter and the Philosopher\'s Stone', author: 'J.K. Rowling', pdfUrl: '/pdf/harry_potter.pdf', audiobookUrl: '/audio/harry_potter.mp3', cover: img1, category: 'StoryBooks' },
  { id: '2', title: 'The Hobbit', author: 'J.R.R. Tolkien', pdfUrl: '/pdf/the_hobbit.pdf', audiobookUrl: '/audio/the_hobbit.mp3', cover: img2, category: 'StoryBooks' },
  { id: '3', title: '1984', author: 'George Orwell', pdfUrl: '/pdf/1984.pdf', audiobookUrl: '/audio/1984.mp3', cover: img3, category: 'StoryBooks' },
  
  // Computer Science and Engineering Section
  { id: '4', title: 'Introduction to Algorithms', author: 'Thomas H. Cormen', pdfUrl: '/pdf/intro_to_algorithms.pdf', audiobookUrl: '/audio/intro_to_algorithms.mp3', cover: img4, category: 'Computer Science and Engineering' },
  { id: '5', title: 'Computer Networks', author: 'Andrew S. Tanenbaum', pdfUrl: '/pdf/computer_networks.pdf', audiobookUrl: '/audio/computer_networks.mp3', cover: img5, category: 'Computer Science and Engineering' },
  { id: '6', title: 'Data Structures and Algorithms in Java', author: 'Robert Lafore', pdfUrl: '/pdf/data_structures_java.pdf', audiobookUrl: '/audio/data_structures_java.mp3', cover: img6, category: 'Computer Science and Engineering' },
  
  // Electrical Engineering Section
  { id: '7', title: 'Electrical Engineering: Principles and Applications', author: 'Allan R. Hambley', pdfUrl: '/pdf/electrical_engineering.pdf', audiobookUrl: '/audio/electrical_engineering.mp3', cover: img7, category: 'Electrical Engineering' },
  { id: '8', title: 'Fundamentals of Electric Circuits', author: 'Alexander S. Sadiku', pdfUrl: '/pdf/fundamentals_of_circuits.pdf', audiobookUrl: '/audio/fundamentals_of_circuits.mp3', cover: img8, category: 'Electrical Engineering' },
  { id: '9', title: 'Modern Control Engineering', author: 'Ogata Katsuhiko', pdfUrl: '/pdf/modern_control.pdf', audiobookUrl: '/audio/modern_control.mp3', cover: img9, category: 'Electrical Engineering' },
  
  // Mechanical Engineering Section
  { id: '10', title: 'Mechanical Engineering Design', author: 'J.E. Shigley', pdfUrl: '/pdf/mechanical_design.pdf', audiobookUrl: '/audio/mechanical_design.mp3', cover: img10, category: 'Mechanical Engineering' },
  { id: '11', title: 'Fluid Mechanics', author: 'Frank M. White', pdfUrl: '/pdf/fluid_mechanics.pdf', audiobookUrl: '/audio/fluid_mechanics.mp3', cover: img11, category: 'Mechanical Engineering' },
  { id: '12', title: 'Engineering Mechanics', author: 'J.L. Meriam', pdfUrl: '/pdf/engineering_mechanics.pdf', audiobookUrl: '/audio/engineering_mechanics.mp3', cover: img12, category: 'Mechanical Engineering' },
];

export default function EbookPage() {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = books.filter(book => 
      book.title.toLowerCase().includes(query.toLowerCase()) || 
      book.author.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  const handleBookClick = (book) => {
    navigate('/audio', { state: { book } }); // Navigate to audiobook page with selected book
  };

  const groupedBooks = {
    'StoryBooks': [],
    'Computer Science and Engineering': [],
    'Electrical Engineering': [],
    'Mechanical Engineering': [],
  };

  // Group books by category
  filteredBooks.forEach(book => {
    groupedBooks[book.category].push(book);
  });

  return (
    <div className="ebook-page-container">
      {/* Top Navbar */}
      <Header />
      <div className="ebanner">
        <div className="ebanner-content">
          <div>
            <h2>E-Resource And Audiobook</h2>
            <p>Enjoy exploring a vast collection of eResource, where stories come to life through engaging audio.</p>
          </div>
          <div className="ebanner-image"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {Object.keys(groupedBooks).map((category) => (
          <div className="book-section" key={category}>
            <h3>{category}</h3>
            <table className="ebook-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Cover</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>PDF</th>
                  <th>Audiobook</th>
                </tr>
              </thead>
              <tbody>
                {groupedBooks[category].map((book) => (
                  <tr key={book.id}>
                    <td>{book.id}</td>
                    <td><img src={book.cover} alt={book.title} className="book-cover" /></td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>
                      <a href={book.pdfUrl} target="_blank" rel="noopener noreferrer">Download</a>
                    </td>
                    <td>
                      <button onClick={() => handleBookClick(book)}>Play</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}