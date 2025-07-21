// src/pages/ReadingGuidePage.jsx
import React from 'react';
import './ReadingGuidePage.css';
import ReadingGuideHighlight from '../components/Reading_guide_page/ReadingGuideHighlight';
import ReadingGuideCollection from '../components/Reading_guide_page/ReadingGuideCollection';

export default function ReadingGuidePage() {
  return (
    <main className="reading-guide-page">
      <div className="page-content-wrapper">
        <ReadingGuideHighlight />
        <ReadingGuideCollection />
      </div>
    </main>
  );
}