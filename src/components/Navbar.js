import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => (
  <nav className={`navbar${darkMode ? ' dark' : ''}`}>
    <div className="navbar-inner">
      <div className="navbar-left">
        <button className="mode-toggle left" onClick={toggleDarkMode} aria-label="Toggle dark mode">
          {darkMode ? <FaSun size={22} /> : <FaMoon size={22} />}
        </button>
        <div className="navbar-logo">Varna</div>
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li><a href="#introduction">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
