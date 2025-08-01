// src/pages/admin/AdminDashboardPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { allArticles } from '../../data/articles.js'; // Menggunakan data yang ada
import './Admin.css';

export default function AdminDashboardPage() {
  // Di aplikasi nyata, data ini akan diambil dari API
  const totalArticles = allArticles.length;
  const totalUsers = 1; // Contoh data statis

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Selamat datang di panel admin. Dari sini Anda dapat mengelola konten website.</p>
      
      <div className="admin-stats-container">
        <div className="admin-stat-card">
          <h3>Total Artikel</h3>
          <p className="admin-stat-number">{totalArticles}</p>
          <Link to="/admin/articles" className="admin-stat-link">Kelola Artikel &rarr;</Link>
        </div>
        <div className="admin-stat-card">
          <h3>Total Pengguna</h3>
          <p className="admin-stat-number">{totalUsers}</p>
           <a href="#manage-users" onClick={(e) => e.preventDefault()} className="admin-stat-link disabled-link">Kelola Pengguna (Segera)</a>
        </div>
      </div>

      <h3>Manajemen Artikel</h3>
      <p>Gunakan tabel di bawah untuk melihat, mengedit, atau menghapus artikel yang ada.</p>
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
            {allArticles.slice(0, 5).map(article => ( // Hanya menampilkan 5 untuk contoh
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
        <div className="admin-table-footer">
            <Link to="/admin/articles" className="admin-view-all-button">Lihat Semua Artikel</Link>
        </div>
      </div>
    </div>
  );
}
