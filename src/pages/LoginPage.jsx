// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

// Import logo google
import googleLogo from '/assets/Google Logos By hrhasnai (1).png';

// Data akun palsu (mock data)
const mockUser = {
  email: 'admin@example.com',
  password: 'password123',

};

export default function LoginPage({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    
    if (Object.keys(newErrors).length === 0) {
      if (email === mockUser.email && password === mockUser.password) {
        alert('Login successful!');
        setIsLoggedIn(true); 
        navigate('/');
      } else {
        newErrors.auth = 'Invalid email or password';
      }
    }

    setErrors(newErrors);
  };

  return (
    <div className="login-page">
      <div className="login-background-image"></div>
      <div className="login-background-overlay"></div>
      <div className="login-background-overlay-right"></div>

      <div className="login-form-container">
        <form onSubmit={handleSubmit}>
          <h1 className="login-title">WELCOME BACK</h1>
          <p className="login-subtitle">Enter your account details</p>

          {/* Email Input */}
          <div className={`form-group ${errors.email ? 'error' : ''}`}>
            <input
              type="email"
              id="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder=" "
            />
            <label htmlFor="email" className="form-label">Email</label>
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          {/* Password Input */}
          <div className={`form-group ${errors.password ? 'error' : ''}`}>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder=" "
            />
            <label htmlFor="password" className="form-label">Password</label>
            <span
              className="password-toggle-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </span>
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          {/* Tombol "Forgot password?" */}
          <div className="forgot-password-link">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
          
          {/* Tempat untuk menampilkan error login */}
          {errors.auth && <p className="auth-error-message">{errors.auth}</p>}

          <button type="submit" className="btn btn-primary">
            LOG IN
          </button>

          <div className="divider">
            <span>or</span>
          </div>

          <button type="button" className="btn btn-google">
            <img src={googleLogo} alt="Google logo" />
            CONTINUE WITH GOOGLE
          </button>

          <p className="switch-link">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
