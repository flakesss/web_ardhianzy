// src/components/Course.jsx
import React, { useState } from 'react';
import './Course.css';

const courseData = [
  {
    img: 'src/assets/course/09.png',
    mainTitle: 'Kebenaran Sudah Mati, Inilah Dunia Postmodern! Dari Nietzsche Hingga Foucault',
    subTitle: 'PHILOSOPHY 101',
    date: '08 Feb 2024',
    excerpt: 'Season 2 anime Vinland Saga menjadi anime terbaik tahun lalu…',
  },
  {
    img: 'src/assets/course/08.png',
    mainTitle: 'Dari Kesadaran Hingga Revolusi, Dari Idealisme Hegel Hingga Materialisme Marx ',
    subTitle: 'PHILOSOPHY 101',
    date: '08 Feb 2024',
    excerpt: '“Tuhan telah mati. Tuhan tetap mati. Dan kita telah membunuhnya.”…',
  },{
    img: 'src/assets/course/07.png',
    mainTitle: 'Bagaimana Kita Tahu Apa Yang Kita Tahu? | Epistemologi Descartes, Hume dan Kant ',
    subTitle: 'PHILOSOPHY 101',
    date: '08 Feb 2024',
    excerpt: '“Tuhan telah mati. Tuhan tetap mati. Dan kita telah membunuhnya.”…',
  },{
    img: 'src/assets/course/06.png',
    mainTitle: 'Filsafat Politik Yang Mengubah Sejarah! Machiavelli, Hobbes, Locke, dan Rousseau',
    subTitle: 'PHILOSOPHY 101',
    date: '08 Feb 2024',
    excerpt: '“Tuhan telah mati. Tuhan tetap mati. Dan kita telah membunuhnya.”…',
  },
];

function CourseCard({ img, mainTitle, subTitle, date, excerpt }) {
  const [expanded, setExpanded] = useState(false);
  const maxChars = 30;
  const isLong = mainTitle.length > maxChars;
  const displayTitle = !expanded && isLong
    ? mainTitle.slice(0, maxChars).trim()
    : mainTitle;

  return (
    <div className="course-card">
      <div className="course-card-img">
        <img src={img} alt={mainTitle} />
        <div className="play-icon" />
      </div>
      <h3 className="course-card-title">
        {displayTitle}
        {isLong && !expanded && (
          <button
            className="expand-title-btn"
            onClick={() => setExpanded(true)}
            aria-label="Show full title"
          >…</button>
        )}
      </h3>
      <p className="course-card-subtitle">{subTitle}</p>
      <p className="course-card-date">{date}</p>
      <p className="course-card-excerpt">{excerpt}</p>
    </div>
  );
}

export default function Course() {
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

        <div className="course-content">
          {courseData.map((item, i) => (
            <CourseCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
