import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <i className="bi bi-magic text-primary me-2"></i>
          <span className="fw-bold">PortfolioGenie</span>
        </Link>
        <div className="d-flex ms-auto">
          <Link to="/build" className="btn btn-primary">
            Go to Builder
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
