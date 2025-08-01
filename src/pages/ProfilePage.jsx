// src/pages/ProfilePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

import './ProfilePage.css';

// Mock data untuk pengguna yang sedang login
const userData = {
  username: 'HotChocolate33',
  email: 'admin@example.com',
  password: 'password123',
  profilePicture: '/assets/Ellipse 149.png' // Ganti dengan path gambar profil
};

export default function ProfilePage() {
  const navigate = useNavigate();

  return (
    <div className="profile-page">
      <div className="profile-background"></div>
      <div className="profile-overlay-right"></div>
      <div className="profile-overlay-bottom"></div>
      
      <button onClick={() => navigate(-1)} className="back-button">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Back</span>
      </button>

      <div className="profile-content">
        {/* Bagian Header Profil */}
        <div className="profile-header">
          <div className="profile-picture-container">
            {/* Efek radial gradient dipindahkan ke sini, di belakang gambar */}
            <div className="profile-radial-effect"></div>
            <img src={userData.profilePicture} alt="Profile" className="profile-picture" />
            <button className="edit-picture-button">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 0L12 1.5L16.5 6L18 4.5L13.5 0ZM10.5 3L0 13.5V18H4.5L15 7.5L10.5 3Z" fill="black"/>
              </svg>
            </button>
          </div>
          <h2 className="profile-username">{userData.username}</h2>
          <p className="profile-email">{userData.email}</p>
        </div>

        {/* Kartu Informasi Akun */}
        <div className="info-card">
          <h3 className="info-card-title">Basic Information</h3>
          <ul className="info-list">
            <li className="info-item">
              <span className="info-label">Username</span>
              <span className="info-value">{userData.username}</span>
            </li>
            <li className="info-item">
              <span className="info-label">Email</span>
              <span className="info-value">{userData.email}</span>
            </li>
            <li className="info-item">
              <span className="info-label">Password</span>
              <span className="info-value password-dots">••••••••••</span>
            </li>
            <li className="info-item">
              <span className="info-label">
                <a href="/change-password" className="change-password-link">Change Password</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
