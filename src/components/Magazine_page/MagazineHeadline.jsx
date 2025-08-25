import React from 'react';
import './MagazineHeadline.css';

const MagazineHeadline = () => (
  <>
    <section className="magazine-title-section">
      <div className="magazine-title-overlay" />
      <h1 className="magazine-title-header">THE MAGAZINE</h1>
    </section>

    <section className="magazine-content-section">
      <img src="/assets/Group 5203.svg" alt="Decoration" className="magazine-decoration-left" />
      <img src="/assets/Group 5202.svg" alt="Decoration" className="magazine-decoration-right" />
      <div className="magazine-content-section__grid">
        <div className="magazine-content-section__image-container">
          <img 
            src="/assets/magazine/Rectangle 4528.png" 
            alt="Featured article" 
            className="magazine-content-section__image"
          />
        </div>
        
        <article className="magazine-content-section__article">
          <h2 className="magazine-content-section__article-title">
            LOREM IPSUM DOLOR SIT
          </h2>
          <p className="magazine-content-section__author">By Lorem</p>
          <p className="magazine-content-section__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <time className="magazine-content-section__date">May 5, 2025</time>
        </article>
      </div>
    </section>
  </>
);

export default MagazineHeadline;