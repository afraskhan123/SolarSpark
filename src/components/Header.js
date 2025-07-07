import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ isInPakistan }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header${isInPakistan ? ' pakistan' : ''}`}>
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="logo">
            <span className="logo-icon">☀️</span>
            <span className="logo-text">SolarSpark</span>
          </Link>
          <div
            className={`hamburger${menuOpen ? ' active' : ''}`}
            onClick={handleHamburgerClick}
            aria-label="Toggle navigation menu"
            tabIndex={0}
            role="button"
            onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') handleHamburgerClick(); }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`nav-menu${menuOpen ? ' active' : ''}`}>
            <Link to="/" className={`nav-link${location.pathname === '/' ? ' active' : ''}`} onClick={handleLinkClick}>Home</Link>
            <Link to="/about" className={`nav-link${location.pathname === '/about' ? ' active' : ''}`} onClick={handleLinkClick}>About</Link>
            <Link to="/services" className={`nav-link${location.pathname === '/services' ? ' active' : ''}`} onClick={handleLinkClick}>Services</Link>
            <Link to="/contact" className={`nav-link${location.pathname === '/contact' ? ' active' : ''}`} onClick={handleLinkClick}>Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 