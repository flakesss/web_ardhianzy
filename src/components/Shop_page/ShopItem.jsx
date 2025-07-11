// src/components/ShopPage/ShopItem.jsx
import React from 'react';
import './ShopItem.css';

export default function ShopItem({
  imageSrc = 'src/assets/Shop/Rectangle 4514.png',   // ganti dengan path/URL foto produk Anda
  title = 'Lorem',
  category = 'Merch - Hat',
  author = 'Ardhianzy',
  price = 'Rp. 100.000'
}) {
  return (
    <div className="shop-item">
      <div className="shop-item__image-wrapper">
        <img
          src={imageSrc}
          alt={title}
          className="shop-item__image"
        />
      </div>
      <div className="shop-item__info">
        <h2 className="shop-item__title">{title}</h2>
        <p className="shop-item__category">{category}</p>
        <p className="shop-item__author">{author}</p>
        <p className="shop-item__price">{price}</p>
      </div>
    </div>
  );
}
