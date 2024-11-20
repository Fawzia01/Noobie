import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import { GiBookCover } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { CiMenuBurger } from 'react-icons/ci';
import { BiSearch } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [active, setActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterVisible, setFilterVisible] = useState(false);
  const filterRef = useRef(null);
  const navigate = useNavigate();

  // Temporary isLoggedIn variable (replace this with actual authentication logic)
  const isLoggedIn = false; // Set this based on the actual authentication state

  const toggleNav = () => {
    setActive(!active);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

  const handleRedirectToLogin = (route) => {
    if (!isLoggedIn) {
      navigate('/login'); // Redirect to login if not logged in
    } else {
      navigate(route); // If logged in, navigate to the intended route
    }
  };

  // Close filter dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setFilterVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <div className="toggleNavbar" onClick={toggleNav}>
            {active ? <AiFillCloseCircle className="icon" /> : <CiMenuBurger className="icon" />}
          </div>
          <a href="#" className="logo">
            <GiBookCover className="home-icon" />
            <span>BookWave.</span>
          </a>
        </div>

        <form onSubmit={handleSearchSubmit} className="searchForm">
          <div className="searchInputContainer">
            <BiSearch className="searchIcon" />
            <input
              type="text"
              placeholder="Search for books..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="searchInput"
            />
          </div>
        </form>

        <div className="navbar-actions">
          <button className="filter-button" onClick={toggleFilter}>
            <i className="fas fa-filter"></i> Filter
          </button>

          {filterVisible && (
            <div className="filterDropdown" ref={filterRef}>
              <div className="filterOption">Genre</div>
              <div className="filterOption">Author</div>
              <div className="filterOption">Date Published</div>
            </div>
          )}

          <button className="login-button">
            <Link to="/login">LOGIN</Link>
          </button>
        </div>

        {/* Left Sidebar */}
        <div className={active ? 'navBar activeNavbar leftSidebar' : 'navBar leftSidebar'}>
         {/* <AiFillCloseCircle className="closeNavbar" onClick={toggleNav} />*/}
          <ul className="navLists grid">

            <li className="navItem" onClick={() => handleRedirectToLogin('/book-catalogue')}>
              <span className="navLink">
                <i className="fas fa-book"></i> {"Catalogue"}
              </span>
            </li>

            <li className="navItem" onClick={() => handleRedirectToLogin('/ebooks')}>
              <span className="navLink">
                <i className="fas fa-tablet-alt"></i> {"E-Resource"}
              </span>
            </li>

            <li className="navItem" onClick={() => handleRedirectToLogin('/payment')}>
              <span className="navLink">
                <i className="fas fa-credit-card"></i> {"Payment"}
              </span>
            </li>
            <li className="navItem" onClick={() => handleRedirectToLogin('/feedback')}>
              <span className="navLink">
                <i className="fas fa-comment-dots"></i> {"Feedback"}
              </span>
            </li>

            <li className="navItem" onClick={() => handleRedirectToLogin('/research')}>
              <span className="navLink">
                <i className="fas fa-flask"></i> {"Research"}
              </span>
            </li>

            <li className="navItem">
  <Link to="/about" className="navLink">
    <i className="fas fa-info-circle"></i> About Us
  </Link>
</li>
<li className="navItem">
  <Link to="/contact" className="navLink">
    <i className="fas fa-envelope"></i> Contact
  </Link>
</li>

          </ul>
        </div>
        {active && <div className="blurOverlay" onClick={toggleNav}></div>}
      </header>
    
    </section>
  );
};

export default Navbar