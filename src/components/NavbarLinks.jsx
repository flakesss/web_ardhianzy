import React, { useState, useEffect } from 'react';
import './NavbarLinks.css';

function NavbarLinks() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Deteksi scroll dan ubah state isSticky
    const welcomeSection = document.getElementById('section1');
    
    const handleScroll = () => {
      if (welcomeSection) {
        const welcomeBottom = welcomeSection.offsetTop + welcomeSection.offsetHeight;
        
        if (window.scrollY > welcomeBottom - 20) { // Offset sedikit untuk transisi yang lebih halus
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar-links-container ${isSticky ? 'sticky' : ''}`}>
      <ul className="navbar-links">
        <li><a href="#magazine">MAGAZINE</a></li>
        <li><a href="#research">RESEARCH</a></li>
        <li><a href="#course">COURSE</a></li>
        <li><a href="#monologues">MONOLOGUES</a></li>
        <li><a href="#reading-guide">READING GUIDE</a></li>
        <li><a href="#ideas-tradition">IDEAS & TRADITION</a></li>
        <li><a href="#pop-culture">POP-CULTURE REVIEW</a></li>
        <li><a href="#shops">SHOPS</a></li>
        <li><a href="#community">COMMUNITY</a></li>
      </ul>
    </div>
  );
}

export default NavbarLinks;