// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import UserProfile from './UserProfile'; // Import UserProfile

function Navbar({ isLoggedIn, handleLogout }) {
  return (
    <nav className="navbar">
      {/* Kolom Kiri (kosong, untuk mendorong elemen tengah) */}
      <div className="navbar-section navbar-left"></div>

      {/* Kolom Tengah (Logo & Brand) */}
      <div className="navbar-section navbar-center">
        <Link to="/" className="navbar-logo">
          <img
            src="/assets/icon/Ardhianzy_Logo 2.png"
            alt="Logo"
            className="logo-image"
          />
          <span className="brand-name">ARDHIANZY</span>
        </Link>
      </div>

      {/* Kolom Kanan (Tombol atau Profil) */}
      <div className="navbar-section navbar-right">
        {isLoggedIn ? (
          <UserProfile handleLogout={handleLogout} />
        ) : (
          <>
            <Link to="/signup" className="auth-button auth-button--signup">
              SIGN UP
            </Link>
            <Link to="/login" className="auth-button auth-button--login">
              LOG IN
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
