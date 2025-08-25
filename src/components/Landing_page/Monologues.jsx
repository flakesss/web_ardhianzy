import React, { useEffect, useRef } from 'react';
import './Monologues.css';

const monoData = [
  {
    img: '/assets/monologues/Desain tanpa judul.png',
    title: 'LOREM IPSUM DOLOR SIT',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna',
    author: 'By bla bla bla',
  },
  {
    img: '/assets/monologues/mono1.png',
    title: 'LOREM IPSUM DOLOR SIT',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna',
    author: 'By bla bla bla',
  },
  {
    img: '/assets/monologues/mono2.png',
    title: 'LOREM IPSUM DOLOR SIT',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna',
    author: 'By bla bla bla',
  }
];

export default function Monologues () {
  const trackRef = useRef(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    // Paksa ke awal setelah layout siap
    const id = requestAnimationFrame(() => {
      el.scrollLeft = 0;
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section id="monologues" className="section section-monologues">
      <div className="monologues-container">
        <div className="monologues-header">
          <h2>Collected Monologues</h2>
          <a href="#" className="monologues-more-button">
            MORE MONOLOGUES <span className="arrow">→</span>
          </a>
        </div>

        <div
          className="monologues-content"
          ref={trackRef}
          onScroll={(e) => {
            const el = e.currentTarget;
            const gap = 24; // sync with CSS gap
            const cardWidth = 314 + gap; // lebar kartu total
            const idx = Math.round(el.scrollLeft / cardWidth);
            const dots = document.querySelectorAll('.monologues-dot');
            dots.forEach((d, i) => d.classList.toggle('active', i === idx));
          }}
        >
          {monoData.map((item, i) => (
            <div key={i} className="monologue-card">
              <div className="monologue-img">
                <img src={item.img} alt={item.title} />
              </div>
              <h3 className="monologue-title">{item.title}</h3>
              <p className="monologue-excerpt">{item.excerpt}</p>
              <p className="monologue-author">{item.author}</p>
            </div>
          ))}

          <div className="monologue-card featured"
                style={{
                    backgroundImage: "url('/assets/monologues/Group 5020.svg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                        }}>
            <h3 className="monologue-title featured-title">
              LOREM IPSUM DOLOR SIT
            </h3>
            <div className="monologue-img featured-img">
              <img src="/assets/monologues/mono3.png " alt="Featured" />
            </div>
            <p className="monologue-excerpt featured-excerpt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
            </p>
            <p className="monologue-author featured-author">By bla bla bla</p>
            <p className="monologue-price">Rp. 50.000</p>
          </div>
        </div>
        <div className="monologues-dots" aria-hidden>
          {monoData.map((_, i) => (
            <span key={i} className={`monologues-dot ${i===0 ? 'active' : ''}`}></span>
          ))}
        </div>
      </div>
    </section>
  );
}
