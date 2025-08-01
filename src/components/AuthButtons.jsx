import React from 'react';
import { Link } from 'react-router-dom';
import './AuthButtons.css';

export default function AuthButtons() {
  return (
    <div className="auth-buttons-container">
      <Link to="/signup" className="auth-button auth-button--signup">
        SIGN UP
      </Link>
      <Link to="/login" className="auth-button auth-button--login">
        LOG IN
      </Link>
    </div>
  );
}