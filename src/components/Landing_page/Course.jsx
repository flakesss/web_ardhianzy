// src/components/Course.jsx
import React, { useMemo, useState, useEffect } from 'react';
import './Course.css';

const courseData = [
  {
    img: '/assets/course/09.png',
    mainTitle: 'Kebenaran Sudah Mati, Inilah Dunia Postmodern! Dari Nietzsche Hingga Foucault',
    subTitle: 'PHILOSOPHY 101',
    date: '08 Feb 2024',
    excerpt: 'Season 2 anime Vinland Saga menjadi anime terbaik tahun lalu…',
  },
  {
    img: '/assets/course/08.png',
    mainTitle: 'Dari Kesadaran Hingga Revolusi, Dari Idealisme Hegel Hingga Materialisme Marx ',
    subTitle: 'PHILOSOPHY 101',
    date: '08 Feb 2024',
    excerpt: '“Tuhan telah mati. Tuhan tetap mati. Dan kita telah membunuhnya.”…',
  },{
    img: '/assets/course/07.png',
    mainTitle: 'Bagaimana Kita Tahu Apa Yang Kita Tahu? | Epistemologi Descartes, Hume dan Kant ',
    subTitle: 'PHILOSOPHY 101',
    date: '08 Feb 2024',
    excerpt: '“Tuhan telah mati. Tuhan tetap mati. Dan kita telah membunuhnya.”…',
  },{
    img: '/assets/course/06.png',
    mainTitle: 'Filsafat Politik Yang Mengubah Sejarah! Machiavelli, Hobbes, Locke, dan Rousseau',
    subTitle: 'PHILOSOPHY 101',
    date: '08 Feb 2024',
    excerpt: '“Tuhan telah mati. Tuhan tetap mati. Dan kita telah membunuhnya.”…',
  },
];

function CourseCard({ img, displayTitle, subTitle, date, excerpt }) {

  return (
    <div className="course-card">
      <div className="course-card-img">
        <img src={img} alt={displayTitle} />
        <div className="play-icon" />
      </div>
      <h3 className="course-card-title">
        {displayTitle}
      </h3>
      <p className="course-card-subtitle">{subTitle}</p>
      <p className="course-card-date">{date}</p>
      <p className="course-card-excerpt">{excerpt}</p>
    </div>
  );
}

export default function Course() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= 768);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const countWords = (t) => t.trim().split(/\s+/).filter(Boolean).length;
  const truncateByWords = (t, maxWords) => {
    const words = t.trim().split(/\s+/);
    if (words.length <= maxWords) return t;
    return words.slice(0, maxWords).join(' ') + '…';
  };

  // Truncate excerpt by sentences (max 4 sentences on mobile)
  const splitSentences = (text) => (text.match(/[^.!?]+[.!?]*/g) || [text]).map(s => s.trim()).filter(Boolean);
  const truncateToSentences = (text, limit) => {
    const parts = splitSentences(text);
    if (parts.length <= limit) return text;
    return parts.slice(0, limit).join(' ').trim() + '…';
  };

  const titleWordLimit = useMemo(() => countWords(courseData[0].mainTitle), []);

  return (
    <section id="course" className="section section-course">
      <div className="course-container">
        <div className="course-header">
          <h2>Membership Course</h2>
          <a href="#" className="course-more-button">
            SEE ALL <span className="arrow">→</span>
          </a>
        </div>

        <p className="course-subtext">
          Access more Philosophy101 videos. Join{' '}
          <a href="#" className="membership-link">membership</a>{' '}
          today
        </p>

        <div
          className="course-content"
          onScroll={(e) => {
            const el = e.currentTarget;
            const cardWidth = 260 + 16;
            const idx = Math.round(el.scrollLeft / cardWidth);
            const dots = document.querySelectorAll('.course-dot');
            dots.forEach((d, i) => d.classList.toggle('active', i === idx));
          }}
        >
          {courseData.map((item, i) => {
            // Title truncation: prefer sentence cap (4 sentences) on mobile, fallback to word cap
            let displayTitle = item.mainTitle;
            if (isMobile) {
              const titleBySentences = truncateToSentences(item.mainTitle, 4);
              if (titleBySentences !== item.mainTitle) {
                displayTitle = titleBySentences;
              } else {
                displayTitle = truncateByWords(item.mainTitle, titleWordLimit);
              }
            }
            const displayExcerpt = isMobile
              ? truncateToSentences(item.excerpt, 4)
              : item.excerpt;
            return (
              <CourseCard
                key={i}
                img={item.img}
                displayTitle={displayTitle}
                subTitle={item.subTitle}
                date={item.date}
                excerpt={displayExcerpt}
              />
            );
          })}
        </div>
        <div className="course-dots" aria-hidden>
          {courseData.map((_, i) => (
            <span key={i} className={`course-dot ${i===0 ? 'active' : ''}`}></span>
          ))}
        </div>
      </div>
    </section>
  );
}
