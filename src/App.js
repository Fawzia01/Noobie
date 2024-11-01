// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './app.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/home';
import Main from './Components/Mains/Main';
import Footer from './Components/Footer/footer';
import LoginRegister from './Components/loginregister/LoginRegister';
import About from './Components/About/about';
import Contact from './Components/Contact/contact'; 
import Dashboard from './Components/Dashboard/dashboarduser';

const App = () => {
  const location = useLocation();

  // Check if the current path is not '/login' or '/dashboard' to display the navbar
  const showNavbar = location.pathname !== "/login" && location.pathname !== "/dashboard";

  return (
    <div>
      {showNavbar && <Navbar />} {/* Conditionally render Navbar */}
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Main />
            <Footer />
          </>
        } />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

// Main App component wrapped in Router
const AppWrapper = () => {
  return (
    <Router>
      <App /> {/* App is now directly inside the Router */}
    </Router>
  );
};

export default AppWrapper;
