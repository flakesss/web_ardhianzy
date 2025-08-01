// src/components/UserProfile.jsx
import React, { useState, useEffect, useRef } from 'react';
import './UserProfile.css';
import ProfileDropdown from './ProfileDropdown'; // Import dropdown

// Menerima fungsi handleLogout
export default function UserProfile({ handleLogout }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Fungsi untuk menutup dropdown jika klik di luar
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    // Tambahkan event listener saat komponen mount
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Hapus event listener saat komponen unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    // Gunakan ref untuk mendeteksi klik di luar
    <div className="user-profile-container" ref={dropdownRef}>
      <img 
        src="/assets/default-profile-icon.png"
        alt="User Profile" 
        className="user-profile-icon"
        // Toggle dropdown saat ikon diklik
        onClick={() => setDropdownOpen(!isDropdownOpen)}
      />

      {/* Tampilkan dropdown jika isDropdownOpen true */}
      {isDropdownOpen && <ProfileDropdown handleLogout={handleLogout} />}
    </div>
  );
}