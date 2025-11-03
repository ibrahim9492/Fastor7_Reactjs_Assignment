import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Fastor</h3>
            <p>Your go-to app for discovering nearby restaurants and sharing amazing food experiences.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/help">Help</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Email: support@fastor.com</p>
            <p>Phone: +91 12345-67890</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Fastor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
