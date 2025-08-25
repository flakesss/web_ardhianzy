// src/components/Research.jsx
import React from 'react';
import './Research.css';

const researchData = [
  {
    img: '/assets/research/Desain tanpa judul.png',
    title: 'LOREM IPSUM DOLOR SIT',
    date: '22 May, 2025',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna',
    link: '#',
  },
  {
    img: '/assets/research/Research (3).png',
    title: 'LOREM IPSUM DOLOR SIT',
    date: '22 May, 2025',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna',
    link: '#',
  },
  {
    img: '/assets/research/Research (1).png',
    title: 'LOREM IPSUM DOLOR SIT',
    date: '22 May, 2025',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna',
    link: '#',
  },
  {
    img: '/assets/research/Research (2).png',
    title: 'LOREM IPSUM DOLOR SIT',
    date: '22 May, 2025',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna',
    link: '#',
  },
];

const Research = () => (
  <section id="research" className="section section3">
    <div className="research-container">
      <div className="research-header">
        <h2>Check Our Research</h2>
        <a href="#" className="research-more-button">
          MORE RESEARCH <span className="arrow">→</span>
        </a>
      </div>

      <div className="research-content" onScroll={(e) => {
        const el = e.currentTarget;
        const cardWidth = 249 + 16; // width + gap
        const idx = Math.round(el.scrollLeft / cardWidth);
        const dots = document.querySelectorAll('.research-dot');
        dots.forEach((d, i) => d.classList.toggle('active', i === idx));
      }}>
        {researchData.map((item, i) => (
          <div key={i} className="research-card">
            <div className="research-card-img">
              <img src={item.img} alt={item.title} />
            </div>
            <h3 className="research-card-title">{item.title}</h3>
            <p className="research-card-date">{item.date}</p>
            <p className="research-card-excerpt">{item.excerpt}</p>
            <a href={item.link} className="research-card-link">
              Read research <span className="arrow">→</span>
            </a>
          </div>
        ))}
      </div>
      <div className="research-dots" aria-hidden>
        {researchData.map((_, i) => (
          <span key={i} className={`research-dot ${i===0 ? 'active' : ''}`}></span>
        ))}
      </div>
    </div>
  </section>
);

export default Research;
