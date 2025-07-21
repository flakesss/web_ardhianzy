// src/components/shop_page/ShopItem.jsx
import React, { useState } from 'react'; // Impor useState
import './ShopItem.css';

// Data dummy produk (tidak berubah)
const products = [
  { id: 1, title: 'Lorem Hat', category: 'Merchandise', theme: 'Social', author: 'Ardhianzy', price: 'Rp. 100.000', imageUrl: '/assets/Shop/topi.png' },
  { id: 2, title: 'Ipsum Cap', category: 'Merchandise', theme: 'Relationship', author: 'Ardhianzy', price: 'Rp. 120.000', imageUrl: '/assets/Shop/topi.png' },
  { id: 3, title: 'Dolor Beanie', category: 'Merchandise', theme: 'Self-Improvement', author: 'Ardhianzy', price: 'Rp. 95.000', imageUrl: '/assets/Shop/topi.png' },
  { id: 4, title: 'Sit Amet Book', category: 'Books', theme: 'Social', author: 'John Doe', price: 'Rp. 150.000', imageUrl: '/assets/Shop/topi.png' },
  { id: 5, title: 'Consectetur E-Book', category: 'E-Books', theme: 'Relationship', author: 'Jane Doe', price: 'Rp. 110.000', imageUrl: '/assets/Shop/topi.png' },
  { id: 6, title: 'Adipiscing', category: 'Merchandise', theme: 'Social', author: 'Ardhianzy', price: 'Rp. 100.000', imageUrl: '/assets/Shop/topi.png' },
];

//Komponen Filter
const FilterSidebar = ({ selectedFilters, setSelectedFilters }) => {

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  return (
    <aside className="filter-sidebar">
      <h2 className="filter-sidebar__main-title">Filter</h2>
      {/* Nanti bisa ditambahkan fungsionalitas Sort di sini */}
      <div className="filter-sidebar__sort-section">
        <h3 className="filter-sidebar__sub-title">Sort</h3>
      </div>
      
      {/* Filter berdasarkan Produk */}
      <div className="filter-group">
        <h3 className="filter-sidebar__sub-title">Product</h3>
        <ul className="filter-options-list">
          {['All', 'Books', 'E-Books', 'Merchandise'].map(option => (
            <li key={option}>
              <label className="filter-option">
                <input 
                  type="radio" 
                  name="product" 
                  value={option} 
                  checked={selectedFilters.product === option}
                  onChange={() => handleFilterChange('product', option)}
                />
                <span className="custom-radio"></span>
                {option}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Filter berdasarkan Tema */}
      <div className="filter-group">
        <h3 className="filter-sidebar__sub-title">Theme</h3>
        <ul className="filter-options-list">
           {['All', 'Social', 'Relationship', 'Self-Improvement'].map(option => (
            <li key={option}>
              <label className="filter-option">
                <input 
                  type="radio" 
                  name="theme" 
                  value={option}
                  checked={selectedFilters.theme === option}
                  onChange={() => handleFilterChange('theme', option)}
                />
                <span className="custom-radio"></span>
                {option}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};


//  Komponen Utama 
export default function ShopItem() {
  const [selectedFilters, setSelectedFilters] = useState({
    product: 'All',
    theme: 'All',
  });

  const filteredProducts = products.filter(product => {
    const productMatch = selectedFilters.product === 'All' || product.category === selectedFilters.product;
    const themeMatch = selectedFilters.theme === 'All' || product.theme === selectedFilters.theme;
    return productMatch && themeMatch;
  });

  return (
    <section className="shop-section-wrapper">
      <FilterSidebar 
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <div className="etalase-wrapper">
        <div className="shop-items-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.imageUrl} alt={product.title} className="product-card__image" />
              <div className="product-card__info">
                <h3 className="product-card__title">{product.title}</h3>
                <p className="product-card__category">{product.category}</p>
                <p className="product-card__author">{product.author}</p>
                <p className="product-card__price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}