import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={"src/assets/Ardhianzy_Logo 1.svg"} alt="Logo" className="logo-image" />
        <span className="brand-name">ARDHIANZY</span>
      </div>
    </nav>
  );
}

export default Navbar;