// src/Components/IntermediatePage/BookTable.js
import React from 'react';
import img1 from '../../Assets/Book4.jpeg';
import img2 from '../../Assets/book5.png';
import img3 from '../../Assets/book6.jpeg';
import img4 from '../../Assets/Book1.jpg';
import img5 from '../../Assets/Book2.jpeg';
import img6 from '../../Assets/Book3.jpg';
import './intermediatePage.css';

const book = [
  {
    id: 1,
    bookName: 'Other London',
    imgSrc: img1,
    published: 'January 1, 1980',
    author: 'Carl Sagan',
    genre: 'Science · Nonfiction · Physics · Astronomy · History · Space · Philosophy · Classics · Political Science'
  },
  {
    id: 2,
    bookName: 'Science Fiction',
    imgSrc: img2,
    published: '2023',
    author: 'Dilip Kumar Sultania',
    genre: 'Nonfiction · Computer Science · Technical · Textbook',
  },
  {
    id: 3,
    bookName: 'Enceladus',
    imgSrc: img3,
    published: 'May 29, 2020',
    author: 'Charles E. Baukal, Jr.',
    genre: 'Nonfiction · Science · Technical · Textbook',
  }
];

// Recently Added books
const recentlyAdded = [
  {
    id: 1,
    bookName: 'Cosmos',
    imgSrc: img4,
    published: 'January 1, 1980',
    author: 'Carl Sagan',
    genre: 'Science · Nonfiction · Physics · Astronomy · History · Space · Philosophy · Classics · Popular Science'
  },
  {
    id: 5,
    bookName: 'Data Structure and Algorithm',
    imgSrc: img2,
    published: '2023',
    author: 'Dilip Kumar Sultania',
    genre: 'Nonfiction · Computer Science · Technical · Textbook',
  },
  {
    id: 6,
    bookName: 'Mechanical Engineering Education HandBook',
    imgSrc: img3,
    published: 'May 29, 2020',
    author: 'Charles E. Baukal, Jr., PhD (Editor)',
    genre: 'Nonfiction · Science · Technical · Textbook'
  }
];

const BookTable = () => {
  return (
    <div className="book-table-container">
      {/* Popular Books Section */}
      <h2>Popular Books</h2>
      <table className="book-table">
        <thead>
          <tr>
            <th>Cover</th>
            <th>Title</th>
            <th>Author</th>
            <th>Published</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {book.map((book) => (
            <tr key={book.id}>
              <td className="cover-cell">
                <img src={book.imgSrc} alt={`${book.bookName} cover`} />
              </td>
              <td>{book.bookName}</td>
              <td>{book.author}</td>
              <td>{book.published}</td>
              <td>{book.genre}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="see-all-button">See All</button>

      {/* Recently Added Section (updated books) */}
      <h2>Recently Added</h2>
      <table className="book-table">
        <thead>
          <tr>
            <th>Cover</th>
            <th>Title</th>
            <th>Author</th>
            <th>Published</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {recentlyAdded.map((book) => (
            <tr key={book.id}>
              <td className="cover-cell">
                <img src={book.imgSrc} alt={`${book.bookName} cover`} />
              </td>
              <td>{book.bookName}</td>
              <td>{book.author}</td>
              <td>{book.published}</td>
              <td>{book.genre}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="see-all-button">See All</button>
    </div>
  );
};

export default BookTable;
