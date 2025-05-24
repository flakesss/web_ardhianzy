// src/components/Magazine.jsx
import React from 'react';
import './Magazine.css';

const Magazine = () => (
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
              </p>
              <a href="#" className="read-more">Continue Read &gt;&gt;</a>
            </div>
          </div>

          {/* Small Cards */}
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
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
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
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
              </p>
              <p className="author">By bla bla bla</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Magazine;
