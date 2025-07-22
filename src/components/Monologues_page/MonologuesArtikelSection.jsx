// src/components/Monologues_page/MonologuesArtikelSection.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MonologuesArtikelSection.css';
import { allArticles } from '../../data/articles'; // 1. Impor data terpusat

// 2. Filter artikel untuk hanya menampilkan yang dari kategori "Monologues"
const monologueArticles = allArticles.filter(article => article.category === "Monologues");

export default function MonologuesArtikelSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLoadMore = () => {
    setIsExpanded(true);
  };

  return (
    <section className="monologues-artikel-section">
      <div className="container">
        <h2 className="section-title">Latest Monologues</h2>
        
        <div className="artikel-grid-container">
          <div className={`artikel-grid ${isExpanded ? 'is-expanded' : ''}`}>
            {/* 3. Gunakan data yang sudah difilter untuk di-map */}
            {monologueArticles.map((article) => (
              <Link to={`/read/${article.id}`} key={article.id} className="artikel-link">
                <article className="artikel-kartu">
                  <div 
                    className="kartu-gambar" 
                    style={{ backgroundImage: `url(${article.image})` }}
                    aria-label={article.title}
                  ></div>
                  <div className="kartu-konten">
                    <p className="kartu-tanggal">{article.date}</p>
                    <div className="kartu-judul-wrapper">
                      <div className="judul-background-efek"></div>
                      <h3 className="kartu-judul">{article.title}</h3>
                    </div>
                    {/* Pastikan data 'desc' ada di articles.js jika ingin ditampilkan */}
                    {/* <p className="kartu-deskripsi">{article.desc}</p> */}
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Logika Load More bisa disesuaikan berdasarkan jumlah artikel */}
          {!isExpanded && monologueArticles.length > 15 && (
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