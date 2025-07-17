// src/components/ArtikelSection.jsx
import React, { useState } from 'react';
import './ArtikelSection.css';

// Dummy data – ganti dengan data dari backend/API nanti
const articles = [
  {
    id: 1,
    title: 'Lorem Ipsum Dolor Sit',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
    image: '/assets/magazine/Rectangle 4558.png',
  },
  {
    id: 2,
    title: 'Sed Ut Perspiciatis',
    desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    image: '/assets/article2.jpg',
  },
  {
    id: 3,
    title: 'Nemo Enim Ipsam',
    desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    image: '/assets/article3.jpg',
  },
  {
    id: 4,
    title: 'Ut Enim Ad Minima',
    desc: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
    image: '/assets/article4.jpg',
  },
  {
    id: 5,
    title: 'Quis Nostrum Exercitationem',
    desc: 'Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
    image: '/assets/article5.jpg',
  },
];

export default function ArtikelSection() {
  const [current, setCurrent] = useState(0);
  const length = articles.length;

  const nextSlide = () => setCurrent((current + 1) % length);
  const prevSlide = () => setCurrent((current - 1 + length) % length);

  if (!Array.isArray(articles) || length === 0) return null;

  return (
    <section className="artikel-section">
      <div className="slider-wrapper">
        {/* Arrow kiri */}
        <button className="nav-btn nav-left" onClick={prevSlide} aria-label="Sebelumnya">&#10094;</button>

        {articles.map((art, index) => (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={art.id}
          >
            {index === current && (
              <div className="slide-inner">
                <img src={art.image} alt={art.title} />
                <div className="caption">
                  <h3>{art.title}</h3>
                  <p>{art.desc}</p>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Arrow kanan */}
        <button className="nav-btn nav-right" onClick={nextSlide} aria-label="Berikutnya">&#10095;</button>
      </div>
    </section>
  );
}