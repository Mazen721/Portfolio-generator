import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar navbar-expand-lg theme-navbar shadow-sm fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center theme-text" to="/">
          <i className="bi bi-magic text-primary me-2"></i>
          <span className="fw-bold">PortfolioGenie</span>
        </Link>
        <div className="d-flex ms-auto align-items-center gap-3">
          <button 
            className="btn btn-link theme-text p-0 text-decoration-none fs-5" 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            <i className={`bi ${theme === 'dark' ? 'bi-moon-stars-fill' : 'bi-sun-fill'}`}></i>
          </button>
          <Link to="/build" className="btn btn-primary">
            Go to Builder
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
