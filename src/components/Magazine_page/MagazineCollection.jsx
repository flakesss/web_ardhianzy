
import React, { useState } from 'react'; // Impor useState
import './MagazineCollection.css';

const articles = [
 {
    id: 1,
    title: 'LOREM IPSUM DOLOR SIT',
    author: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/assets/download (28).jpeg'
  },
  {
    id: 2,
    title: 'LOREM IPSUM DOLOR SIT',
    author: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/assets/magazine/Rectangle 4528.png'
  },
  {
    id: 3,
    title: 'LOREM IPSUM DOLOR SIT',
    author: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/assets/download (28).jpeg'
  },
  {
    id: 4,
    title: 'LOREM IPSUM DOLOR SIT',
    author: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/assets/magazine/Rectangle 4528.png'
  },
  {
    id: 5,
    title: 'LOREM IPSUM DOLOR SIT',
    author: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/assets/download (28).jpeg'
  },
];

const MagazineCollection = () => {
  // State untuk mengontrol visibilitas artikel
  const [isExpanded, setIsExpanded] = useState(false);

  // Batas artikel awal adalah 4
  const visibleArticles = isExpanded ? articles : articles.slice(0, 4);

  const handleLoadMore = () => {
    setIsExpanded(true);
  };

  return (
    <section className="magazine-collection">
      <div className="magazine-collection__list-container">
        <h2 className="magazine-collection__main-title">PREVIOUS MAGAZINE</h2>
        
        <div className="magazine-collection__list">
          {/* Gunakan 'visibleArticles' untuk me-render artikel */}
          {visibleArticles.map(article => (
            <article key={article.id} className="magazine-collection__article">
              <div className="magazine-collection__image-container">
                <img src={article.image} alt={article.title} className="magazine-collection__image" />
              </div>
              <div className="magazine-collection__content-container">
                <h3 className="magazine-collection__article-title">{article.title}</h3>
                <p className="magazine-collection__article-author">By {article.author}</p>
                <p className="magazine-collection__article-description">{article.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* --- BAGIAN LOAD MORE BARU --- */}
        {/* Tampilkan tombol hanya jika belum di-expand dan ada lebih dari 4 artikel */}
        {!isExpanded && articles.length > 4 && (
          <div className="magazine-collection__load-more-container">
            <button 
              className="magazine-collection__load-more-button" 
              onClick={handleLoadMore}
            >
              LOAD MORE...
            </button>
          </div>
        )}
        {/* --------------------------- */}
      </div>
    </section>
  );
};

export default MagazineCollection;