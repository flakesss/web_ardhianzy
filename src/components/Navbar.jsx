// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';  // ← import Link
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      {/* wrap logo + brand-name dengan Link ke "/" */}
      <Link to="/" className="navbar-logo">
        <img
          src="/assets/icon/Ardhianzy_Logo 2.png"
          alt="Logo"
          className="logo-image"
        />
        <span className="brand-name">ARDHIANZY</span>
      </Link>
    </nav>
  );
}

export default Navbar;
