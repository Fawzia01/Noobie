import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './app.css';
import Navbar from './Components/Homepage/Navbar/Navbar';
import Home from './Components/Homepage/Home/home';
import Main from './Components/Homepage/Mains/Main';
import Footer from './Components/Homepage/Footerr/footer';
import LoginRegister from './Components/loginregister/LoginRegister';
import About from './Components/Homepage/About/about';
import Contact from './Components/Homepage/Contact/contact';
import Dashboard from './Components/Dashboard/dashboarduser';
import IntermediatePage from './Components/IntermediatePage/intermediatePage';
import AdminDash from './Components/AdminDash/admindash';
import Ebooks from './Components/Dashboard/Functions/Ebook/ebooks';
import AudiobookPlayer from './Components/Dashboard/Functions/Ebook/audio';
import Payment from './Components/Dashboard/Functions/Payment/payment';
import Book from './Components/Dashboard/Functions/Book/book';
import BookDetails from './Components/Dashboard/Functions/Book/bookdetail';

const App = () => {
  const location = useLocation();

  // Define paths where Navbar should be hidden
  const navbarHiddenPaths = ['/login', '/intermediate', '/dashboarduser', '/admindash', '/ebooks', '/audio','/payment','/book','/bookdetail'];
  const showNavbar = !navbarHiddenPaths.includes(location.pathname);

  return (
    <div>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Main />
            <Footer />
          </>
        } />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/intermediate" element={<IntermediatePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboarduser" element={<Dashboard />} />
        <Route path="/ebooks" element={<Ebooks />} />
        <Route path="/audio" element={<AudiobookPlayer />} />
        <Route path="/admindash" element={<AdminDash />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/book" element={<Book />} />
        <Route path="/bookdetail" element={<BookDetails />} />
      </Routes>
    </div>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;