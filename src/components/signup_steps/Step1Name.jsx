// src/components/signup_steps/Step1Name.jsx
import React from 'react';

export default function Step1Name({ formData, setFormData, errors }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <>
      <h1 className="signup-title">REGISTER ACCOUNT</h1>
      <p className="signup-subtitle">Enter your name</p>

      <div className={`form-group ${errors.firstName ? 'error' : ''}`}>
        <input
          type="text"
          id="firstName"
          className="form-input"
          value={formData.firstName}
          onChange={handleChange}
          required
          placeholder=" " /* <-- TAMBAHKAN INI */
        />
        <label htmlFor="firstName" className="form-label">Name</label>
        {errors.firstName && <span className="error-message">{errors.firstName}</span>}
      </div>

      <div className="form-group">
        <input
          type="text"
          id="lastName"
          className="form-input"
          value={formData.lastName}
          onChange={handleChange}
          placeholder=" " /* <-- TAMBAHKAN INI */
        />
        <label htmlFor="lastName" className="form-label">Last name (optional)</label>
      </div>
    </>
  );
}