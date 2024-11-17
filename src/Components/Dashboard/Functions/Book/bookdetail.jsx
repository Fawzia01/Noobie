// src/Components/Dashboard/Functions/Book/bookdetail.jsx

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Sample data to represent book details (You can replace this with actual data)
const bookDetailsData = [
  {
    id: 1,
    cover: 'https://via.placeholder.com/300',
    title: 'Book 1',
    author: 'Author A',
    publishedDate: '2021-01-01',
    availableCopies: 3,
  },
  {
    id: 2,
    cover: 'https://via.placeholder.com/300',
    title: 'Book 2',
    author: 'Author B',
    publishedDate: '2020-05-15',
    availableCopies: 5,
  },
  {
    id: 3,
    cover: 'https://via.placeholder.com/300',
    title: 'Book 3',
    author: 'Author C',
    publishedDate: '2019-08-21',
    availableCopies: 2,
  },
];

const BookDetails = () => {
  const { id } = useParams();
  const [reserved, setReserved] = useState(false);
  const [returnDate, setReturnDate] = useState('');

  // Get book details by ID
  const book = bookDetailsData.find((b) => b.id === parseInt(id));

  if (!book) {
    return <p>Book not found</p>;
  }

  const handleReserve = () => {
    setReserved(true);
    const date = new Date();
    date.setDate(date.getDate() + 3); // Add 3 days for the return date
    setReturnDate(date.toDateString());
  };

  return (
    <div style={{ padding: '20px' }}>
      <Link to="/book" style={{ textDecoration: 'none', color: 'blue' }}>Back to Catalogue</Link>
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <img src={book.cover} alt={book.title} style={{ width: '300px', marginRight: '20px' }} />
        <div>
          <h1>{book.title}</h1>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Published Date:</strong> {book.publishedDate}</p>
          <p><strong>Available Copies:</strong> {book.availableCopies}</p>
          {!reserved ? (
            <button
              onClick={handleReserve}
              style={{
                padding: '10px 20px',
                backgroundColor: 'blue',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Reserve
            </button>
          ) : (
            <p>
              Book Reserved! Estimated Return Date: <strong>{returnDate}</strong>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
