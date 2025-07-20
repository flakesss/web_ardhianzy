// src/components/PopCulture_review_page/PopCultureReviewArtikelSection.jsx
import React, { useState } from 'react';
import './PopCultureReviewArtikelSection.css';

const dummyArticles = [
    { id: 1, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/PopCulture/pop.jpeg" },
    { id: 2, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/PopCulture/pop1.jpeg" },
    { id: 3, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/PopCulture/pop2.jpeg" },
    { id: 4, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/PopCulture/pop.jpeg" },
    { id: 5, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/PopCulture/pop1.jpeg" },
    { id: 6, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/PopCulture/pop2.jpeg" },
    { id: 7, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/PopCulture/pop.jpeg" },
    { id: 8, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/PopCulture/pop1.jpeg" },
    { id: 9, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/PopCulture/pop2.jpeg" },
    { id: 10, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/PopCulture/pop.jpeg" },
    { id: 11, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/PopCulture/pop1.jpeg" },
    { id: 12, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/PopCulture/pop2.jpeg" },
    { id: 13, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/PopCulture/pop.jpeg" },
    { id: 14, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/PopCulture/pop1.jpeg" },
    { id: 15, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/PopCulture/pop2.jpeg" },
    { id: 16, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/PopCulture/pop.jpeg" },
    { id: 17, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/PopCulture/pop1.jpeg" },
    { id: 18, title: "Lorem Ipsum Dolor Sit", date: "22 May, 2025", image: "/assets/PopCulture/pop2.jpeg" },
];

export default function PopCultureReviewArtikelSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLoadMore = () => {
    setIsExpanded(true);
  };

  return (
    <section className="pc-artikel-section">
      <div className="container">
        <div className="pc-artikel-grid-container">
          <div className={`pc-artikel-grid ${isExpanded ? 'is-expanded' : ''}`}>
            {dummyArticles.map((article) => (
              <article className="pc-artikel-kartu" key={article.id}>
                <div 
                  className="pc-kartu-gambar" 
                  style={{ backgroundImage: `url(${article.image})` }}
                  aria-label={article.title}
                ></div>
                <div className="pc-kartu-konten">
                  <p className="pc-kartu-tanggal">{article.date}</p>
                  <h3 className="pc-kartu-judul">{article.title}</h3>
                </div>
              </article>
            ))}
          </div>

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