import React, { useState, useEffect } from 'react'; // Import useState dan useEffect
import './ProductDetailPopup.css';

export default function ProductDetailPopup({ product, onClose }) {
  // --- BARU: State untuk melacak indeks gambar yang aktif ---
  const [currentIndex, setCurrentIndex] = useState(0);

  // Efek untuk mereset indeks ke 0 jika produk berubah
  useEffect(() => {
    setCurrentIndex(0);
  }, [product]);

  if (!product) {
    return null;
  }

  // Asumsi: produk memiliki array gambar bernama 'galleryImages'
  // Jika tidak ada, gunakan imageUrl sebagai fallback dalam sebuah array
  const galleryImages = product.galleryImages && product.galleryImages.length > 0 
    ? product.galleryImages 
    : [product.imageUrl];

  // --- BARU: Fungsi untuk navigasi galeri ---
  const handleNext = () => {
    // Pindah ke gambar berikutnya, kembali ke awal jika sudah di akhir
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    // Pindah ke gambar sebelumnya, pergi ke akhir jika sedang di awal
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleCardClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-card" onClick={handleCardClick}>
        
        <div className="popup__image-column">
          {/* --- DIUBAH: Sumber gambar sekarang dinamis --- */}
          <img src={galleryImages[currentIndex]} alt={`${product.title} - view ${currentIndex + 1}`} className="popup__product-image" />
          
          {/* --- DIUBAH: Navigasi galeri sekarang fungsional --- */}
          <div className="popup__gallery-nav">
            <button onClick={handlePrev} className="popup__gallery-arrow" aria-label="Previous Image">&larr;</button>
            <div className="dots">
              {galleryImages.map((_, index) => (
                <span 
                  key={index} 
                  className={`dot ${currentIndex === index ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)} // Opsional: buat titik bisa diklik
                ></span>
              ))}
            </div>
            <button onClick={handleNext} className="popup__gallery-arrow" aria-label="Next Image">&rarr;</button>
          </div>
        </div>

        <div className="popup__details-column">
          <div className="popup__title-group">
            <h1 className="popup__title">{product.title}</h1>
            <div className="popup__reviews">
              <span className="star">&#9733;</span>
              <span>5.0 (100 reviews)</span>
            </div>
          </div>
          
          <p className="popup__description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>

          <div className="popup__buy-group">
            <p className="popup__price">{product.price}</p>
            <button className="popup__buy-button">
              BUY NOW <span>&rarr;</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}