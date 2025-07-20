// src/components/ArtikelSection.jsx
import React, { useState } from 'react';
import './ArtikelSection.css';

// Dummy data
const articles = [
  {
    id: 1,
    date: 'May 5, 2025',
    title: 'Lorem Ipsum Dolor Sit',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/assets/research/Research (2).png',
  },
  {
    id: 2,
    date: 'May 5, 2025',
    title: 'Lorem Ipsum Dolor Sit',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/assets/research/Husk.jpg',
  },
  {
    id: 3,
    date: 'May 5, 2025',
    title: 'Lorem Ipsum Dolor Sit',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/assets/research/Research (2).png',
  },
  {
    id: 4,
    date: 'May 5, 2025',
    title: 'Artikel Keempat',
    desc: 'Ini adalah artikel keempat yang awalnya sebagian tersembunyi.',
    image: '/assets/research/Husk.jpg',
  },
  {
    id: 5,
    date: 'May 5, 2025',
    title: 'Artikel Kelima',
    desc: 'Ini adalah artikel kelima yang akan muncul setelah load more.',
    image: '/assets/research/Research (2).png',
  },
];

export default function ArtikelSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLoadMore = () => {
    setIsExpanded(true);
  };

  return (
    <section className="artikel-section">
      <div className="container">
        <h2 className="section-title">LATEST RESEARCH</h2>
        
        {/* Wrapper untuk daftar artikel dan tombol "Load More" */}
        <div className="artikel-list-container">
          {/* Tambahkan kelas 'is-expanded' saat state true */}
          <div className={`artikel-list ${isExpanded ? 'is-expanded' : ''}`}>
            {articles.map((article) => (
              <article className="artikel-item" key={article.id}>
                <div className="artikel-gambar-wrapper">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="artikel-gambar" 
                  />
                </div>
                <div className="artikel-konten">
                  <p className="artikel-tanggal">{article.date}</p>
                  <h3 className="artikel-judul">{article.title}</h3>
                  <p className="artikel-deskripsi">{article.desc}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Tampilkan tombol HANYA jika daftar belum diperluas */}
          {!isExpanded && (
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