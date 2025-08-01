// src/pages/admin/AdminArticlePage.jsx
import React from 'react';
import { allArticles } from '../../data/articles.js';
import './Admin.css';

export default function AdminArticlePage() {
  return (
    <div>
      <h2>Manage Articles</h2>
      <p>Tambahkan, edit, atau hapus artikel dari sini.</p>
      
      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Judul</th>
              <th>Kategori</th>
              <th>Tanggal</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {allArticles.map(article => (
              <tr key={article.id}>
                <td>{article.title}</td>
                <td>{article.category}</td>
                <td>{article.date}</td>
                <td>
                  <button className="admin-action-button edit">Edit</button>
                  <button className="admin-action-button delete">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
