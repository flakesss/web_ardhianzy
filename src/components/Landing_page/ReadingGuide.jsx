// src/components/ReadingGuide.jsx
import React from 'react';
import './ReadingGuide.css';

const books = [
  {
    img: '/assets/reading guide/Ecce Homo.jpeg',
    title: 'ECCE HOMO',
    author: 'By Friedrich Nietzsche',
    excerpt: 'Ecce Homo adalah otobiografi intelektual Friedrich Nietzsche...',
  },
  {
    img: '/assets/reading guide/Thus Spoke Zarathustra.jpeg',
    title: 'THUS SPOKE ZARATHUSTRA',
    author: 'By Friedrich Nietzsche',
    excerpt: 'Thus Spoke Zarathustra adalah karya filsafat-sastra Friedrich Nietzsche...',
  },
  {
    img: '/assets/reading guide/cc68a255-f8b0-4d15-9798-e0e5ac96320f.jpeg',
    title: 'BEYOND GOOD AND EVIL',
    author: 'By Friedrich Nietzsche',
    excerpt: 'Beyond Good and Evil (1886) adalah karya kunci Friedrich Nietzsche...',
  },
  {
    img: '/assets/reading guide/buku zoom.png',
    title: 'LOREM IPSUM DOLOR SIT',
    author: 'By bla bla bla',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
];

export default function ReadingGuide() {
  return (
    <section id="reading-guide" className="section section-reading">
      <div className="reading-container">
        {/* Header */}
        <div className="reading-header">
          <h2>Reading Guide</h2>
          <a href="#" className="reading-more-button">
            SEE ALL <span className="arrow">→</span>
          </a>
        </div>

        {/* Books Grid */}
        <div className="reading-books">
          {books.map((b, i) => (
            <div key={i} className="book-card">
              <div className="book-img">
                <img src={b.img} alt={b.title} />
              </div>
              <h4 className="book-title">{b.title}</h4>
              <p className="book-author">{b.author}</p>
              <p className="book-excerpt">{b.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
