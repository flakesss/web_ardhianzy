import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileDropdown.css';

// Menerima fungsi handleLogout untuk logout
export default function ProfileDropdown({ handleLogout }) {
  return (
    <div className="profile-dropdown">
      <ul className="dropdown-list">
        {/* Link diubah ke /profile */}
        <li><Link to="/profile">Profile</Link></li>
        {/* Link diubah ke /read-history */}
        <li><Link to="/read-history">Read History</Link></li>
      </ul>
      <div className="dropdown-divider"></div>
      <button onClick={handleLogout} className="logout-button">
        Log Out
      </button>
    </div>
  );
}
