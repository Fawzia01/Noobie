import React, { useState, useEffect, useRef } from 'react';
import './main.css';
import img1 from '../../../Assets/Book1.jpg';
import img2 from '../../../Assets/Book2.jpeg';
import img3 from '../../../Assets/Book3.jpg';
import monthlyreadimg from '../../../Assets/monthlychallenge.jpg';
import yearlyreadimg from '../../../Assets/Reading-Challenge.png';
import Navbar from '../Navbar/Navbar';

const Data = [
  { id: 1, bookName: 'Cosmos', imgSrc: img1, published: 'January 1, 1980', author: 'Carl Sagan', genre: 'Science · Nonfiction · Physics' },
  { id: 2, bookName: 'Data Structure and Algorithm', imgSrc: img2, published: '2023', author: 'Dilip Kumar Sultania', genre: 'Nonfiction · Computer Science' },
  { id: 3, bookName: 'Mechanical Engineering Handbook', imgSrc: img3, published: 'May 29, 2020', author: 'Charles E. Baukal', genre: 'Nonfiction · Engineering' }
];

const Challenges = [
  { id: 1, challengeName: 'Monthly Challenge', description: 'Read at least 3 books this month.', imgSrc: monthlyreadimg },
  { id: 2, challengeName: 'Annual Challenge', description: 'Read at least 30 books this year.', imgSrc: yearlyreadimg },
];

const librarySchedule = [
  { day: 'Monday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Tuesday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Wednesday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Thursday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Friday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

const Main = () => {
  const [comment, setComment] = useState('');
  const [bookSuggestion, setBookSuggestion] = useState('');
  const [commentsList, setCommentsList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [highlightedBookId, setHighlightedBookId] = useState(null);
  const [genreFilter, setGenreFilter] = useState('');
  
  // Create refs for each book to scroll to them
  const bookRefs = useRef([]);
  
  // Add a ref to each book dynamically
  useEffect(() => {
    bookRefs.current = bookRefs.current.slice(0, Data.length); // Ensure the array has the right size
  }, [Data.length]);

 

  // Handle click on a book to highlight it
  const handleBookClick = (id) => {
    setHighlightedBookId(id);
    const bookRef = bookRefs.current.find((ref, index) => index + 1 === id);
    if (bookRef) {
      bookRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Handle comment submission
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setCommentsList(prevComments => [...prevComments, { comment, bookSuggestion }]);
    setComment('');
    setBookSuggestion('');
  };

  // Filter books based on search query and genre
  const filteredBooks = Data.filter(book => {
    const matchesSearch = book.bookName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = genreFilter ? book.genre.toLowerCase().includes(genreFilter.toLowerCase()) : true;
    return matchesSearch && matchesGenre;
  });

  return (
    <div>
      <Navbar setSearchQuery={setSearchQuery} setGenreFilter={setGenreFilter} />

      <section className='main container section'>
        <div className='secHeader'>
          <h3 className="title">Recently Added Books</h3>
          <button className="seeAllBtn">See All</button>
        </div>

        <div className='secContent grid'>
          {filteredBooks.length > 0 ? (
            filteredBooks.map(({ id, imgSrc, bookName, published, author, genre }, index) => (
              <div
                key={id}
                ref={el => bookRefs.current[index] = el} 
                className={`singleBook ${highlightedBookId === id ? 'highlighted' : ''}`} 
                onClick={() => handleBookClick(id)} 
              >
                <div className="imageDiv">
                  <img src={imgSrc} alt={bookName} />
                </div>
                <div className="bookDetails">
                  <h4>{bookName}</h4>
                  <p><strong>Author:</strong> {author}</p>
                  <p><strong>Published:</strong> {published}</p>
                  <p><strong>Genre:</strong> {genre}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No books found matching your search.</p>
          )}
        </div>

        {/* Ongoing Reading Challenges */}
        <div className='secHeader'>
          <h3 className="title">Ongoing Reading Challenges</h3>
        </div>
        <div className='secContent grid'>
          {Challenges.map(({ id, imgSrc, challengeName, description }) => (
            <div key={id} className="singleBook">
              <div className="imageDiv">
                <img src={imgSrc} alt={challengeName} />
              </div>
              <div className="bookDetails">
                <h4>{challengeName}</h4>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='secHeader' style={{ marginTop: '40px' }}>
          <h3 className="title">Student Comments and Suggestions</h3>
        </div>

        <form onSubmit={handleCommentSubmit} className='commentForm'>
          <textarea
            placeholder="Share your comments about the library..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
          <input
            type="text"
            placeholder="Suggest a book to add..."
            value={bookSuggestion}
            onChange={(e) => setBookSuggestion(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>

        <div className='commentsList'>
          {commentsList.map((item, index) => (
            <div key={index} className="commentItem">
              <p><strong>Comment:</strong> {item.comment}</p>
              <p><strong>Suggested Book:</strong> {item.bookSuggestion}</p>
            </div>
          ))}
        </div>

        <div className='secHeader'>
          <h3 className="title">Library Schedule</h3>
        </div>
        <div className='librarySchedule'>
          {librarySchedule.map(({ day, hours }, index) => (
            <div key={index} className="scheduleItem">
              <p><strong>{day}:</strong> {hours}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Main;
