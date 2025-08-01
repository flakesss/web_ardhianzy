// src/pages/GuidePage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './GuidePage.css';
import { allReadingGuides, allBooks, allAuthors } from '../data/books'; 
import RelatedBooks from '../components/RelatedBooks';

export default function GuidePage() {
  const { guideId } = useParams();
  const navigate = useNavigate();
  
  const guide = allReadingGuides.find(g => g.id === parseInt(guideId));

  if (!guide) {
    return (
      <main className="guide-page">
        <div className="guide-container"><h1>Panduan Tidak Ditemukan</h1></div>
      </main>
    );
  }

  const author = allAuthors.find(a => a.id === guide.authorId);
  const targetBook = allBooks.find(b => b.id === guide.targetBookId);

  const booksInGuideIds = [guide.targetBookId, ...guide.steps.map(step => step.bookId)];

  const relatedBooks = allBooks.filter(
    book => book.authorId === guide.authorId && !booksInGuideIds.includes(book.id)
  );
  // -----------------------------------------

  if (!author || !targetBook) {
    return (
      <main className="guide-page">
        <div className="guide-container"><h1>Data tidak lengkap untuk panduan ini.</h1></div>
      </main>
    );
  }

  return (
    <>
      <main className="guide-page">
        <div className="guide-container">
          <button onClick={() => navigate(-1)} className="back-button">← Back</button>

          <div className="guide-layout">
            <aside className="guide-left-column">
              <div className="author-card">
                <img src={author.image} alt={author.name} className="author-photo" />
                <div className="author-details">
                  <h2 className="author-name">{author.name}</h2>
                  <p className="author-bio">{author.bio}</p>
                </div>
              </div>
              <img src={targetBook.coverImg} alt={targetBook.title} className="main-book-cover" />
            </aside>

            <section className="guide-right-column">
              <h2 className="list-books-title">LIST BOOKS</h2>
              <div className="warning-box">
                <span className="warning-icon">⚠️</span>
                <div className="warning-text">
                  <h3>WARNING:</h3>
                  <p>
                  Do not read this book randomly or skip sections...
                  </p>
                </div>
              </div>

              <div className="book-path-list">
                {guide.steps.map((step) => {
                  const stepBook = allBooks.find(b => b.id === step.bookId);
                  if (!stepBook) return null;

                  return (
                    <div className="book-path-item" key={step.order}>
                      <img src={stepBook.coverImg} alt={stepBook.title} className="path-book-cover" />
                      <div className="path-book-details">
                        <h3 className="path-book-title">{stepBook.title}</h3>
                        <p className="path-book-description">{stepBook.description}</p>
                      </div>
                    </div>
                  );
                })}
                
                <div className="book-path-item target-book-item">
                  <img src={targetBook.coverImg} alt={targetBook.title} className="path-book-cover" />
                  <div className="path-book-details">
                    <h3 className="path-book-title">{targetBook.title}</h3>
                    <p className="path-book-description">{targetBook.description}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <RelatedBooks books={relatedBooks} />
    </>
  );
}