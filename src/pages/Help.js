import React from 'react';

const Help = () => {
  return (
    <main className="main-content">
      <div className="help-container">
        <h1>Help & Support</h1>
        <div className="help-section">
          <h2>Getting Started</h2>
          <ol>
            <li>Enter your 10-digit mobile number on the login page</li>
            <li>Enter the OTP "123456" to verify your account</li>
            <li>Browse through the list of nearby restaurants</li>
            <li>Click on any restaurant to view details and create custom images</li>
          </ol>
        </div>
        <div className="help-section">
          <h2>Image Manipulation</h2>
          <p>
            In the restaurant detail page, you can:
          </p>
          <ul>
            <li>View the restaurant image with our logo superimposed</li>
            <li>Drag the logo to reposition it anywhere on the image</li>
            <li>Share the customized image using the Web Share API</li>
          </ul>
        </div>
        <div className="help-section">
          <h2>FAQ</h2>
          <div className="faq-item">
            <h4>Q: What is the correct OTP?</h4>
            <p>A: For demo purposes, use "123456" as the OTP.</p>
          </div>
          <div className="faq-item">
            <h4>Q: How do I share images?</h4>
            <p>A: Click the "Share Image" button on the restaurant detail page.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Help;
