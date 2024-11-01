import React, { useState } from 'react'; 
import './navbar.css'; 
import { GiBookCover } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { BiSearch } from 'react-icons/bi'; // Import the search icon
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterVisible, setFilterVisible] = useState(false);

  const toggleNav = () => {
    setActive(!active);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Add search logic here, like navigating to a search results page
  };

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
          <a href="#" className='logo'>
            <h1><GiBookCover className="icon" />BookWave.</h1>
          </a>
        </div>

        {/* Search Bar */}
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

        {/* Filter Option */}
        <div className="filterContainer" onClick={toggleFilter}>
          <span className="filterLabel">Filter</span>
          {filterVisible ? '▲' : '▼'} {/* Simple toggle icon for filter */}
        </div>

        {/* Toggle Navigation */}
        <div className='toggleNavbar' onClick={toggleNav}>
          {active ? <AiFillCloseCircle className='icon' /> : <TbGridDots className='icon' />}
        </div>

        <div className={active ? 'navBar activeNavbar' : 'navBar'}>
          <AiFillCloseCircle className="closeNavbar" onClick={toggleNav} />
          <ul className='navLists grid'>
            <li className="navItem">
              <Link to="/" className="navLink">Home</Link>
            </li>
            <li className="navItem">
              <Link to="/about" className="navLink">About</Link>
            </li>
            <li className="navItem">
              <Link to="/contact" className="navLink">Contact</Link>
            </li>
            <li className="navItem">
              <button className='btn'>
                <Link to="/login">LOGIN</Link>
              </button>
            </li>
          </ul>
        </div>

        {/* Filter Dropdown */}
        {filterVisible && (
          <div className="filterDropdown">
            <div className="filterOption">Genre</div>
            <div className="filterOption">Author</div>
            <div className="filterOption">Date Published</div>
          </div>
        )}
      </header>
    </section>
  );
};

export default Navbar;
