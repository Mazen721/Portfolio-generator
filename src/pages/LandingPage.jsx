import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="container text-center py-5 mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="display-4 fw-bold mb-3">
            Build Your Developer Portfolio in Minutes with AI.
          </h1>
          <p className="lead text-muted mb-4">
            Stop writing boilerplate. Enter your skills, let AI polish your experience, and export a stunning portfolio instantly.
          </p>
          <Link to="/build" className="btn btn-primary btn-lg">
            Start Building - It's Free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
