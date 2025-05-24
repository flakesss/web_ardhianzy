// src/components/Research.jsx
import React from 'react';
import './Research.css';

const researchData = [
  {
    img: 'src/assets/research/Desain tanpa judul.png',
    title: 'LOREM IPSUM DOLOR SIT',
    date: '22 May, 2025',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna',
    link: '#',
  },
  {
    img: 'src/assets/research/Research (3).png',
    title: 'LOREM IPSUM DOLOR SIT',
    date: '22 May, 2025',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna',
    link: '#',
  },
  {
    img: 'src/assets/research/Research (1).png',
    title: 'LOREM IPSUM DOLOR SIT',
    date: '22 May, 2025',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna',
    link: '#',
  },
  {
    img: 'src/assets/research/Research (2).png',
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

      <div className="research-content">
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
    </div>
  </section>
);

export default Research;
