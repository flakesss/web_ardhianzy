import React, { useState } from 'react';
import './MagazineCollection.css';

const MagazineCollection = () => {
  const [articles] = useState([
    {
      id: 1,
      title: 'LOREM IPSUM DOLOR SIT',
      author: 'Lorem',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'src/assets/magazine/Rectangle 4558.png'
    },
    {
      id: 2,
      title: 'LOREM IPSUM DOLOR SIT',
      author: 'Lorem',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'src/assets/magazine/Rectangle 4528.png'
    },
    {
      id: 3,
      title: 'LOREM IPSUM DOLOR SIT',
      author: 'Lorem',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'src/assets/magazine/Rectangle 4558.png'
    },
    {
      id: 4,
      title: 'LOREM IPSUM DOLOR SIT',
      author: 'Lorem',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'src/assets/magazine/Rectangle 4528.png'
    },
    {
      id: 5,
      title: 'LOREM IPSUM DOLOR SIT',
      author: 'Lorem',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'src/assets/magazine/Rectangle 4558.png'
    },
    {
      id: 6,
      title: 'LOREM IPSUM DOLOR SIT',
      author: 'Lorem',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'src/assets/magazine/Rectangle 4528.png'
    },
    {
      id: 7,
      title: 'LOREM IPSUM DOLOR SIT',
      author: 'Lorem',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'src/assets/magazine/Rectangle 4558.png'
    },
    {
      id: 8,
      title: 'LOREM IPSUM DOLOR SIT',
      author: 'Lorem',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'src/assets/magazine/Rectangle 4528.png'
    },
    {
      id: 9,
      title: 'LOREM IPSUM DOLOR SIT',
      author: 'Lorem',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'src/assets/magazine/Rectangle 4558.png'
    },
    {
      id: 10,
      title: 'LOREM IPSUM DOLOR SIT',
      author: 'Lorem',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'src/assets/magazine/Rectangle 4528.png'
    },
    {
      id: 11,
      title: 'LOREM IPSUM DOLOR SIT',
      author: 'Lorem',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'src/assets/magazine/Rectangle 4558.png'
    },
    {
      id: 12,
      title: 'LOREM IPSUM DOLOR SIT',
      author: 'Lorem',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'src/assets/magazine/Rectangle 4528.png'
    },
    {
      id: 13,
      title: 'LOREM IPSUM DOLOR SIT',
      author: 'Lorem',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'src/assets/magazine/Rectangle 4558.png'
    }
  ]);

  // 1 batch = 4.5 × 420px
  const BATCH_HEIGHT = 420 * 4.5; // = 1890
  const [pages, setPages] = useState(1);

  // tinggi container saat ini
  const visibleHeight = BATCH_HEIGHT * pages;
  const totalHeight   = articles.length * 420; // total if all rows full height
  const canLoadMore   = visibleHeight < totalHeight;

  const handleLoadMore = () => {
    setPages(prev => prev + 1);
  };

  return (
    <section className="magazine-collection">
      <h2 className="magazine-collection__title">PREVIOUS MAGAZINE</h2>

      <div
        className="magazine-collection__articles"
        style={{
          maxHeight: `${visibleHeight}px`,
          overflow:  'hidden'
        }}
      >
        {articles.map(article => (
          <article
            key={article.id}
            className="magazine-collection__article"
          >
            <div className="magazine-collection__image-wrapper">
              <img
                src={article.image}
                alt={article.title}
                className="magazine-collection__image"
              />
            </div>

            <div className="magazine-collection__content">
              <h3 className="magazine-collection__article-title">
                {article.title}
              </h3>
              <p className="magazine-collection__author">
                By {article.author}
              </p>
              <p className="magazine-collection__description">
                {article.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {canLoadMore && (
        <button
          className="magazine-collection__load-more"
          onClick={handleLoadMore}
        >
          <span className="magazine-collection__load-more-text">
            LOAD MORE...
          </span>
        </button>
      )}
    </section>
  );
};

export default MagazineCollection;