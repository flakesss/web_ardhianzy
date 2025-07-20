// src/components/Ideas_tradition_page/IdeasTraditionArtikelSection.jsx
import React, { useState } from 'react'; // 1. Impor useState
import './IdeasTraditionArtikelSection.css';

const dummyArticles = [
    { id: 1, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/ideas&tradition/ideas.jpeg" },
    { id: 2, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/ideas&tradition/ideas1.jpeg" },
    { id: 3, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/ideas&tradition/ideas2.jpeg" },
    { id: 4, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/ideas&tradition/ideas.jpeg" },
    { id: 5, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/ideas&tradition/ideas1.jpeg" },
    { id: 6, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/ideas&tradition/ideas2.jpeg" },
    { id: 7, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/ideas&tradition/ideas.jpeg" },
    { id: 8, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/ideas&tradition/ideas1.jpeg" },
    { id: 9, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/ideas&tradition/ideas2.jpeg" },
    { id: 10, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/ideas&tradition/ideas.jpeg" },
    { id: 12, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/ideas&tradition/ideas1.jpeg" },
    { id: 13, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/ideas&tradition/ideas2.jpeg" },
    { id: 14, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/ideas&tradition/ideas.jpeg" },
    { id: 15, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/ideas&tradition/ideas1.jpeg" },
    { id: 16, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/ideas&tradition/ideas2.jpeg" },
];

export default function IdeasTraditionArtikelSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLoadMore = () => {
    setIsExpanded(true);
  };

  return (
    <section className="it-artikel-section">
      <div className="container">
        {/* 3. Tambahkan wrapper untuk grid dan tombol */}
        <div className="it-artikel-grid-container">
          <div className={`it-artikel-grid ${isExpanded ? 'is-expanded' : ''}`}>
            {dummyArticles.map((article) => (
              <article className="it-artikel-kartu" key={article.id}>
                <div 
                  className="it-kartu-gambar" 
                  style={{ backgroundImage: `url(${article.image})` }}
                  aria-label={article.title}
                ></div>
                <div className="it-kartu-konten">
                  <p className="it-kartu-tanggal">{article.date}</p>
                  <h3 className="it-kartu-judul">{article.title}</h3>
                </div>
              </article>
            ))}
          </div>

          {/* 4. Tampilkan tombol "Load More" secara kondisional */}
          {!isExpanded && (
            <div className="load-more-container">
              <button className="load-more-button" onClick={handleLoadMore}>
                LOAD MORE...
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}