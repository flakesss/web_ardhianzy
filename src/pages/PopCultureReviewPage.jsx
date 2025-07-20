// src/pages/PopCultureReviewPage.jsx
import React from 'react';
import './PopCultureReviewPage.css';
import PopCultureReviewHighlightSection from '../components/PopCulture_review_page/PopCultureReviewHighlightSection';
import PopCultureReviewArtikelSection from '../components/PopCulture_review_page/PopCultureReviewArtikelSection';

export default function PopCultureReviewPage() {
  return (
    <main className="pop-culture-review-page">
      <div className="page-content-wrapper">
        <PopCultureReviewHighlightSection />
        <PopCultureReviewArtikelSection />
      </div>
    </main>
  );
}