import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NavbarLinks from './components/NavbarLinks';

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

     
      {/* Section Magazine */}
      <section id="magazine" className="section section2">
        <div className="magazine-container">
          {/* Header */}
          <div className="magazine-header">
            <h2>Check Our Magazine</h2>
            <button className="magazine-button">
              MORE MAGAZINE <span className="arrow">→</span>
            </button>
          </div>

          {/* Cards */}
          <div className="magazine-content">
            {/* Large card */}
            <div className="magazine-card-large">
              <img
                src="src/assets/magazine/Rectangle 4558.png"
                alt="Magazine large"
              />
              <div className="magazine-card-text">
                <h3>Lorem Ipsum Dolor Sit</h3>
                <p className="author">By Lorem</p>
                <p className="excerpt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat...{' '}
                  <a href="#" className="read-more">
                    Continue Read &gt;&gt;
                  </a>
                </p>
              </div>
            </div>

            {/* Small cards */}
            <div className="magazine-card-small">
              <img
                src="src/assets/magazine/Rectangle 4529.png"
                alt="Magazine small 1"
              />
              <h3>Lorem Ipsum Dolor Sit</h3>
              <p className="excerpt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
              </p>
              <p className="author">By bla bla bla</p>
            </div>

            <div className="magazine-card-small">
              <img
                src="src/assets/magazine/Rectangle 4528.png"
                alt="Magazine small 2"
              />
              <h3>Lorem Ipsum Dolor Sit</h3>
              <p className="excerpt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
              </p>
              <p className="author">By bla bla bla</p>
            </div>
          </div>
        </div>
      </section>


      {/* Section Research */}
      <section id="research" className="section section3">
        <h2>RESEARCH</h2>
      </section>

      <section id="research" className="section section3">
        <h2>RESEARCH</h2>
      </section>

      <section id="course" className="section section4">
        <h2>COURSE</h2>
      </section>

      <section id="monologues" className="section section5">
        <h2>MONOLOGUES</h2>
      </section>

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
