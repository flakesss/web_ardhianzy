// src/components/RelatedBooks.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Meskipun tidak ada tujuan, kita bisa siapkan
import './RelatedBooks.css'; // Kita akan buat file CSS baru untuk ini

export default function RelatedBooks({ books }) {
  const [currentPage, setCurrentPage] = useState(0);

  if (!books || books.length === 0) {
    return null; // Jangan tampilkan apa-apa jika tidak ada buku terkait
  }
  
  const booksPerPage = 4;
  const totalPages = Math.ceil(books.length / booksPerPage);

  const handleNext = () => {
    setCurrentPage(prevPage => (prevPage + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage(prevPage => (prevPage === 0 ? totalPages - 1 : prevPage - 1));
  };

  // Lebar slide disesuaikan dengan kartu buku
  const slideWidth = (299 * booksPerPage) + (30 * (booksPerPage - 1));

  return (
    <section className="related-books-section">
      <div className="related-books-container">
        <header className="related-header">
          <div className="header-bar"></div>
          <h2 className="header-title">OTHER BOOKS BY THIS AUTHOR</h2>
        </header>

        <div className="related-carousel-wrapper">
          {totalPages > 1 && (
            <button className="carousel-nav prev" onClick={handlePrev} aria-label="Previous Books">
              &#8249;
            </button>
          )}

          <div className="related-books-viewport">
            <div 
              className="related-books-track" 
              style={{ transform: `translateX(-${currentPage * slideWidth}px)` }}
            >
              {books.map(book => (
                <article className="related-book-card" key={book.id}>
                  <img src={book.coverImg} alt={book.title} className="related-book-image" />
                  <div className="related-book-content">
                    <h3 className="related-book-title">{book.title}</h3>
                    <p className="related-book-desc">
                      {book.description.substring(0, 100)}...
                    </p>
                    <Link to={`/`} className="view-details-link">
                      View Details <span className="arrow">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
          
          {totalPages > 1 && (
            <button className="carousel-nav next" onClick={handleNext} aria-label="Next Books">
              &#8250;
            </button>
          )}
        </div>
      </div>
    </section>
  );
}