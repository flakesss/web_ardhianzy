import React from 'react';
import './ResearchPage.css';
import HighlightSection from '../components/Research_page/HighlightSection';
import ArtikelSection from '../components/Research_page/ArtikelSection';

export default function ResearchPage() {
  return (
    <main className="research-page">
      <div className="page-content-wrapper">
        <HighlightSection />
        <ArtikelSection />
      </div>
    </main>
  );
}