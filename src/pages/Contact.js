import React from 'react';

const Contact = () => {
  return (
    <main className="main-content">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>Get in touch with the Fastor team. We'd love to hear from you!</p>
        <div className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <p>support@fastor.com</p>
          </div>
          <div className="contact-item">
            <h3>Phone</h3>
            <p>+91 12345-67890</p>
          </div>
          <div className="contact-item">
            <h3>Address</h3>
            <p>123 Food Street<br />Culinary City, FC 12345</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
