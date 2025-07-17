import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './NavbarLinks.css';

function NavbarLinks() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const sect = document.getElementById('section1');
    const onScroll = () => {
      if (!sect) return;
      const bottom = sect.offsetTop + sect.offsetHeight;
      setIsSticky(window.scrollY > bottom - 20);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`navbar-links-container ${isSticky ? 'sticky' : ''}`}>
      <ul className="navbar-links">
        <li>
          <NavLink to="/magazine" className={({ isActive }) => isActive ? 'active' : ''}>
            MAGAZINE
          </NavLink>
        </li>
        <li><NavLink to="/research" className={({ isActive }) => isActive ? 'active' : ''}>
            RESEARCH
          </NavLink>
        </li>
        <li><a href="#course">COURSE</a></li>
        <li><a href="#monologues">MONOLOGUES</a></li>
        <li><a href="#reading-guide">READING GUIDE</a></li>
        <li><a href="#ideas-tradition">IDEAS & TRADITION</a></li>
        <li><a href="#pop-culture">POP-CULTURE REVIEW</a></li>
        <li>
          <NavLink to="/shop" className={({ isActive }) => isActive ? 'active' : ''}>
            SHOPS
          </NavLink>
        </li>
        <li><a href="#community">COMMUNITY</a></li>
      </ul>
    </div>
  );
}

export default NavbarLinks;
