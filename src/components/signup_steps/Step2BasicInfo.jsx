// src/components/signup_steps/Step2BasicInfo.jsx
import React from 'react';

export default function Step2BasicInfo({ formData, setFormData, errors }) {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  return (
    <>
      <h1 className="signup-title">BASIC INFORMATION</h1>
      <p className="signup-subtitle">Enter your birthday and other information</p>
                  
      <div className={`form-group ${errors.birthday ? 'error' : ''}`}>
        <div className="birthday-input-container">
          <div className="birthday-segment">
            <select id="day" value={formData.day} onChange={handleChange} required>
              <option value="" disabled></option>
              {days.map(day => <option key={day} value={day}>{day}</option>)}
            </select>
            <label htmlFor="day" className="segment-label">Date</label>
          </div>
          <div className="birthday-segment">
            <select id="month" value={formData.month} onChange={handleChange} required>
              <option value="" disabled></option>
              {months.map((month, index) => <option key={month} value={index + 1}>{month}</option>)}
            </select>
            <label htmlFor="month" className="segment-label">Month</label>
          </div>
          <div className="birthday-segment">
            <select id="year" value={formData.year} onChange={handleChange} required>
              <option value="" disabled></option>
              {years.map(year => <option key={year} value={year}>{year}</option>)}
            </select>
            <label htmlFor="year" className="segment-label">Year</label>
          </div>
        </div>
        {errors.birthday && <span className="error-message">{errors.birthday}</span>}
      </div>

      {/* Gender Input */}
      <div className={`form-group ${errors.gender ? 'error' : ''}`}>
        <select id="gender" className="form-input" value={formData.gender} onChange={handleChange} required>
            <option value="" disabled></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer_not_to_say">Prefer not to say</option>
        </select>
        <label htmlFor="gender" className="form-label">Gender</label>
        {errors.gender && <span className="error-message">{errors.gender}</span>}
      </div>
      
      
      <div className="form-group">
        <input
            type="tel"
            id="phoneNumber"
            className="form-input"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder=" "
        />
        <label htmlFor="phoneNumber" className="form-label">Phone number (optional)</label>
      </div>
      
      {/* Country Input (Wajib) */}
      <div className={`form-group ${errors.country ? 'error' : ''}`}>
        <select id="country" className="form-input" value={formData.country} onChange={handleChange} required>
            <option value="" disabled></option>
            <option value="Indonesia">Indonesia</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Singapore">Singapore</option>
            <option value="United States">United States</option>
        </select>
        <label htmlFor="country" className="form-label">Country</label>
        {errors.country && <span className="error-message">{errors.country}</span>}
      </div>

      <div className={`form-group ${errors.city ? 'error' : ''}`}>
         <input
            type="text"
            id="city"
            className="form-input"
            value={formData.city}
            onChange={handleChange}
            required
            placeholder=" "
        />
        <label htmlFor="city" className="form-label">City / County</label>
        {errors.city && <span className="error-message">{errors.city}</span>}
      </div>
    </>
  );
}