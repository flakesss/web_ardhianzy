// src/pages/MagazinePage.jsx
import React from 'react';
import MagazineHeadline from '../components/Magazine_page/MagazineHeadline';
import MagazineCollection from '../components/Magazine_page/MagazineCollection';
import './MagazinePage.css';

export default function MagazinePage() {
  return (
    <main className="magazine-page">
      <div className="page-content-wrapper">
        <MagazineHeadline />
        <MagazineCollection />
      </div>
    </main>
  );
}
