// src/components/Monologues_page/MonologuesArtikelSection.jsx
import React, { useState } from 'react';
import './MonologuesArtikelSection.css';

// Data dummy diperbarui dengan tanggal dan deskripsi
const dummyArticles = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor Sit",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    date: "22 May, 2025",
    image: "/assets/monologues/women.jpg"
  },
  {
    id: 2,
    title: "Lorem Ipsum Dolor Sit",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    date: "22 May, 2025",
    image: "/assets/monologues/kratzhll.jpg"
  },
  {
    id: 3,
    title: "Lorem Ipsum Dolor Sit",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    date: "22 May, 2025",
    image: "/assets/monologues/kisskiss.jpg"
  },{
    id: 4,
    title: "Lorem Ipsum Dolor Sit",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    date: "22 May, 2025",
    image: "/assets/monologues/women.jpg"
  },
  {
    id: 5,
    title: "Lorem Ipsum Dolor Sit",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    date: "22 May, 2025",
    image: "/assets/monologues/kratzhll.jpg"
  },
  {
    id: 6,
    title: "Lorem Ipsum Dolor Sit",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    date: "22 May, 2025",
    image: "/assets/monologues/kisskiss.jpg"
  },{
    id: 7,
    title: "Lorem Ipsum Dolor Sit",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    date: "22 May, 2025",
    image: "/assets/monologues/women.jpg"
  },
  {
    id: 8,
    title: "Lorem Ipsum Dolor Sit",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    date: "22 May, 2025",
    image: "/assets/monologues/kratzhll.jpg"
  },
  {
    id: 9,
    title: "Lorem Ipsum Dolor Sit",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    date: "22 May, 2025",
    image: "/assets/monologues/kisskiss.jpg"
  },{
    id: 10,
    title: "Lorem Ipsum Dolor Sit",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    date: "22 May, 2025",
    image: "/assets/monologues/women.jpg"
  },
  {
    id: 12,
    title: "Lorem Ipsum Dolor Sit",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    date: "22 May, 2025",
    image: "/assets/monologues/kratzhll.jpg"
  },
  {
    id: 13,
    title: "Lorem Ipsum Dolor Sit",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    date: "22 May, 2025",
    image: "/assets/monologues/kisskiss.jpg"
  },{
    id: 14,
    title: "Lorem Ipsum Dolor Sit",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    date: "22 May, 2025",
    image: "/assets/monologues/women.jpg"
  },
  {
    id: 15,
    title: "Lorem Ipsum Dolor Sit",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    date: "22 May, 2025",
    image: "/assets/monologues/kratzhll.jpg"
  },
  {
    id: 16,
    title: "Lorem Ipsum Dolor Sit",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    date: "22 May, 2025",
    image: "/assets/monologues/kisskiss.jpg"
  },{
    id: 17,
    title: "Lorem Ipsum Dolor Sit",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    date: "22 May, 2025",
    image: "/assets/monologues/women.jpg"
  },
  {
    id: 18,
    title: "Lorem Ipsum Dolor Sit",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    date: "22 May, 2025",
    image: "/assets/monologues/kratzhll.jpg"
  },
  {
    id: 19,
    title: "Lorem Ipsum Dolor Sit",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    date: "22 May, 2025",
    image: "/assets/monologues/kisskiss.jpg"
  },
];

export default function MonologuesArtikelSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLoadMore = () => {
    setIsExpanded(true);
  };

  return (
    <section className="monologues-artikel-section">
      <div className="container">
        <h2 className="section-title">Latest Monologues</h2>
        
        <div className="artikel-grid-container">
          <div className={`artikel-grid ${isExpanded ? 'is-expanded' : ''}`}>
            {dummyArticles.map((article) => (
              <article className="artikel-kartu" key={article.id}>
                <div 
                  className="kartu-gambar" 
                  style={{ backgroundImage: `url(${article.image})` }}
                  aria-label={article.title}
                ></div>
                <div className="kartu-konten">
                  <p className="kartu-tanggal">{article.date}</p>
                  
                  <div className="kartu-judul-wrapper">
                    <div className="judul-background-efek"></div>
                    <h3 className="kartu-judul">{article.title}</h3>
                  </div>

                  <p className="kartu-deskripsi">{article.desc}</p>
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