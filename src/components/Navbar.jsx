// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
// HAPUS: Import UserProfile tidak lagi diperlukan
// import UserProfile from './UserProfile'; 

// PERBAIKAN: Props isLoggedIn dan handleLogout dihapus
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const handleLinkClick = () => closeMobileMenu();

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

      {/* Kolom Kanan (sekarang kosong) */}
      <div className="navbar-section navbar-right">
        <button
          className="navbar-mobile-toggle"
          aria-expanded={isMobileMenuOpen}
          aria-controls="navbar-mobile-overlay"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
        >
          MENU
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        id="navbar-mobile-overlay"
        className={`navbar-mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="navbar-mobile-backdrop" onClick={closeMobileMenu} />
        <aside className="navbar-mobile-drawer">
          <div className="navbar-mobile-header">
            <span className="navbar-mobile-title">Navigation</span>
            <button className="navbar-mobile-close" aria-label="Close menu" onClick={closeMobileMenu}>×</button>
          </div>
          <ul className="navbar-mobile-links">
            <li><NavLink to="/magazine" onClick={handleLinkClick}>MAGAZINE</NavLink></li>
            <li><NavLink to="/research" onClick={handleLinkClick}>RESEARCH</NavLink></li>
            <li><a href="#course" onClick={handleLinkClick}>COURSE</a></li>
            <li><NavLink to="/monologues" onClick={handleLinkClick}>MONOLOGUES</NavLink></li>
            <li><NavLink to="/ReadingGuide" onClick={handleLinkClick}>READING GUIDE</NavLink></li>
            <li><NavLink to="/IdeasTradition" onClick={handleLinkClick}>IDEAS & TRADITION</NavLink></li>
            <li><NavLink to="/PopCultureReview" onClick={handleLinkClick}>POP-CULTURE REVIEW</NavLink></li>
            <li><NavLink to="/shop" onClick={handleLinkClick}>SHOPS</NavLink></li>
            <li><a href="#community" onClick={handleLinkClick}>COMMUNITY</a></li>
          </ul>
        </aside>
      </div>
    </nav>
  );
}

export default Navbar;