// src/pages/MonologuesPage.jsx
import React from 'react';
import './MonologuesPage.css';
import MonologuesHighlightSection from '../components/Monologues_page/MonologuesHighlightSection';
import MonologuesArtikelSection from '../components/Monologues_page/MonologuesArtikelSection';

export default function MonologuesPage() {
  return (
    <main className="monologues-page">
      <div className="page-content-wrapper">
        <MonologuesHighlightSection />
        <MonologuesArtikelSection />

      </div>
    </main>
  );
}