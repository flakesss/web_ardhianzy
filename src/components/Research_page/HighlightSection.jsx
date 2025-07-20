// src/components/HighlightSection.jsx
import React, { useState } from 'react';
import './HighlightSection.css';

export default function HighlightSection() {
  const [currentIndex, setCurrentIndex] = useState(2);

  const articles = [
    { id: 1, title: "LOREM IPSUM DOLOR SIT", 
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna", 
      image: "/assets/research/Research (2).png" },
    { id: 2, title: "CONSECTETUR ADIPISCING", 
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam", 
      image: "/assets/research/Husk.jpg" },
    { id: 3, title: "EIUSMOD TEMPOR INCIDIDUNT",
       description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea", 
       image: "/assets/research/Husk.jpg" },
    { id: 4, title: "LABORE ET DOLORE MAGNA", 
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque", 
      image: "/assets/article4.jpg" },
    { id: 5, title: "ALIQUA UT ENIM AD MINIM", 
      description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat", 
      image: "/assets/article5.jpg" }
  ];

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? articles.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === articles.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <section className="highlight-section">
        <div className="highlight-overlay" />
        <h1 className="highlight-title">RESEARCH</h1>
      </section>

      <section className="article-slider-container">
        <div className="article-slider-wrapper">
          <button 
            className="slider-nav prev" 
            onClick={handlePrev} 
            aria-label="Previous article"
          >
            &#8249;
          </button>

          <div className="article-slider-viewport">
            {/* KIRIM CURRENTINDEX SEBAGAI CSS VARIABLE
              Ini akan digunakan oleh CSS untuk perhitungan transform
            */}
            <div 
              className="article-slider" 
              style={{ '--current-index': currentIndex }}
            >
              {articles.map((article, idx) => (
                <article 
                  key={article.id} 
                  // TAMBAHKAN KELAS 'is-active' SECARA KONDISIONAL
                  className={`article-card ${idx === currentIndex ? 'is-active' : ''}`}
                >
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    loading="lazy"
                  />
                  <div className="article-overlay">
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-description">
                      {article.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button 
            className="slider-nav next" 
            onClick={handleNext} 
            aria-label="Next article"
          >
            &#8250;
          </button>
        </div>
      </section>
    </>
  );
}