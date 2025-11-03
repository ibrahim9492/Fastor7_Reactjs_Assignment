import React from 'react';

const About = () => {
  return (
    <main className="main-content">
      <div className="about-container">
        <h1>About Fastor</h1>
        <p>
          Fastor is a Progressive Web Application designed to help you discover and explore
          nearby restaurants. Our app features a seamless authentication process, real-time
          restaurant listings, and innovative image manipulation tools.
        </p>
        <div className="features">
          <h2>Key Features</h2>
          <ul>
            <li>Two-step authentication (Mobile + OTP)</li>
            <li>Real-time restaurant discovery</li>
            <li>Canvas-based image superimposing</li>
            <li>PWA capabilities with Web Share API</li>
            <li>Responsive design for all devices</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default About;
