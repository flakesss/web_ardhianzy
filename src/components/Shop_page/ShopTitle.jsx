// src/components/shop_page/ShopTitle.jsx
import React from 'react';
import './ShopTitle.css';

export default function ShopTitle() {
  // GANTI URL_FOTO_BACKGROUND_ANDA DENGAN LINK ASET GAMBAR ANDA
  const backgroundImageUrl = '/assets/Shop/background_assets_Shop.png';

  return (
    <section 
      className="shop-title" 
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="shop-title__content">
        <h1 className="shop-title__title">Ardhianzy Shop</h1>
        <p className="shop-title__subtitle">
          We offer merchandise and books on philosophy to psychology.
        </p>
      </div>
    </section>
  );
}