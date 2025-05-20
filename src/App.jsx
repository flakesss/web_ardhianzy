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

    
       <section id="magazine" className="section section2">
        <div className="magazine-section">
          {/* Div khusus untuk efek blur */}
          <div className="magazine-blur-effect"></div>
          
          <div className="magazine-container">
            <div className="magazine-header">
              <h2>Check Our Magazine</h2>
              <a href="#" className="magazine-more-button">
                MORE MEGAZINE <span className="arrow">→</span>
              </a>
            </div>

            <div className="magazine-content">
              {/* Large Card */}
              <div className="magazine-card-large">
                <div className="magazine-card-large-img">
                  <img
                    src="src/assets/magazine/Rectangle 4558.png"
                    alt="Man standing in front of a painting"
                  />
                </div>
                <div className="magazine-card-large-content">
                  <h3>LOREM IPSUM DOLOR SIT</h3>
                  <p className="author">By Lorem</p>
                  <p className="excerpt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <a href="#" className="read-more">Continue Read &gt;&gt;</a>
                </div>
              </div>
              
              {/* Small Cards - tetap sama */}
              <div className="magazine-card-small">
                <div className="magazine-card-small-img">
                  <img
                    src="src/assets/magazine/Rectangle 4528.png"
                    alt="Apple on a stand"
                  />
                </div>
                <div className="magazine-card-small-content">
                  <h3>LOREM IPSUM DOLOR SIT</h3>
                  <p className="excerpt">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  </p>
                  <p className="author">By bla bla bla</p>
                </div>
              </div>

              <div className="magazine-card-small">
                <div className="magazine-card-small-img">
                  <img
                    src="src/assets/magazine/Rectangle 4529.png"
                    alt="People in a painting"
                  />
                </div>
                <div className="magazine-card-small-content">
                  <h3>LOREM IPSUM DOLOR SIT</h3>
                  <p className="excerpt">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  </p>
                  <p className="author">By bla bla bla</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Section Research */}
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
