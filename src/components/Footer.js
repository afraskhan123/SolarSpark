import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = ({ isInPakistan }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SolarSpark</h3>
            <p>
              {isInPakistan 
                ? "Your trusted partner for solar energy solutions in Pakistan. We're committed to bringing sustainable energy to every home and business."
                : "A leading solar energy company with a strong presence in Pakistan and expanding globally. We provide innovative solar solutions worldwide."
              }
            </p>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">💼</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Solar Panel Installation</li>
              <li>Solar System Design</li>
              <li>Maintenance & Repair</li>
              <li>Energy Consulting</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📍 {isInPakistan ? "" : "Nehr Par, Sharif Abad, Takht Bhai, District Mardan, Pakistan"}</p>
              <p>📞 +923261544404</p>
              <p>📞 +923354647444</p>
              <p>💬 WhatsApp: +66981212205</p>
              <p>📧 solarsparkpvtltd@gmail.com</p>
              <p>🕒 Mon - Fri: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 solarspark. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 