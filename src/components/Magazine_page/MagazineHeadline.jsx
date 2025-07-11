import React from 'react';
import './MagazineHeadline.css';

const MagazineHeadline = () => (
  <section className="magazine-headline">
    {/* Main Title */}
    <h1 className="magazine-headline__title">THE MAGAZINE</h1>
    
    {/* Main Content Grid */}
    <div className="magazine-headline__content">
      {/* Featured Image */}
      <div className="magazine-headline__image-container">
        <img 
          src="src/assets/magazine/Rectangle 4528.png" 
          alt="Featured article" 
          className="magazine-headline__image"
        />
      </div>
      
      {/* Article Content */}
      <article className="magazine-headline__article">
        <h2 className="magazine-headline__article-title">
          LOREM IPSUM DOLOR SIT
        </h2>
        <p className="magazine-headline__author">By Lorem</p>
        <p className="magazine-headline__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <time className="magazine-headline__date">May 5, 2025</time>
      </article>
    </div>
    
    {/* Decorative Elements */}
    <div className="magazine-headline__decor magazine-headline__decor--triangle-top"></div>
    <div className="magazine-headline__decor magazine-headline__decor--triangle-left"></div>
    <div className="magazine-headline__decor magazine-headline__decor--square-top"></div>
    <div className="magazine-headline__decor magazine-headline__decor--square-bottom"></div>
    <div className="magazine-headline__decor magazine-headline__decor--dots-left"></div>
    <div className="magazine-headline__decor magazine-headline__decor--dots-right"></div>
  </section>
);

export default MagazineHeadline;