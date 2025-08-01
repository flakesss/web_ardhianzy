// src/components/admin/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

// Komponen ini melindungi rute-rute admin
// Jika pengguna tidak login sebagai admin, ia akan diarahkan ke halaman login.
export default function ProtectedRoute({ isAdminLoggedIn, children }) {
  if (!isAdminLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
