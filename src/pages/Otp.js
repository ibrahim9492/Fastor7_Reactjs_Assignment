import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import InputField from '../components/InputField';
import Header from '../components/Header';

const Otp = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();
  const CORRECT_OTP = '123456';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp === CORRECT_OTP) {
      // Success: Set auth status and redirect
      login();
      navigate('/list');
    } else {
      alert('Invalid OTP. Try 123456');
    }
  };

  return (
    <div className="otp-container">
      <Header title="OTP Verification" />
      <form onSubmit={handleSubmit} className="otp-form">
        <InputField
          label="Enter 6-digit OTP"
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="123456"
          maxLength="6"
        />
        <button type="submit" className="submit-button">Verify OTP</button>
      </form>
    </div>
  );
};

export default Otp;
