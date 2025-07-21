// src/components/Reading_guide_page/ReadingGuideHighlight.jsx
import React, { useState } from 'react';
import './ReadingGuideHighlight.css';

const books = [
  {
    id: 1,
    title: "Ecce Homo",
    author: "Friedrich Nietzsche",
    description: "Ecce Homo adalah otobiografi intelektual Friedrich Nietzsche yang ditulis pada 1888 beberapa minggu sebelum ia mengalami gangguan mental permanen...",
    image: "/assets/reading-guide/ecce-homo.jpg"
  },
  {
    id: 2,
    title: "Thus Spoke Zarathustra",
    author: "Friedrich Nietzsche",
    description: "Sebuah novel filosofis yang mendalam, mengeksplorasi tema-tema seperti 'kehendak untuk berkuasa' dan 'manusia super' (Übermensch)...",
    image: "/assets/reading-guide/zarathustra.jpg"
  },
  {
    id: 3,
    title: "Beyond Good and Evil",
    author: "Friedrich Nietzsche",
    description: "Dalam karya ini, Nietzsche mengkritik tradisi filsafat Barat dan memperkenalkan konsep-konsep radikal tentang moralitas dan kebenaran...",
    image: "/assets/reading-guide/beyond-good-evil.jpg"
  },
];

export default function ReadingGuideHighlight() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? books.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === books.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="reading-guide-highlight-wrapper">
      {/* BAGIAN 1: Judul Halaman (Title Page) */}
      <section className="highlight-section">
        <div className="highlight-overlay" />
        <h1 className="highlight-title">READING GUIDE</h1>
      </section>

      {/* BAGIAN 2: Slider Buku */}
      <div className="book-slider-area">
        <section className="book-slider-section">
          <button className="book-slider-nav prev" onClick={handlePrev} aria-label="Previous book">&#8249;</button>
          
          <div className="book-slider-viewport">
            <div className="book-slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {books.map((book) => (
                <div className="book-slide" key={book.id}>
                  <img className="book-cover" src={book.image} alt={`Cover of ${book.title}`} />
                  <div className="book-details">
                    <h1 className="book-title">{book.title}</h1>
                    <p className="book-author">By {book.author}</p>
                    <hr className="separator" />
                    <p className="book-description">{book.description}</p>
                    <a href="#" className="explore-button">
                      <span>READING GUIDE "{book.title}"</span>
                      <span className="arrow">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="book-slider-nav next" onClick={handleNext} aria-label="Next book">&#8250;</button>
        </section>
        <div className="slide-indicators">
          {books.map((_, index) => (
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