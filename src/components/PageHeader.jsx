// src/components/PageHeader.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './PageHeader.css';

export default function PageHeader() {
  const [open, setOpen] = useState(false);
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

        {/* Kolom Kanan (sekarang kosong) */}
        <div className="page-header__section page-header__right">
           <button className="ph-menu-toggle" aria-expanded={open} onClick={() => setOpen(v => !v)}>MENU</button>
        </div>
      </header>

      {/* Navigation links for Desktop */}
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

      {/* Mobile Drawer Overlay - Strukturnya diubah agar mirip Navbar */}
      <div
        id="ph-mobile-overlay"
        className={`ph-mobile-overlay ${open ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="ph-mobile-backdrop" onClick={() => setOpen(false)} />
        <aside className="ph-mobile-drawer">
          <div className="ph-mobile-header">
            <span className="ph-mobile-title">Navigation</span>
            <button className="ph-mobile-close" aria-label="Close menu" onClick={() => setOpen(false)}>×</button>
          </div>
          <ul className="ph-mobile-links">
            <li><NavLink to="/magazine" onClick={() => setOpen(false)}>MAGAZINE</NavLink></li>
            <li><NavLink to="/research" onClick={() => setOpen(false)}>RESEARCH</NavLink></li>
            <li><NavLink to="/course" onClick={() => setOpen(false)}>COURSE</NavLink></li>
            <li><NavLink to="/monologues" onClick={() => setOpen(false)}>MONOLOGUES</NavLink></li>
            <li><NavLink to="/ReadingGuide" onClick={() => setOpen(false)}>READING GUIDE</NavLink></li>
            <li><NavLink to="/ideastradition" onClick={() => setOpen(false)}>IDEAS & TRADITION</NavLink></li>
            <li><NavLink to="/PopCultureReview" onClick={() => setOpen(false)}>POP-CULTURE REVIEW</NavLink></li>
            <li><NavLink to="/shop" onClick={() => setOpen(false)}>SHOPS</NavLink></li>
            <li><NavLink to="/community" onClick={() => setOpen(false)}>COMMUNITY</NavLink></li>
          </ul>
        </aside>
      </div>
    </div>
  );
}