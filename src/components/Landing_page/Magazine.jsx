import React, { useEffect, useMemo, useState } from 'react';
import './Magazine.css';

const Magazine = () => {
  // Tentukan mobile viewport
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= 768);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Helper pemotong kalimat
  const splitSentences = (text) => (text.match(/[^.!?]+[.!?]*/g) || [text]).map(s => s.trim()).filter(Boolean);
  const truncateToSentences = (text, limit) => {
    const parts = splitSentences(text);
    if (parts.length <= limit) return text;
    return parts.slice(0, limit).join(' ').trim() + '…';
  };

  // Sumber teks excerpt
  const bigExcerptSrc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  const smallExcerpt1Src = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna';
  const smallExcerpt2Src = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna';

  // Patok jumlah kalimat dari small card pertama
  const mobileSentenceLimit = useMemo(() => {
    const n = splitSentences(smallExcerpt1Src).length;
    return Math.max(1, n);
  }, []);

  const bigExcerpt = isMobile ? truncateToSentences(bigExcerptSrc, mobileSentenceLimit) : bigExcerptSrc;
  const smallExcerpt1 = isMobile ? truncateToSentences(smallExcerpt1Src, mobileSentenceLimit) : smallExcerpt1Src;
  const smallExcerpt2 = isMobile ? truncateToSentences(smallExcerpt2Src, mobileSentenceLimit) : smallExcerpt2Src;

  // Title sources
  const bigTitleSrc = 'LOREM IPSUM DOLOR SIT';
  const smallTitle1Src = 'LOREM IPSUM DOLOR SIT';
  const smallTitle2Src = 'LOREM IPSUM DOLOR SIT';

  // Helper truncate by words for title
  const countWords = (t) => t.trim().split(/\s+/).filter(Boolean).length;
  const truncateByWords = (t, maxWords) => {
    const words = t.trim().split(/\s+/);
    if (words.length <= maxWords) return t;
    return words.slice(0, maxWords).join(' ') + '…';
  };
  const titleWordLimit = useMemo(() => countWords(smallTitle1Src), []);
  const bigTitle = isMobile ? truncateByWords(bigTitleSrc, titleWordLimit) : bigTitleSrc;
  const smallTitle1 = isMobile ? truncateByWords(smallTitle1Src, titleWordLimit) : smallTitle1Src;
  const smallTitle2 = isMobile ? truncateByWords(smallTitle2Src, titleWordLimit) : smallTitle2Src;

  return (
    <section id="magazine" className="section section-magazine">
      {/* Blur Background Effect */}
      <div className="magazine-blur-bg"></div>
      
      <div className="magazine-container">
        <div className="magazine-header">
          <h2>Check Our Magazine</h2>
            <p className="magazine-subtitle">A series of very short stories for the summer.</p>
          <a href="#" className="magazine-more-button">
            MORE MAGAZINE <span className="arrow">→</span>
          </a>
        </div>

        <div className="magazine-content" onScroll={(e) => {
          const el = e.currentTarget;
          const idx = Math.round(el.scrollLeft / (el.clientWidth * 0.0 + 265));
          const dots = document.querySelectorAll('.magazine-dot');
          dots.forEach((d, i) => d.classList.toggle('active', i === idx));
        }}>
          {/* Large Card */}
          <div className="magazine-card-large">
            <div className="magazine-card-large-img">
              <img
                src="/assets/magazine/Rectangle 4558.png"
                alt="Man standing in front of a painting"
              />
            </div>
            <div className="magazine-card-large-content">
              <h3>{bigTitle}</h3>
              <p className="excerpt">{bigExcerpt}</p>
              <p className="author">By Lorem</p>
              <a href="#" className="read-more">Continue Read &gt;&gt;</a>
            </div>
          </div>

          {/* Small Cards (wrapped for better mobile layout) */}
          <div className="magazine-small-list">
            {/* Small Card 1 */}
            <div className="magazine-card-small">
              <div className="magazine-card-small-img">
                <img
                  src="/assets/magazine/Rectangle 4528.png"
                  alt="Apple on a stand"
                />
              </div>
              <div className="magazine-card-small-content">
                <h3>{smallTitle1}</h3>
                <p className="excerpt">{smallExcerpt1}</p>
                <p className="author">By Bla Bla Bla</p>
              </div>
            </div>

            {/* Small Card 2 */}
            <div className="magazine-card-small">
              <div className="magazine-card-small-img">
                <img
                  src="/assets/magazine/Rectangle 4529.png"
                  alt="People in a painting"
                />
              </div>
              <div className="magazine-card-small-content">
                <h3>{smallTitle2}</h3>
                <p className="excerpt">{smallExcerpt2}</p>
                <p className="author">By Bla Bla Bla</p>
              </div>
            </div>
          </div>
        </div>
        <div className="magazine-dots" aria-hidden>
          <span className="magazine-dot active"></span>
          <span className="magazine-dot"></span>
          <span className="magazine-dot"></span>
        </div>
      </div>
    </section>
  );
};

export default Magazine;
