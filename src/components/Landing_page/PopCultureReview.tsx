// src/components/PopCultureReview.jsx
import React from 'react';
import './PopCultureReview.css';

const reviews = [
  {
    img: 'src/assets/pop/pop1.jpg',
    title: 'LOREM IPSUM DOLOR SIT',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    link: '#',
  },
  {
    img: 'src/assets/pop/pop2.jpg',
    title: 'LOREM IPSUM DOLOR SIT',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    link: '#',
  },
  {
    img: 'src/assets/pop/pop3.jpg',
    title: 'LOREM IPSUM DOLOR SIT',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    link: '#',
  },
  {
    img: 'src/assets/pop/pop4.jpg',
    title: 'LOREM IPSUM DOLOR SIT',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    link: '#',
  },
];

const featured = {
  img: 'src/assets/pop/pop-featured.jpg',
  title: 'LOREM IPSUM DOLOR SIT',
  excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
  link: '#',
};

export default function PopCultureReview() {
  return (
    <section id="pop-culture" className="section section-pop-culture">
      <div className="pop-container">
        {/* Header */}
        <div className="pop-header">
          <h2>Pop-Culture Review</h2>
          <a href="#" className="pop-more-button">
            SEE ALL <span className="arrow">→</span>
          </a>
        </div>

        {/* Grid */}
        <div className="pop-content">
          {reviews.map((item, i) => (
            <div key={i} className="pop-card">
              <img src={item.img} alt={item.title} />
              <div className="pop-card-overlay" />
              <div className="pop-card-content">
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <a href={item.link} className="view-link">
                  view <span className="arrow">→</span>
                </a>
              </div>
            </div>
          ))}

          {/* Featured card */}
          <div className="pop-card featured">
            <img src={featured.img} alt={featured.title} />
            <div className="pop-card-overlay" />
            <div className="pop-card-content">
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
