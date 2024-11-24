import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
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

const initialBooks = [
  // StoryBooks Section
  {
    id: '1',
    title: 'Harry Potter and the Philosopher\'s Stone',
    author: 'J.K. Rowling',
    cover: img1,
    category: 'StoryBooks',
    publishedDate: '1997-06-26',
    availableCopies: 5,
    description: 'Join Harry Potter, a young wizard, as he embarks on his first year at Hogwarts School of Witchcraft and Wizardry. This magical tale introduces the wizarding world filled with spells, potions, and the battle against the dark wizard Voldemort. It’s a story about friendship, bravery, and self-discovery.',
  },
  {
    id: '2',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    cover: img2,
    category: 'StoryBooks',
    publishedDate: '1937-09-21',
    availableCopies: 3,
    description: 'A prelude to *The Lord of the Rings*, *The Hobbit* follows Bilbo Baggins, a reluctant hero, on a journey to help dwarves reclaim their home from the dragon Smaug. Full of adventure, riddles, and courage, this book is a timeless classic.',
  },
  {
    id: '3',
    title: '1984',
    author: 'George Orwell',
    cover: img3,
    category: 'StoryBooks',
    publishedDate: '1949-06-08',
    availableCopies: 7,
    description: '*1984* is a dystopian masterpiece that delves into a totalitarian society controlled by surveillance, propaganda, and fear. The protagonist, Winston Smith, fights to maintain his individuality in a world dominated by the Party and its leader, Big Brother.',
  },
  {
    id: '4',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    cover: img4,
    category: 'StoryBooks',
    publishedDate: '1960-07-11',
    availableCopies: 6,
    description: 'A powerful story set in the racially segregated American South, *To Kill a Mockingbird* is told through the eyes of Scout Finch. It’s a tale of justice, morality, and human empathy as Scout’s father, Atticus Finch, defends a black man falsely accused of a crime.',
  },
  {
    id: '5',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    cover: img5,
    category: 'StoryBooks',
    publishedDate: '1951-07-16',
    availableCopies: 4,
    description: '*The Catcher in the Rye* is a coming-of-age story about Holden Caulfield, a teenager who navigates loneliness, rebellion, and identity in a complex adult world. This timeless classic explores themes of alienation and self-discovery.',
  },
  // Computer Science and Engineering
  {
    id: '6',
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
    cover: img6,
    category: 'Computer Science and Engineering',
    publishedDate: '1990-07-01',
    availableCopies: 8,
    description: 'A comprehensive textbook on algorithms, this book covers everything from basic principles to advanced concepts. It’s ideal for computer science students and professionals alike, providing clear explanations and practical examples.',
  },
  {
    id: '7',
    title: 'Computer Networks',
    author: 'Andrew S. Tanenbaum',
    cover: img7,
    category: 'Computer Science and Engineering',
    publishedDate: '1981-01-01',
    availableCopies: 4,
    description: '*Computer Networks* offers an in-depth exploration of networking technologies, protocols, and applications. From data transmission to security, this book provides a thorough understanding of how modern networks function.',
  },
  {
    id: '8',
    title: 'Data Structures and Algorithms in Java',
    author: 'Robert Lafore',
    cover: img8,
    category: 'Computer Science and Engineering',
    publishedDate: '2002-09-01',
    availableCopies: 2,
    description: 'Designed for beginners, this book introduces essential data structures and algorithms in Java. It offers hands-on coding examples and clear explanations, making complex topics easy to understand.',
  },
  {
    id: '9',
    title: 'Operating System Concepts',
    author: 'Abraham Silberschatz',
    cover: img9,
    category: 'Computer Science and Engineering',
    publishedDate: '2005-07-01',
    availableCopies: 10,
    description: '*Operating System Concepts* is a cornerstone text that explains the principles behind operating systems. It covers topics like process management, memory management, and file systems in a detailed yet approachable manner.',
  },
  {
    id: '10',
    title: 'Artificial Intelligence: A Modern Approach',
    author: 'Stuart Russell',
    cover: img10,
    category: 'Computer Science and Engineering',
    publishedDate: '1995-12-15',
    availableCopies: 5,
    description: 'This book provides a broad introduction to artificial intelligence, from machine learning to robotics. It’s the definitive guide for anyone looking to understand the concepts and technologies shaping the future.',
  },
  // Electrical Engineering
  {
    id: '11',
    title: 'Electrical Engineering: Principles and Applications',
    author: 'Allan R. Hambley',
    cover: img11,
    category: 'Electrical Engineering',
    publishedDate: '2013-04-01',
    availableCopies: 6,
    description: 'This book introduces electrical engineering concepts through practical applications and problem-solving. It’s a must-have for students and engineers aiming to understand the fundamentals of circuits, electronics, and power systems.',
  },
  {
    id: '12',
    title: 'Electrical Engineering: Principles and Applications',
    author: 'Allan R. Hambley',
    cover: img12,
    category: 'Electrical Engineering',
    publishedDate: '2013-04-01',
    availableCopies: 6,
    description: 'This book introduces core concepts in electrical engineering with a focus on practical applications. It covers essential topics like circuit analysis, signal processing, and power systems, making it a comprehensive guide for students and professionals alike.',
  },
  {
    id: '13',
    title: 'Fundamentals of Electric Circuits',
    author: 'Alexander S. Sadiku',
    cover: img13,
    category: 'Electrical Engineering',
    publishedDate: '2007-08-01',
    availableCopies: 5,
    description: 'A go-to reference for mastering electric circuits, this book covers circuit theories, techniques, and analysis methods. Its detailed explanations and problem-solving approach make it invaluable for both academic and professional use.',
  },
  {
    id: '14',
    title: 'Modern Control Engineering',
    author: 'Ogata Katsuhiko',
    cover: img14,
    category: 'Electrical Engineering',
    publishedDate: '2010-07-01',
    availableCopies: 3,
    description: 'Focused on control system design, this book bridges theory and practice with clear examples. It provides comprehensive coverage of state-space analysis, stability, and frequency response techniques for engineers.',
  },
  {
    id: '15',
    title: 'Electrical Machines',
    author: 'S.K. Bhattacharya',
    cover: img15,
    category: 'Electrical Engineering',
    publishedDate: '2002-05-01',
    availableCopies: 2,
    description: 'An essential guide to understanding the principles and operations of electrical machines, including transformers, motors, and generators. It’s a practical resource for students and engineers working in the power sector.',
  },
  {
    id: '16',
    title: 'Mechanical Engineering Design',
    author: 'J.E. Shigley',
    cover: img16,
    category: 'Mechanical Engineering',
    publishedDate: '2011-01-01',
    availableCopies: 4,
    description: 'This book provides a thorough understanding of the design process in mechanical engineering. Covering materials, stress analysis, and design principles, it’s an indispensable resource for aspiring mechanical engineers.',
  },
  {
    id: '17',
    title: 'Fluid Mechanics',
    author: 'Frank M. White',
    cover: img17,
    category: 'Mechanical Engineering',
    publishedDate: '2011-01-01',
    availableCopies: 6,
    description: 'A comprehensive guide to the principles and applications of fluid mechanics, this book covers topics like fluid dynamics, flow analysis, and engineering solutions. It’s ideal for students and professionals in mechanical engineering.',
  },
  {
    id: '18',
    title: 'Engineering Mechanics',
    author: 'J.L. Meriam',
    cover: img18,
    category: 'Mechanical Engineering',
    publishedDate: '2014-05-01',
    availableCopies: 5,
    description: 'A foundational text on engineering mechanics, this book focuses on the principles of statics and dynamics. It includes real-world examples and exercises to help students build problem-solving skills in engineering.',
  },
  {
    id: '19',
    title: 'Thermodynamics: An Engineering Approach',
    author: 'Yunus A. Cengel',
    cover: img19,
    category: 'Mechanical Engineering',
    publishedDate: '2007-03-01',
    availableCopies: 3,
    description: 'This book introduces the principles of thermodynamics with a focus on practical engineering applications. It provides detailed explanations, diagrams, and real-world problems to enhance understanding.',
  },
  {
    id: '20',
    title: 'Dynamics of Machinery',
    author: 'Ansel C. Ugural',
    cover: img20,
    category: 'Mechanical Engineering',
    publishedDate: '2004-10-01',
    availableCopies: 4,
    description: 'A key resource for understanding the dynamics of machinery, this book explores mechanisms, vibrations, and kinematic analysis. It’s perfect for mechanical engineering students and professionals focusing on machine design.',
  },

];


