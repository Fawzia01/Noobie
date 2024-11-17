// Dashboard/IssuedBooks.js
import React from "react";
import "./dashboarduser.css";
import img1 from '../../Assets/Book4.jpeg'; // Correct image imports
import img2 from '../../Assets/Book7.jpeg';

const Data = [
  {
    id: 1,
    bookName: 'Other London',
    imgSrc: img1,
    published: 'January 1, 1980',
    author: 'Carl Sagan',
    genre: 'Science · Nonfiction · Physics · Astronomy · History · Space · Philosophy · Classics · Popular Science'
  },
  {
    id: 2,
    bookName: 'Artificial Intelligence',
    imgSrc: img2,
    published: '2023',
    author: 'Dilip Kumar Sultania',
    genre: 'Nonfiction · Computer Science · Technical · Textbook'
  }
];

const Main = () => {
  return (
    <section className='main container section'>
      <div className='secHeader'>
        <h3 className="title">On due Books</h3>
        <button className="seeAllBtn">See All</button>
      </div>

      <div className='secContent grid'>
        {Data.map(({ id, imgSrc, bookName, published, author, genre}) => (
          <div key={id} className="singleBook">
            <div className="imageDiv">
              <img src={imgSrc} alt={`Cover of ${bookName}`} className="bookCover" />
            </div>
            <div className="bookDetails">
              <h4>{bookName}</h4>
              <p><strong>Author:</strong> {author}</p>
              <p><strong>Published:</strong> {published}</p>
              <p><strong>Genre:</strong> {genre}</p>
      
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Main;
