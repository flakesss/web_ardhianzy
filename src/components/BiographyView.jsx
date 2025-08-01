import React from 'react';
import './BiographyView.css';

const PhilosophyDiagram = () => (
  <div className="diagram-container">
    {/* --- PERUBAHAN HANYA DI SINI: Tambahkan overflow="visible" --- */}
    <svg viewBox="-10 -20 220 235" className="philosophy-diagram" overflow="visible">
      
      {/* Semua elemen di bawah ini SAMA PERSIS seperti yang Anda berikan */}
      
      {/* Segitiga utama */}
      <polygon points="100,20 190,180 10,180" className="triangle-main" />
      <polygon points="100,60 150,140 50,140" className="triangle-middle" />
      <polygon points="100,88 125,125 75,125" className="triangle-inner" />
      
      {/* Lingkaran sebagai background */}
      <circle cx="100" cy="20" r="16.5" fill="#FFFFFF" />
      <circle cx="10" cy="180" r="16.5" fill="#FFFFFF" />
      <circle cx="190" cy="180" r="16.5" fill="#FFFFFF" />
      
      {/* Ikon ditempatkan di atas lingkaran */}
      <image href="/assets/logo1.svg" x="85" y="5" width="30" height="30" />
      <image href="/assets/logo3.svg" x="-5" y="165" width="30" height="30" />
      <image href="/assets/Screenshot_2025-07-11_at_23.25.03-removebg-preview 1.svg" x="175" y="165" width="30" height="30" />
      
      {/* Posisi Teks Disesuaikan */}
      <text x="100" y="-4" className="diagram-text">METAFISIKA</text>
      <text x="20" y="210" className="diagram-text">EPISTEMOLOGI</text>
      <text x="190" y="210" className="diagram-text">AKSIOLOGI</text>
    </svg>
  </div>
);

export default function BiographyView({ philosopher, onClose }) {
  if (!philosopher) {
    return null;
  }

  const books = philosopher.books || [
    { cover: 'https://via.placeholder.com/97x144.png?text=Ecce+Homo' },
    { cover: 'https://via.placeholder.com/97x144.png?text=Zarathustra' },
    { cover: 'https://via.placeholder.com/97x144.png?text=Beyond+Good+and+Evil' },
    { cover: 'https://via.placeholder.com/97x144.png?text=Sample+Book' },
  ];

  return (
    <div className="biography-card">
      <button className="close-button" onClick={onClose}>&times;</button>
      
      <div className="bio-header-background"></div>

      <div className="bio-header">
        <div className="bio-portrait">
          <img src={philosopher.image} alt={philosopher.name} />
        </div>
        <div className="bio-header-content">
          <h1>{philosopher.name.toUpperCase()}</h1>
          <PhilosophyDiagram />
        </div>
      </div>

      <div className="bio-body">
        <div className="bio-dates">
          <span>{philosopher.birthDate || '15 OCT 1844'}</span>
          <span className="date-separator"></span>
          <span>{philosopher.deathDate || '25 AUG 1900'}</span>
        </div>
         <div className="bio-places">
           <span>{philosopher.birthPlace || 'Röcken, Lützen, Jerman'}</span>
           <span>{philosopher.deathPlace || 'Weimar, Jerman'}</span>
         </div>

        <section className="bio-section">
          <h2>Deskripsi</h2>
          <p>{philosopher.description || 'Data deskripsi tidak tersedia.'}</p>
        </section>

        <section className="bio-section">
          <h2>Books</h2>
          <div className="books-gallery">
            {books.map((book, index) => (
              <div key={index} className="book-item">
                <img src={book.cover} alt={book.title || `Buku ${index + 1}`} />
                {/* --- PERUBAHAN DI SINI --- */}
                <p>{book.title}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}