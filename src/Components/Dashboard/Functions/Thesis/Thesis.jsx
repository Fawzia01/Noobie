import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';

import "./thesis.css";

import Header from '../../../Header/header';
import img from "../../../../Assets/thesis.jpg"

const topics = [
  "All Topics",
  "Machine Learning",
  "Web Development",
  "Cybersecurity",
  "Blockchain",
  "Healthcare",
  "Artificial Intelligence"
];

const theses = [
  {
    title: "Facial Recognition Using CNN",
    author: "Maria Akter",
    year: 2025,
    topic: "Machine Learning"
  },
  {
    title: "Blockchain-Based Voting",
    author: "Ayan Chowdhury",
    year: 2025,
    topic: "Blockchain"
  },
  {
    title: "Smart Healthcare Monitoring",
    author: "Nishi Rahman",
    year: 2025,
    topic: "Healthcare"
  },
  {
    title: "Secure Cloud Data Storage",
    author: "Rahul Sharma",
    year: 2024,
    topic: "Cybersecurity"
  },
  {
    title: "Progressive Web App Performance",
    author: "Tania Ahmed",
    year: 2024,
    topic: "Web Development"
  },
  {
    title: "AI-Driven Crop Yield Prediction",
    author: "Kamal Hassan",
    year: 2023,
    topic: "AI"
  },
  {
    title: "Quantum Computing Applications in Cryptography",
    author: "Priya Patel",
    year: 2023,
    topic: "Cybersecurity"
  },
  {
    title: "Decentralized Finance Protocols",
    author: "Ahmed Khan",
    year: 2024,
    topic: "Blockchain"
  }
];
const ThesisLibrary = () => {
    
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

    return (
      <div className="ebook-page-container">
        <Header/>
            {/* Main Content */}
      <div className={`main-content ${isSidebarExpanded ? "shrink" : ""}`}>
        {/* Welcome Bar */}
        <div className="welcome-bar">
          <div className="welcome-text">
        <h2>Thesis Library</h2>
           <p>Browse a curated collection of academic theses across various domains and technologies.</p>

          </div>
          <div className="welcome-image">
            <img src={img} alt="Book Catalogue" />
          </div>
        </div>
        

     <table style={{ marginTop: "40px", marginLeft: "20px", marginRight:"20px" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author(s)</th>
            <th>Year</th>
            <th>Topic</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {theses.map((thesis, index) => (
            <tr key={index}>
              <td>{thesis.title}</td>
              <td>{thesis.author}</td>
              <td>{thesis.year}</td>
              <td>
                <span className="topic-tag">{thesis.topic}</span>
              </td>
               <td className="actions">
        <a href={'https://www.researchgate.net/publication/334766123_Facial_Recognition_using_Convolutional_Neural_Networks_and_Implementation_on_Smart_Glasses'} download className="download">⬇ Download</a>
      </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ThesisLibrary;
