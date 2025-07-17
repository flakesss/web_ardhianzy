// src/components/LatestVideos.jsx
import React, { useRef, useState, useEffect } from 'react';
import './LatestVideos.css';

const videos = [
  {
    id: 1,
    thumb: '/assets/course/01.png',
    date: '08 Feb 2024',
    title: 'Pemilu dan Demokrasi itu Salah! Menurut Para Filsuf',
    description: 'Sebuah pengantar singkat tentang pemikiran para filsuf mengenai demokrasi dan pemilu.',
    link: 'https://www.youtube.com/watch?v=_AiEQlK-ec0'
  },
  {
    id: 2,
    thumb: '/assets/course/02.png',
    date: '08 Feb 2024',
    title: 'Kebangkitan Penghancur Dunia',
    description: 'Biografi singkat Adolf Hitler dan dampak historisnya.',
    link: 'https://www.youtube.com/watch?v=gzv5A7v4ymI'
  },
  {
    id: 3,
    thumb: '/assets/course/03.png',
    date: '08 Feb 2024',
    title: 'Anime Terbaik 2023: Vinland Saga Season 2',
    description: 'Ulasan tentang anime Vinland Saga musim kedua yang sangat dinantikan.',
    link: 'https://www.youtube.com/watch?v=M13URqx_WzQ'
  },
  {
    id: 4,
    thumb: '/assets/course/04.png',
    date: '08 Feb 2024',
    title: '“Tuhan Telah Mati” – Nietzsche',
    description: 'Penjelasan konteks dari kutipan terkenal Friedrich Nietzsche.',
    link: 'https://www.youtube.com/watch?v=BS-HtBfH3nw'
  },
  {
    id: 5,
    thumb: '/assets/course/05.png',
    date: '08 Feb 2024',
    title: 'Bagaimana Kekaisaran Mongol Hancur?',
    description: 'Membedah faktor-faktor yang menyebabkan runtuhnya Kekaisaran Mongol.',
    link: 'https://www.youtube.com/watch?v=U7sBVFMVLjw'
  },
  // … dst …
];

export default function LatestVideos({ onSeeAll }) {
  const carouselRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const updateArrows = () => {
      setCanLeft(el.scrollLeft > 0);
      setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    };
    updateArrows();
    el.addEventListener('scroll', updateArrows);
    return () => el.removeEventListener('scroll', updateArrows);
  }, []);

  const pan = (offset) => {
    carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section id="latest-videos" className="latest-videos-section">
      <div className="latest-videos-container">
        <div className="latest-videos-header">
          <h2>Check Our Latest Videos</h2>
          <button className="btn outline-btn latest-videos-more" onClick={onSeeAll}>
            SEE ALL →
          </button>
        </div>

        <div className="latest-videos-carousel-wrapper">
          {canLeft && (
            <button
              className="latest-videos-arrow left"
              onClick={() => pan(-300)}
              aria-label="Prev"
            >
              ‹
            </button>
          )}

          <div className="latest-videos-carousel" ref={carouselRef}>
            {videos.map((v) => (
              <div key={v.id} className="latest-videos-card">
                <div className="latest-videos-thumb">
                  <img src={v.thumb} alt={v.title} />
                </div>
                <div className="latest-videos-info">
                  <div className="latest-videos-date">{v.date}</div>
                  <h3
                    className="latest-videos-title"
                    onClick={() => window.open(v.link, '_blank')}
                  >
                    {v.title}
                  </h3>
                  <p className="latest-videos-desc">{v.description}</p>
                </div>
              </div>
            ))}
          </div>

          {canRight && (
            <button
              className="latest-videos-arrow right"
              onClick={() => pan(300)}
              aria-label="Next"
            >
              ›
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
