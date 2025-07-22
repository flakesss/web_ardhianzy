// src/pages/ReadPage.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ReadPage.css';
import { allArticles } from '../data/articles';
import RelatedArticles from '../components/RelatedArticles'; // Impor komponen baru

export default function ReadPage() {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  // Cari artikel yang sesuai berdasarkan ID dari URL
  const article = allArticles.find(a => a.id === parseInt(articleId));

  // Jika artikel tidak ditemukan, tampilkan pesan
  if (!article) {
    return (
      <main className="read-page">
        <div className="article-container">
          <button onClick={() => navigate(-1)} className="back-button">
            <span className="arrow">←</span> Back
          </button>
          <h1>Artikel Tidak Ditemukan</h1>
        </div>
      </main>
    );
  }

  // Filter untuk mendapatkan artikel terkait (kategori sama, id berbeda)
  const related = allArticles.filter(
    a => a.category === article.category && a.id !== article.id
  );

  const visibleContent = isExpanded ? article.content : article.content.slice(0, 2);
  const canLoadMore = !isExpanded && article.content.length > 2;
  const handleLoadMore = () => {
    setIsExpanded(true);
  };

  return (
    <>
      <main className="read-page">
        <div className="article-container">
          <button onClick={() => navigate(-1)} className="back-button">
            <span className="arrow">←</span> Back to "{article.category}"
          </button>

          <header className="article-header">
            <h1 className="article-main-title">{article.title}</h1>
            <div className="article-meta">
              <span className="meta-date">{article.date}</span>
              <span className="meta-separator"></span>
              <span className="meta-author">By {article.author}</span>
            </div>
          </header>

          <img src={article.image} alt={article.title} className="article-hero-image" />

          <div className="article-content">
            {visibleContent.map((item, index) => {
              switch (item.type) {
                case 'paragraph':
                  return <p key={index}>{item.text}</p>;
                case 'subheading':
                  return <h2 className="subheading" key={index}>{item.text}</h2>;
                case 'blockquote':
                  return <blockquote key={index}>{item.text}</blockquote>;
                default:
                  return null;
              }
            })}
          </div>

          {canLoadMore && (
            <div className="read-load-more-container">
              <button className="read-load-more-button" onClick={handleLoadMore}>
                LOAD MORE...
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Tampilkan komponen RelatedArticles di bawah main content */}
      <RelatedArticles articles={related} />
    </>
  );
}