// src/pages/IdeasTraditionPage.jsx
import React from 'react';
import './IdeasTraditionPage.css';

// 1. Impor komponen yang ingin ditampilkan
import IdeasTraditionHighlightSection from '../components/Ideas_tradition_page/IdeasTraditionHighlightSection';
// Jika Anda juga punya ArtikelSection, impor juga di sini
import IdeasTraditionArtikelSection from '../components/Ideas_tradition_page/IdeasTraditionArtikelSection';


export default function IdeasTraditionPage() {
  return (
    <main className="ideas-tradition-page">
      <div className="page-content-wrapper">
        <IdeasTraditionHighlightSection />
        <IdeasTraditionArtikelSection /> 
      </div>
    </main>
  );
}