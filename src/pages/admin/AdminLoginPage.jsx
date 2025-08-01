// src/pages/admin/AdminLoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLoginPage.css'; // Menggunakan file CSS baru

// Menerima setIsAdminLoggedIn sebagai prop untuk mengubah status login di App.jsx
export default function AdminLoginPage({ setIsAdminLoggedIn }) {
  // Mengubah nama state untuk menghindari konflik
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [showAdminPassword, setShowAdminPassword] = useState(false);
  const [authError, setAuthError] = useState('');
  const navigate = useNavigate();

  // Mengubah nama fungsi handler
  const handleAdminLogin = (e) => {
    e.preventDefault();
    setAuthError(''); // Reset error setiap kali submit

    // Validasi sederhana
    if (!adminEmail || !adminPassword) {
      setAuthError('Email dan password harus diisi.');
      return;
    }
    
    // --- SIMULASI LOGIN ADMIN ---
    if (adminEmail === 'admin@example.com' && adminPassword === 'password123') {
      console.log('Login admin berhasil!');
      
      // Set status login admin menjadi true
      setIsAdminLoggedIn(true);
      
      // Simpan status di localStorage agar tetap login setelah refresh
      localStorage.setItem('isAdminLoggedIn', 'true');
      
      // Arahkan ke dasbor admin
      navigate('/admin/dashboard');
    } else {
      setAuthError('Email atau password admin salah.');
    }
  };

  return (
    // Struktur JSX disamakan dengan LoginPage.jsx tapi dengan class admin
    <div className="admin-login-page">
      <div className="admin-login-background-image"></div>
      <div className="admin-login-background-overlay"></div>
      <div className="admin-login-background-overlay-right"></div>

      <div className="admin-login-form-container">
        <form onSubmit={handleAdminLogin}>
          <h1 className="admin-login-title">ADMIN LOG IN</h1>
          <p className="admin-login-subtitle">Masuk untuk mengelola dasbor</p>

          {/* Email Input */}
          <div className="admin-form-group">
            <input
              type="email"
              id="admin-email"
              className="admin-form-input"
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
              required
              placeholder=" "
            />
            <label htmlFor="admin-email" className="admin-form-label">Admin Email</label>
          </div>

          {/* Password Input */}
          <div className="admin-form-group">
            <input
              type={showAdminPassword ? 'text' : 'password'}
              id="admin-password"
              className="admin-form-input"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              required
              placeholder=" "
            />
            <label htmlFor="admin-password" className="admin-form-label">Admin Password</label>
            <span
              className="admin-password-toggle-icon"
              onClick={() => setShowAdminPassword(!showAdminPassword)}
            >
              {showAdminPassword ? 'Hide' : 'Show'}
            </span>
          </div>
          
          {/* Menampilkan pesan error otentikasi */}
          {authError && <p className="admin-auth-error-message">{authError}</p>}

          <button type="submit" className="admin-btn admin-btn-primary">
            LOG IN
          </button>
          
        </form>
      </div>
    </div>
  );
}
