import React, { useRef, useState, useEffect } from 'react';
import './Shops.css';

const shopData = [
  { img: '/assets/Shop/topi.png', name: 'LOREM', type: 'Merch • Hat', author: 'Ardhianzy', price: 'Rp. 100.000' },
  { img: '/assets/Shop/topi.png', name: 'LOREM', type: 'Merch • Hat', author: 'Ardhianzy', price: 'Rp. 100.000' },
  { img: '/assets/Shop/topi.png', name: 'LOREM', type: 'Merch • Hat', author: 'Ardhianzy', price: 'Rp. 100.000' },
  { img: '/assets/Shop/topi.png', name: 'LOREM', type: 'Merch • Hat', author: 'Ardhianzy', price: 'Rp. 100.000' },
  { img: '/assets/Shop/topi.png', name: 'LOREM', type: 'Merch • Hat', author: 'Ardhianzy', price: 'Rp. 100.000' },
  { img: '/assets/Shop/topi.png', name: 'LOREM', type: 'Merch • Hat', author: 'Ardhianzy', price: 'Rp. 100.000' },
  { img: '  /assets/Shop/topi.png', name: 'LOREM', type: 'Merch • Hat', author: 'Ardhianzy', price: 'Rp. 100.000' },
  { img: '/assets/Shop/topi.png', name: 'LOREM', type: 'Merch • Hat', author: 'Ardhianzy', price: 'Rp. 100.000' },
  { img: '/assets/Shop/topi.png', name: 'LOREM', type: 'Merch • Hat', author: 'Ardhianzy', price: 'Rp. 100.000' },

];

export default function Shops() {
  const listRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  // Cek visibility tombol nav
  const checkButtons = () => {
    const el = listRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 0);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    checkButtons();
  }, []);

  // Drag-to-scroll handlers
  const onMouseDown = e => {
    const el = listRef.current;
    setIsDown(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeft(el.scrollLeft);
  };
  const onMouseLeave = () => setIsDown(false);
  const onMouseUp = () => setIsDown(false);
  const onMouseMove = e => {
    if (!isDown) return;
    e.preventDefault();
    const el = listRef.current;
    const x = e.pageX - el.offsetLeft;
    const walk = x - startX;
    el.scrollLeft = scrollLeft - walk;
    checkButtons();
  };

  const handlePrev = () => {
    const el = listRef.current;
    el.scrollBy({ left: -el.clientWidth, behavior: 'smooth' });
  };
  const handleNext = () => {
    const el = listRef.current;
    el.scrollBy({ left: el.clientWidth, behavior: 'smooth' });
  };

  return (
    <section id="shops" className="section section-shops">
      <div className="shops-container">
        <div className="shops-header">
          <h2>Shops</h2>
          <a href="#" className="shops-more">
            SEE ALL <span className="arrow">→</span>
          </a>
        </div>

        <div className="shops-list-wrapper">
          {canPrev && (
            <button className="shops-prev" onClick={handlePrev} aria-label="Previous">
              ‹
            </button>
          )}

          <div
            className="shops-list"
            ref={listRef}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            onScroll={checkButtons}
          >
            {shopData.map((item, i) => (
              <div key={i} className="shop-card">
                <div className="shop-img">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="shop-details">
                  <h3 className="shop-name">{item.name}</h3>
                  <p className="shop-type">{item.type}</p>
                  <p className="shop-author">{item.author}</p>
                  <p className="shop-price">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          {canNext && (
            <button className="shops-next" onClick={handleNext} aria-label="Next">
              ›
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
