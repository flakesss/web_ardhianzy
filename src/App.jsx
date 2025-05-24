import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NavbarLinks from './components/NavbarLinks';
import Magazine from './components/Magazine';
import Research from './components/Research';
import Course from './components/Course';
import Monologues from './components/Monologues';


function App() {
  const [navbarPosition, setNavbarPosition] = useState(0);

  useEffect(() => {
    const setInitialNavbarPosition = () => {
      const welcomeSection = document.getElementById('section1');
      if (welcomeSection) {
        const welcomeBottom = welcomeSection.offsetTop + welcomeSection.offsetHeight;
        setNavbarPosition(welcomeBottom);
      }
    };
    setInitialNavbarPosition();
    window.addEventListener('resize', setInitialNavbarPosition);
    return () => window.removeEventListener('resize', setInitialNavbarPosition);
  }, []);

  return (
    <div className="app">
      <Navbar />

      {/* Section 1: Welcome */}
      <section id="section1" className="section section1">
        <h2>Welcome to ARDHIANZY</h2>
      </section>

      {/* NavbarLinks (sticky) */}
      <NavbarLinks />
      <style>{`
        .navbar-links-container:not(.sticky) {
          top: ${navbarPosition}px;
        }
      `}</style>

      {/* Section Highlight */}
      <section id="highlight" className="section section-highlight">
        <div className="highlight-text">
          <div className="pretitle">Reading Session</div>
          <h2 className="title">BEYOND GOOD &amp; EVIL</h2>
          <div className="date">Friday, May 16 at 8:00 PM</div>
        </div>
      </section>

      <Magazine />
       
      <Research />


      <Course />

      <Monologues />
      <section id="reading-guide" className="section section6">
        <h2>READING GUIDE</h2>
      </section>

      <section id="ideas-tradition" className="section section7">
        <h2>IDEAS & TRADITION</h2>
      </section>

      <section id="pop-culture" className="section section8">
        <h2>POP-CULTURE REVIEW</h2>
      </section>

      <section id="shops" className="section section9">
        <h2>SHOPS</h2>
      </section>

      <section id="community" className="section section10">
        <h2>COMMUNITY</h2>
      </section>
    </div>
  );
}

export default App;
