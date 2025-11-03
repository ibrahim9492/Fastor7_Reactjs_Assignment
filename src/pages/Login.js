import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import Header from '../components/Header';

const Login = () => {
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mobile.length === 10 && /^\d+$/.test(mobile)) {
      // Store mobile in localStorage or context for OTP screen
      localStorage.setItem('mobile', mobile);
      navigate('/otp');
    } else {
      alert('Please enter a valid 10-digit mobile number.');
    }
  };

  return (
    <div className="login-container">
      <Header title="Login" />
      <form onSubmit={handleSubmit} className="login-form">
        <InputField
          label="Mobile Number"
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Enter 10-digit mobile number"
          maxLength="10"
        />
        <button type="submit" className="submit-button">Send OTP</button>
      </form>
    </div>
  );
};

export default Login;
