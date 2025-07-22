// src/pages/GuidePage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './GuidePage.css';
// 1. Impor semua data yang dibutuhkan
import { allReadingGuides, allBooks, allAuthors } from '../data/books';

export default function GuidePage() {
  const { guideId } = useParams();
  const navigate = useNavigate();

   // --- BAGIAN DEBUGGING ---
  // Ini akan menampilkan data di console browser Anda (buka dengan F12)
  console.log("ID dari URL:", guideId); 
  console.log("Data allReadingGuides yang diimpor:", allReadingGuides);
  // -------------------------
  
  // Cari guide yang sesuai
  const guide = allReadingGuides.find(g => g.id === parseInt(guideId));

  if (!guide) {
    return (
      <main className="guide-page">
        <div className="guide-container">
          <h1>Panduan Tidak Ditemukan</h1>
        </div>
      </main>
    );
  }

  // 2. Cari data penulis dan buku target berdasarkan ID dari guide
  const author = allAuthors.find(a => a.id === guide.authorId);
  const targetBook = allBooks.find(b => b.id === guide.targetBookId);

  // Jika ada data yang tidak ditemukan, tampilkan pesan error
  if (!author || !targetBook) {
    return (
      <main className="guide-page">
        <div className="guide-container">
          <h1>Data tidak lengkap untuk panduan ini.</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="guide-page">
      <div className="guide-container">
        <button onClick={() => navigate(-1)} className="back-button">← Back</button>

        <div className="guide-layout">
          {/* --- KOLOM KIRI --- */}
          <aside className="guide-left-column">
            <div className="author-card">
              {/* 3. Gunakan data penulis yang sudah ditemukan */}
              <img src={author.image} alt={author.name} className="author-photo" />
              <div className="author-details">
                <h2 className="author-name">{author.name}</h2>
                <p className="author-bio">{author.bio}</p>
              </div>
            </div>
            {/* 4. Gunakan data buku target yang sudah ditemukan */}
            <img src={targetBook.coverImg} alt={targetBook.title} className="main-book-cover" />
          </aside>

          {/* --- KOLOM KANAN --- */}
          <section className="guide-right-column">
            <h2 className="list-books-title">LIST BOOKS</h2>
            <div className="warning-box">
              <span className="warning-icon">⚠️</span>
              <div className="warning-text">
                <h3>WARNING:</h3>
                <p>
                  Do not read this book randomly or skip sections...
                </p>
              </div>
            </div>

            <div className="book-path-list">
              {guide.steps.map((step) => {
                // 5. Cari detail setiap buku di dalam 'steps'
                const stepBook = allBooks.find(b => b.id === step.bookId);
                if (!stepBook) return null; // Lewati jika buku tidak ditemukan

                return (
                  <div className="book-path-item" key={step.order}>
                    <img src={stepBook.coverImg} alt={stepBook.title} className="path-book-cover" />
                    <div className="path-book-details">
                      <h3 className="path-book-title">{stepBook.title}</h3>
                      <p className="path-book-description">{stepBook.description}</p>
                    </div>
                  </div>
                );
              })}
              
              {/* Buku Target juga ditampilkan di list */}
              <div className="book-path-item target-book-item">
                <img src={targetBook.coverImg} alt={targetBook.title} className="path-book-cover" />
                <div className="path-book-details">
                  <h3 className="path-book-title">{targetBook.title}</h3>
                  <p className="path-book-description">{targetBook.description}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}