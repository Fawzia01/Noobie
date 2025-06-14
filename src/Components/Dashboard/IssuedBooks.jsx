// Dashboard/IssuedBooks.js
import React from "react";
import "./dashboarduser.css";
import img1 from '../../Assets/Book4.jpeg'; // Correct image imports
import img2 from '../../Assets/book5.png';
import img3 from '../../Assets/book6.jpeg';
import  { useState } from 'react';
import monthlyreadimg from '../../Assets/monthlychallenge.jpg'
import yearlyreadimg from '../../Assets/Reading-Challenge.png'


const Data = [
  {
    id: 1,
    bookName: 'Other London',
    imgSrc: img1,
    published: 'January 1, 1980',
    author: 'Carl Sagan',
    genre: 'Science · Nonfiction · Physics · Astronomy · History · Space · Philosophy · Classics · Popular Science',
    
  },
  {
    id: 2,
    bookName: 'Science Fiction',
    imgSrc: img2,
    published: '2023',
    author: 'Dilip Kumar Sultania',
    genre: 'Nonfiction · Computer Science · Technical · Textbook',
    
  },
 /* {
    id: 3,
    bookName: 'Enceladus',
    imgSrc: img3,
    published: 'May 29, 2020',
    author: 'Charles E. Baukal, Jr., PhD (Editor)',
    genre: 'Nonfiction · Science · Technical · Textbook',
    
  }*/
];
const Challenges = [
  {
    id: 1,
    challengeName: 'Monthly Challenge',
    description: 'Read at least 3 books this month.',
    imgSrc: monthlyreadimg,
  }
  
];


const Main = () => {
 
  return (
    <section className='main container section'>
      <div className='secHeader'>
        <h3 className="title"> Your Issued Books</h3>
        <button className="seeAllBtn">See All</button>
      </div>

      <div className='secContent grid'>
        {Data.map(({ id, imgSrc, bookName, published, author, genre, description }) => (
          <div key={id} className="singleBook">
            <div className="imageDiv">
              <img src={imgSrc} alt={`Cover of ${bookName}`} />
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
  )
};


export default Main;


