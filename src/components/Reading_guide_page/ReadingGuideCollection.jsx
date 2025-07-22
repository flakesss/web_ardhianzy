// src/components/Reading_guide_page/ReadingGuideCollection.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ReadingGuideCollection.css';
// 1. Impor semua data yang dibutuhkan
import { allReadingGuides, allBooks, allAuthors } from '../../data/books';

export default function ReadingGuideCollection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLoadMore = () => {
    setIsExpanded(true);
  };
  
  // 2. Logika "Load More" sekarang menggunakan 'allBooks' langsung
  // Tidak perlu lagi flatMap atau filter duplikat yang rumit
  const visibleBooks = isExpanded ? allBooks : allBooks.slice(0, 15);
  const canLoadMore = !isExpanded && allBooks.length > 15;

  // 3. Fungsi untuk menemukan guide ID (sudah disesuaikan dengan struktur baru)
  const findGuideForBook = (bookId) => {
    const guide = allReadingGuides.find(g => 
      g.targetBookId === bookId || g.steps.some(step => step.bookId === bookId)
    );
    return guide ? guide.id : null;
  };

  return (
    <section className="rg-collection-section">
      <div className="container">
        <header className="collection-header">
          <h2>COLLECTED BOOKS</h2>
        </header>

        <div className="search-bar">
          <div className="search-icon"></div>
          <input type="text" placeholder="what are you looking for..." />
        </div>

        <div className="rgc-book-grid-container">
          <div className={`rgc-book-grid ${isExpanded ? 'is-expanded' : ''}`}>
            {visibleBooks.map((book) => {
              // 4. Cari guide dan penulis untuk setiap buku
              const guideId = findGuideForBook(book.id);
              const author = allAuthors.find(a => a.id === book.authorId);

              return (
                <Link to={guideId ? `/guide/${guideId}` : '#'} key={book.id} className="rgc-book-link">
                  <article className="rgc-book-card">
                    <div 
                      className="rgc-book-cover-image"
                      style={{ backgroundImage: `url(${book.coverImg})` }}
                    >
                    </div>
                    <div className="rgc-book-info">
                      <h3 className="rgc-book-title">{book.title}</h3>
                      <p className="rgc-book-author">By {author ? author.name : "Unknown"}</p>
                      <div className="rgc-reading-guide-button">READING GUIDE</div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>

          {canLoadMore && (
            <div className="load-more-container">
              <button className="load-more-button" onClick={handleLoadMore}>
                LOAD MORE...
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}