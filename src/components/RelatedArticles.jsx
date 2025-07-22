// src/components/RelatedArticles.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RelatedArticles.css';

export default function RelatedArticles({ articles }) {
  const [currentPage, setCurrentPage] = useState(0);

  if (!articles || articles.length === 0) {
    return null;
  }
  
  const articlesPerPage = 4;
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const handleNext = () => {
    setCurrentPage(prevPage => (prevPage + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage(prevPage => (prevPage === 0 ? totalPages - 1 : prevPage - 1));
  };

  const slideWidth = (299 * articlesPerPage) + (30 * (articlesPerPage - 1));

  return (
    <section className="related-articles-section">
      {/* --- TAMBAHAN DI SINI: Wrapper untuk centering --- */}
      <div className="related-articles-container">
        <header className="related-header">
          <div className="header-bar"></div>
          <h2 className="header-title">OTHERS</h2>
        </header>

        <div className="related-carousel-wrapper">
          {totalPages > 1 && (
            <button className="carousel-nav prev" onClick={handlePrev} aria-label="Previous Articles">
              &#8249;
            </button>
          )}

          <div className="related-articles-viewport">
            <div 
              className="related-articles-track" 
              style={{ transform: `translateX(-${currentPage * slideWidth}px)` }}
            >
              {articles.map(article => (
                <article className="related-article-card" key={article.id}>
                  {/* ... konten kartu tetap sama ... */}
                  <img src={article.image} alt={article.title} className="related-article-image" />
                  <div className="related-article-content">
                    <p className="related-article-date">{article.date}</p>
                    <h3 className="related-article-title">{article.title}</h3>
                    <p className="related-article-desc">
                      {article.content[0].text.substring(0, 100)}...
                    </p>
                    <Link to={`/read/${article.id}`} className="continue-reading-link">
                      Continue Read <span className="arrow">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
          
          {totalPages > 1 && (
            <button className="carousel-nav next" onClick={handleNext} aria-label="Next Articles">
              &#8250;
            </button>
          )}
        </div>
      </div>
    </section>
  );
}