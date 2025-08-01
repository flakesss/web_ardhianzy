// src/components/signup_steps/Step3AccountInfo.jsx
import React, { useState } from 'react';

// Komponen ini berisi field untuk Email dan Password
export default function Step3AccountInfo({ formData, setFormData, errors }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <>
      <h1 className="signup-title">CREATE YOUR ACCOUNT</h1>
      <p className="signup-subtitle">Enter your email and password</p>

      {/* Email Input */}
      <div className={`form-group ${formData.email ? 'active' : ''} ${errors.email ? 'error' : ''}`}>
        <input
          type="email"
          id="email"
          className="form-input"
          value={formData.email}
          onChange={handleChange}
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
          value={formData.password}
          onChange={handleChange}
          required
          placeholder=" "
        />
        <label htmlFor="password" className="form-label">Password</label>
        <span
          className="password-toggle-icon"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <img src="/assets/visible--eye-eyeball-open-view.png" alt="Hide password" />
          ) : (
            <img src="/assets/invisible-2.png" alt="Show password" />
          )}
        </span>
        {errors.password && <span className="error-message">{errors.password}</span>}
      </div>
      
      {/* Confirm Password Input */}
      <div className={`form-group ${errors.confirmPassword ? 'error' : ''}`}>
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          id="confirmPassword"
          className="form-input"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          placeholder=" "
        />
        <label htmlFor="confirmPassword" className="form-label">Confirm password</label>
        <span
          className="password-toggle-icon"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {/* --- PERBAIKAN DI SINI --- */}
          {/* Menggunakan state 'showConfirmPassword' yang benar */}
          {showConfirmPassword ? (
            <img src="/assets/visible--eye-eyeball-open-view.png" alt="Hide password" />
          ) : (
            <img src="/assets/invisible-2.png" alt="Show password" />
          )}
        </span>
        {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
      </div>
    </>
  );
}