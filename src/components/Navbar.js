import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand bg-white border-bottom shadow-sm px-3">
      <div className="navbar-nav d-flex flex-row">
        <Link
          to="/"
          className={`nav-link${location.pathname === "/" ? " active fw-bold text-primary border-bottom border-primary" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/patients"
          className={`nav-link${location.pathname === "/patients" ? " active fw-bold text-primary border-bottom border-primary" : ""}`}
        >
          Patients
        </Link>
        <Link
          to="/about"
          className={`nav-link${location.pathname === "/about" ? " active fw-bold text-primary border-bottom border-primary" : ""}`}
        >
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
