// src/pages/admin/AdminListItemPage.jsx
import React from 'react';
import './Admin.css';

export default function AdminListItemPage() {
  return (
    <div>
      <h2>Item List</h2>
      <p>Daftar semua item yang ada di toko.</p>
      <div className="admin-table-container">
        {/* Tabel untuk daftar item akan ditambahkan di sini */}
        <p style={{padding: '20px'}}>Item table will be here.</p>
      </div>
    </div>
  );
}
