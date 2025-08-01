// src/pages/SignUpPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUpPage.css';

import Step1Name from '../components/signup_steps/Step1Name';
import Step2BasicInfo from '../components/signup_steps/Step2BasicInfo';
import Step3AccountInfo from '../components/signup_steps/Step3AccountInfo';

import googleLogo from '/assets/Google Logos By hrhasnai (1).png';

export default function SignUpPage() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  
  const totalSteps = 3; 
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    day: '',
    month: '',
    year: '',
    gender: '',
    // TAMBAHKAN STATE BARU
    phoneNumber: '',
    country: '',
    city: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleNextClick = () => {
    let newErrors = {};
    let isError = false;

    if (step === 1) {
      if (!formData.firstName) {
        newErrors.firstName = 'First name is required';
        isError = true;
      }
    } else if (step === 2) {
      if (!formData.day || !formData.month || !formData.year) {
        newErrors.birthday = 'Please fill in a complete birthday';
        isError = true;
      }
      if (!formData.gender) {
        newErrors.gender = 'Please select your gender';
        isError = true;
      }
      // TAMBAHKAN VALIDASI BARU (negara & kota wajib, nomor telepon tidak)
      if (!formData.country) {
        newErrors.country = 'Please select your country';
        isError = true;
      }
      if (!formData.city) {
        newErrors.city = 'Please select your city/county';
        isError = true;
      }
    } else if (step === 3) {
        if (!formData.email) {
            newErrors.email = 'Email is required';
            isError = true;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid';
            isError = true;
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
            isError = true;
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
            isError = true;
        }
    }

    setErrors(newErrors);

    if (!isError) {
      if (step < totalSteps) {
        setStep(step + 1);
      } else {
        handleFinalSubmit();
      }
    }
  };
  
  const handleFinalSubmit = () => {
    console.log('Final Form Data:', formData);
    alert('Registration successful!');
    navigate('/');
  };

  return (
    <div className="signup-page">
      <div className="signup-background-image"></div>
      <div className="signup-background-overlay"></div>
      <div className="signup-background-overlay-right"></div>

      <div className="signup-form-container">
        <form onSubmit={(e) => e.preventDefault()}>
          
          {step === 1 && <Step1Name formData={formData} setFormData={setFormData} errors={errors} />}
          {step === 2 && <Step2BasicInfo formData={formData} setFormData={setFormData} errors={errors} />}
          {step === 3 && <Step3AccountInfo formData={formData} setFormData={setFormData} errors={errors} />}

          <button 
            type="button"
            onClick={handleNextClick} 
            className="btn btn-primary"
          >
            {step === totalSteps ? 'REGISTER' : 'NEXT'}
          </button>
          
          <>
            <div className="divider">
                <span>or</span>
            </div>
            <button type="button" className="btn btn-google">
                <img src={googleLogo} alt="Google logo" />
                CONTINUE WITH GOOGLE
            </button>
          </>

          <p className="signin-link">
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}