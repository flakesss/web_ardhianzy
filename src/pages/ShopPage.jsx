import React from 'react';
import ShopTitle from '../components/Shop_page/ShopTitle';
import ShopItem  from '../components/Shop_page/ShopItem';
import './ShopPage.css';

export default function ShopPage() {
  // Contoh data produk (ganti dengan data asli Anda nanti)
  const products = Array(12).fill(null).map((_, idx) => ({
    id: idx,
    image: `/assets/product${(idx % 3) + 1}.jpg`, // path ke aset foto item Anda
    title: 'Lorem',
    category: 'Merch - Hat',
    author: 'Ardhianzy',
    price: 'Rp. 100.000'
  }));

  return (
    <main className="shop-page">
      <div className="page-content-wrapper">
        <ShopTitle />

        <div className="shop-items-grid">
          {products.map(item => (
            <ShopItem
              key={item.id}
              imageSrc={item.image}
              title={item.title}
              category={item.category}
              author={item.author}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
