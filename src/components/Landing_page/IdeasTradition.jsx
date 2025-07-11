// src/components/IdeasTradition.jsx
import React from 'react';
import './IdeasTradition.css';

const ideas = [
  {
    img: 'src/assets/research/Desain tanpa judul.png',
    title: 'LOREM IPSUM DOLOR SIT',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    link: '#',
  },
  {
    img: 'src/assets/research/Desain tanpa judul.png',
    title: 'LOREM IPSUM DOLOR SIT',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    link: '#',
  },
  {
    img: 'src/assets/research/Desain tanpa judul.png',
    title: 'LOREM IPSUM DOLOR SIT',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    link: '#',
  },
  {
    img: 'src/assets/research/Desain tanpa judul.png',
    title: 'LOREM IPSUM DOLOR SIT',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    link: '#',
  },
];

const featured = {
  img: 'src/assets/research/Desain tanpa judul.png',
  title: 'LOREM IPSUM DOLOR SIT',
  excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
  link: '#',
};

export default function IdeasTradition() {
  return (
    <section id="ideas" className="section section-ideas">
      <div className="ideas-container">
        {/* Header */}
        <div className="ideas-header">
          <h2>Philosophical Ideas &amp; Tradition</h2>
          <a href="#" className="ideas-more-button">
            SEE ALL <span className="arrow">→</span>
          </a>
        </div>

        {/* Grid */}
        <div className="ideas-content">
          {ideas.map((item, i) => (
            <div key={i} className="ideas-card">
              <img src={item.img} alt={item.title} />
              <div className="ideas-card-overlay" />
              <div className="ideas-card-content">
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <a href={item.link} className="view-link">
                  view <span className="arrow">→</span>
                </a>
              </div>
            </div>
          ))}

          {/* featured */}
          <div className="ideas-card featured">
            <img src={featured.img} alt={featured.title} />
            <div className="ideas-card-overlay" />
            <div className="ideas-card-content">
              <h3>{featured.title}</h3>
              <p>{featured.excerpt}</p>
              <a href={featured.link} className="view-link">
                view <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
