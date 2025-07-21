import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './PageHeader.css';

export default function PageHeader() {
  return (
    <div className="page-header-wrapper">
      {/* Header utama dengan logo (seperti Navbar) */}
      <header className="page-header">
        <Link to="/" className="page-header__logo">
          <img
            src="/assets/icon/Ardhianzy_Logo 2.png"
            alt="Logo"
            className="page-header__logo-img"
          />
          <span className="page-header__brand">ARDHIANZY</span>
        </Link>
      </header>

      {/* Navigation links (seperti NavbarLinks) */}
      <div className="page-header__nav-container">
        <nav className="page-header__nav">
          <ul className="page-header__list">
            <li><NavLink to="/magazine">MAGAZINE</NavLink></li>
            <li><NavLink to="/research">RESEARCH</NavLink></li>
            <li><NavLink to="/course">COURSE</NavLink></li>
            <li><NavLink to="/monologues">MONOLOGUES</NavLink></li>
            <li><NavLink to="/ReadingGuide">READING GUIDE</NavLink></li>
            <li><NavLink to="/ideastradition">IDEAS & TRADITION</NavLink></li>
            <li><NavLink to="/PopCultureReview">POP-CULTURE REVIEW</NavLink></li>
            <li><NavLink to="/shop">SHOPS</NavLink></li>
            <li><NavLink to="/community">COMMUNITY</NavLink></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}