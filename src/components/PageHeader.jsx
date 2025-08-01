// src/components/PageHeader.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './PageHeader.css';
import UserProfile from './UserProfile'; // Import UserProfile

export default function PageHeader({ isLoggedIn, handleLogout }) {
  return (
    <div className="page-header-wrapper">
      {/* Header utama dengan struktur tiga kolom */}
      <header className="page-header">
        {/* Kolom Kiri (kosong) */}
        <div className="page-header__section page-header__left"></div>

        {/* Kolom Tengah (Logo & Brand) */}
        <div className="page-header__section page-header__center">
            <Link to="/" className="page-header__logo">
            <img
                src="/assets/icon/Ardhianzy_Logo 2.png"
                alt="Logo"
                className="page-header__logo-img"
            />
            <span className="page-header__brand">ARDHIANZY</span>
            </Link>
        </div>

        {/* Kolom Kanan (Tombol atau Profil) */}
        <div className="page-header__section page-header__right">
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
      </header>

      {/* Navigation links */}
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
