// src/pages/ReadHistoryPage.jsx
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './ReadHistoryPage.css';
// FIX: Menambahkan ekstensi .js untuk memastikan path resolver bekerja dengan benar.
import { allArticles } from '../data/articles.js';

// Mock data: ID artikel yang telah "dibaca" oleh pengguna.
// Di aplikasi nyata, ini akan berasal dari database atau state management.
const readHistoryIds = [101, 201, 301, 401];

// Ambil detail artikel lengkap berdasarkan ID dari riwayat baca
const readArticles = allArticles.filter(article => readHistoryIds.includes(article.id));

// Ambil cuplikan konten untuk deskripsi
const getSnippet = (content) => {
  if (!content || content.length === 0) {
    return "No content available.";
  }
  const firstParagraph = content.find(item => item.type === 'paragraph');
  // Menghasilkan cuplikan yang lebih panjang sesuai dengan desain
  return firstParagraph ? firstParagraph.text.substring(0, 250) + '...' : 'Click to read more...';
};


export default function ReadHistoryPage() {
  const navigate = useNavigate();

  return (
    <div className="history-page">
      {/* Elemen latar belakang dan overlay yang sama dengan ProfilePage */}
      <div className="history-background"></div>
      <div className="history-overlay-right"></div>
      <div className="history-overlay-bottom"></div>

      <button onClick={() => navigate(-1)} className="back-button">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Back</span>
      </button>

      <div className="history-content-container">
        <h1 className="main-title">Your Library</h1>

        <div className="tabs-container">
          <div className="tab active">History read</div>
          {/* Anda bisa menambahkan tab lain di sini jika perlu */}
        </div>

        <div className="articles-list">
          {readArticles.length > 0 ? (
            readArticles.map(article => (
              <Link to={`/read/${article.id}`} key={article.id} className="article-item-link">
                <div className="article-item">
                  <div className="article-text-content">
                    <h2 className="article-title">{article.title}</h2>
                    <p className="article-snippet">{getSnippet(article.content)}</p>
                  </div>
                  <div className="article-image-container">
                    <img src={article.image} alt={article.title} className="article-image" />
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>Your reading history is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
}
