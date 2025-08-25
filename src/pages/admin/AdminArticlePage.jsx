// src/pages/admin/AdminArticlePage.jsx
import React from 'react';
import './AdminListArticle.css'; // Menggunakan file CSS baru

// --- Komponen Ikon ---
const AddIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 4.58331V17.4166" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.58331 11H17.4166" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const RemoveIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const CloseIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


// --- Data Simulasi untuk Artikel ---
const initialArticles = [
  { id: 1, title: '“God is dead. God remain is dead”' },
  { id: 2, title: 'Artikel 2 lorem ipsum' },
  { id: 3, title: 'Artikel 3 lorem ipsum' },
  { id: 4, title: 'Artikel 4 lorem ipsum' },
  { id: 5, title: 'Artikel 5 lorem ipsum' },
];

export default function AdminArticlePage() {
  const [articles, setArticles] = React.useState(initialArticles);
  const [selectedArticleId, setSelectedArticleId] = React.useState(1); // Artikel pertama dipilih secara default

  const handleSelectArticle = (id) => {
    setSelectedArticleId(id);
  };
  
  const handleRemoveArticle = (idToRemove) => {
    setArticles(articles.filter(article => article.id !== idToRemove));
    // Jika artikel yang dihapus adalah yang terpilih, reset pilihan
    if (selectedArticleId === idToRemove) {
        // Pilih artikel pertama jika masih ada, jika tidak, null
        setSelectedArticleId(articles.length > 1 ? articles.filter(a => a.id !== idToRemove)[0].id : null);
    }
  };

  const handleAddNewArticle = () => {
    const newId = articles.length > 0 ? Math.max(...articles.map(a => a.id)) + 1 : 1;
    const newArticle = { id: newId, title: `Artikel baru ${newId}` };
    setArticles([...articles, newArticle]);
    setSelectedArticleId(newId); // Langsung pilih artikel yang baru dibuat
  };


  return (
    <div className="list-article-page">
      <div className="list-article-actions">
        <button className="action-btn">
          <AddIcon />
          <span>Add</span>
        </button>
        <button className="action-btn">
          <RemoveIcon />
          <span>Remove</span>
        </button>
        <button className="action-btn save-btn">
          <span>Save</span>
        </button>
      </div>

      <div className="list-article-container">
        <h3 className="list-article-title">Artikel</h3>
        <div className="articles-wrapper">
          {articles.map((article) => (
            <div
              key={article.id}
              className={`article-item ${selectedArticleId === article.id ? 'selected' : ''}`}
              onClick={() => handleSelectArticle(article.id)}
            >
              <div className="article-item-content">
                {article.title}
              </div>
              {selectedArticleId === article.id && (
                <button className="delete-article-btn" onClick={(e) => {
                    e.stopPropagation(); // Mencegah event click di parent (item)
                    handleRemoveArticle(article.id);
                }}>
                  <CloseIcon />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <button className="add-fab" onClick={handleAddNewArticle}>
        <AddIcon />
      </button>
    </div>
  );
}
