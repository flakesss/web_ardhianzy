// src/components/PopCulture_review_page/PopCultureReviewHighlightSection.jsx
import React, { useState } from 'react';
import './PopCultureReviewHighlightSection.css';

export default function PopCultureReviewHighlightSection() {
  const [currentIndex, setCurrentIndex] = useState(2);

  const articles = [
    { id: 1, title: "LOREM IPSUM DOLOR SIT", description: "Lorem ipsum dolor sit amet...", image: "/assets/pop-culture/1.jpg" },
    { id: 2, title: "CONSECTETUR ADIPISCING", description: "Sed ut perspiciatis unde omnis...", image: "/assets/pop-culture/2.jpg" },
    { id: 3, title: "EIUSMOD TEMPOR INCIDIDUNT", description: "Ut enim ad minima veniam...", image: "/assets/pop-culture/3.jpg" },
    { id: 4, title: "LABORE ET DOLORE MAGNA", description: "At vero eos et accusamus et iusto...", image: "/assets/pop-culture/4.jpg" },
    { id: 5, title: "ALIQUA UT ENIM AD MINIM", description: "Nam libero tempore, cum soluta...", image: "/assets/pop-culture/5.jpg" }
  ];

  const handlePrev = () => setCurrentIndex(prev => (prev === 0 ? articles.length - 1 : prev - 1));
  const handleNext = () => setCurrentIndex(prev => (prev === articles.length - 1 ? 0 : prev + 1));

  return (
    <div className="pop-culture-highlight-wrapper">
      <section className="highlight-section">
        <div className="highlight-overlay" />
        <h1 className="highlight-title">POP-CULTURE REVIEW</h1>
      </section>

      <section className="article-slider-container">
        <div className="article-slider-wrapper">
          <button className="slider-nav prev" onClick={handlePrev} aria-label="Previous article">
            <img src="/assets/icon/arrow kiri.svg" alt="Previous" />
          </button>
          <div className="article-slider-viewport">
            <div className="article-slider" style={{ '--current-index': currentIndex }}>
              {articles.map((article, idx) => (
                <article key={article.id} className={`article-card ${idx === currentIndex ? 'is-active' : ''}`}>
                  <img src={article.image} alt={article.title} loading="lazy" />
                  <div className="article-overlay">
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-description">{article.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <button className="slider-nav next" onClick={handleNext} aria-label="Next article">
            <img src="/assets/icon/arrow kanan.svg" alt="Next" />
          </button>
        </div>
      </section>
    </div>
  );
}