const BookDetails = () => {
  const { id } = useParams();
  const [reserved, setReserved] = useState(false);
  const [returnDate, setReturnDate] = useState('');

  const [book, setBook] = useState(() => {
    return initialBooks.find((b) => b.id === id);
  });

  const handleReserve = () => {
    if (book && book.availableCopies > 0) {
      const updatedBook = { ...book, availableCopies: book.availableCopies - 1 };
      setBook(updatedBook);
      setReserved(true);
      const date = new Date();
      date.setDate(date.getDate() + 3);
      setReturnDate(date.toDateString());
    }
  };

  if (!book) {
    return <p>Book not found</p>;
  }

  return (
    <div className="book-details-container">
      <Link to="/book" className="back-link">
        &lt; Back to Catalogue
      </Link>

      <div className="details-content">
        {/* Book cover */}
        <div className="bookdetail-cover">
          <img src={book.cover} alt={book.title} className="bookdetail-image" />
        </div>

        {/* Book Info */}
        <div className="book-info">
          <h1 className="book-title">{book.title}</h1>
        
          <div className="book-metadata">
          <p><strong>Description</strong>{book.description}</p>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Category:</strong> {book.category}</p>
            <p><strong>Published Date:</strong> {book.publishedDate}</p>
            <p>
              <strong>Available Copies:</strong>{' '}
              <span className={book.availableCopies > 0 ? 'available' : 'unavailable'}>
                {book.availableCopies > 0 ? `${book.availableCopies} available` : 'Out of Stock'}
              </span>
            </p>
          </div>

          {reserved ? (
            <p className="reserved-message">
              Book Reserved! Estimated Return Date: <strong>{returnDate}</strong>
            </p>
          ) : (
            <button
              onClick={handleReserve}
              disabled={book.availableCopies === 0}
              className={`reserve-button ${book.availableCopies === 0 ? 'disabled' : ''}`}
            >
              {book.availableCopies > 0 ? 'Reserve' : 'Out of Stock'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
