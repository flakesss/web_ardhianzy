// src/components/ShopPage/ShopTitle.jsx
import React from 'react';
import './ShopTitle.css';

export default function ShopTitle() {
  // Ganti path ini sesuai lokasi file Anda di public folder
  const imagePath = 'src/assets/Shop/background_assets_Shop.png';

  return (
    <div
      className="shop-title"
      style={{
        backgroundImage: `
          linear-gradient(to top, rgba(0,0,0,0.7), transparent),
          url('${imagePath}')
        `
      }}
    >
      <div className="shop-title__content">
        <h1 className="shop-title__title">ARDHIANZY SHOP</h1>
        <p className="shop-title__subtitle">
          We offer merchandise and books on philosophy to psychology
        </p>
      </div>
    </div>
  );
}
