// src/components/shop_page/ShopItem.jsx
import React, { useState } from 'react';
import './ShopItem.css';
import ProductDetailPopup from './ProductDetailPopup';
import { products } from '../../data/products';

const FilterSidebar = ({ products, selectedFilters, setSelectedFilters }) => {
  // ... (Tidak ada perubahan di sini, biarkan sama)
  const categories = ['All', ...new Set(products.map(product => product.category))];
  const themes = ['All', ...new Set(products.map(product => product.theme))];

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  return (
    <aside className="filter-sidebar">
      <h2 className="filter-sidebar__main-title">Filter</h2>
      <div className="filter-group">
        <h3 className="filter-sidebar__sub-title">Product</h3>
        <ul className="filter-options-list">
          {categories.map(option => (
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
      <div className="filter-group">
        <h3 className="filter-sidebar__sub-title">Theme</h3>
        <ul className="filter-options-list">
           {themes.map(option => (
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

export default function ShopItem() {
  const [selectedFilters, setSelectedFilters] = useState({
    product: 'All',
    theme: 'All',
  });
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter(product => {
    const productMatch = selectedFilters.product === 'All' || product.category === selectedFilters.product;
    const themeMatch = selectedFilters.theme === 'All' || product.theme === selectedFilters.theme;
    return productMatch && themeMatch;
  });

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  
  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  return (
    // -- 1. Tambahkan wrapper utama --
    <div className="shop-page-container">
      <div className="shop-background-gradient"></div>
      <div className="shop-background-image"></div>
      <div className="shop-background-asset-left"></div>

      <section className="shop-section-wrapper">
        <FilterSidebar 
          products={products}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
        <div className="etalase-wrapper">
          <div className="shop-items-grid">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="product-card" 
                onClick={() => handleProductClick(product)}
              >
                <img src={product.imageUrl} alt={product.title} className="product-card__image" />
                <div className="product-card__info">
                  <h3 className="product-card__title">{product.title}</h3>
                  <p className="product-card__author">{product.theme}</p>
                  <p className="product-card__price">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductDetailPopup 
          product={selectedProduct} 
          onClose={handleClosePopup} 
        />
      )}
    </div>
  );
}