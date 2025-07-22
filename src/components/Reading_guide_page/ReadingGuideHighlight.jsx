// src/components/Reading_guide_page/ReadingGuideHighlight.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ReadingGuideHighlight.css';
// 1. Impor semua data yang dibutuhkan dari file books.js
import { allReadingGuides, allBooks, allAuthors } from '../../data/books';

export default function ReadingGuideHighlight() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = allReadingGuides.length;

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % totalSlides);
  };

  return (
    <div className="reading-guide-highlight-wrapper">
      <section className="highlight-section">
        <div className="highlight-overlay" />
        <h1 className="highlight-title">READING GUIDE</h1>
      </section>

      <div className="book-slider-area">
        <section className="book-slider-section">
          
          <img 
            src="/assets/reading guide/Group 5185.svg" 
            alt="" 
            className="decorative-asset left" 
            aria-hidden="true" 
          />
          
          <button className="book-slider-nav prev" onClick={handlePrev} aria-label="Previous book">&#8249;</button>
          
          <div className="book-slider-viewport">
            <div className="book-slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {allReadingGuides.map((guide) => {
                // 2. Cari buku dan penulis yang sesuai berdasarkan ID
                const targetBook = allBooks.find(book => book.id === guide.targetBookId);
                const author = allAuthors.find(auth => auth.id === guide.authorId);

                // Pengaman jika data tidak ditemukan
                if (!targetBook || !author) return null;

                return (
                  <Link to={`/guide/${guide.id}`} key={guide.id} className="book-slide-link">
                    <div className="book-slide">
                      {/* 3. Gunakan data yang sudah ditemukan */}
                      <img className="book-cover" src={targetBook.coverImg} alt={`Cover of ${targetBook.title}`} />
                      <div className="book-details">
                        <h1 className="book-title">{guide.title}</h1>
                        <p className="book-author">By {author.name}</p>
                        <hr className="separator" />
                        <p className="book-description">{guide.excerpt}</p>
                        <div className="explore-button">
                          <span>VIEW READING PATH</span>
                          <span className="arrow">→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <button className="book-slider-nav next" onClick={handleNext} aria-label="Next book">&#8250;</button>

          <img 
            src="/assets/reading guide/Group 5184.svg" 
            alt="" 
            className="decorative-asset right" 
            aria-hidden="true" 
          />
          
        </section>
        <div className="slide-indicators">
          {allReadingGuides.map((_, index) => (
            <div 
              key={index}
              className={`indicator-dot ${index === currentIndex ? 'is-active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}