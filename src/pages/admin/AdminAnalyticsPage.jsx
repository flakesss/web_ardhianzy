// src/pages/admin/AdminAnalyticsPage.jsx
import React from 'react'; // Import React
import { useLocation } from 'react-router-dom';
// Pastikan path ke data artikel sudah benar
import { allArticles } from '../../data/articles.js'; 
// Impor file CSS yang baru
import './AdminAnalytics.css'; 

// --- HEADER DIHAPUS: Header sekarang menjadi bagian dari AdminLayout ---
// --- Komponen Ikon untuk header (SearchIcon, DropdownIcon) juga dihapus ---


// --- Komponen Section ---
// Komponen untuk setiap bagian analitik tetap sama
const WebPerformanceSection = () => (
  <div id="web-performance" className="admin-section">
    <h3>Web Performance</h3>
    <p>Grafik dan data mengenai performa website akan ditampilkan di sini.</p>
    <div className="placeholder-chart">Chart Placeholder</div>
  </div>
);

const ArticleAnalyticsSection = () => (
  <div id="article-analytics" className="admin-section">
    <h3>Article Analytics</h3>
    <p>Statistik mengenai artikel yang paling banyak dilihat.</p>
    <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Judul</th>
              <th>Kategori</th>
              <th>Total Pembaca (Contoh)</th>
            </tr>
          </thead>
          <tbody>
            {allArticles.slice(0, 3).map(article => ( // Hanya menampilkan 3 untuk contoh
              <tr key={article.id}>
                <td>{article.title}</td>
                <td>{article.category}</td>
                <td>{Math.floor(Math.random() * 5000) + 1000}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  </div>
);

const ShopAnalyticsSection = () => (
  <div id="shop-analytics" className="admin-section">
    <h3>Shop Analytics</h3>
    <p>Data penjualan dan performa produk di toko Anda.</p>
    <div className="placeholder-chart">Sales Data Placeholder</div>
  </div>
);


// --- Komponen Utama Halaman ---
export default function AdminAnalyticsPage() {
  const location = useLocation();

  // Efek untuk scroll ke bagian yang sesuai saat hash berubah
  React.useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    // Konten utama sekarang hanya berisi section-section analitik
    // Header akan dirender oleh AdminLayout
    <div>
      <WebPerformanceSection />
      <ArticleAnalyticsSection />
      <ShopAnalyticsSection />
    </div>
  );
}
