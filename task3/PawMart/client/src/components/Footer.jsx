import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-main-container">
      <div className="footer-columns-wrap">
        <div className="footer-brand-intro">
          <h3>🐾 PawMart</h3>
          <p style={{ color: '#BDB5AE', fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '280px' }}>
            Everything Your Pet Loves, Delivered with Care. Highly organic blends and materials.
          </p>
        </div>

        <div className="footer-nav-column">
          <h4>Links</h4>
          <ul>
            <li><a href="#about" onClick={(e) => e.preventDefault()}>About Us</a></li>
            <li><a href="#contact" onClick={(e) => e.preventDefault()}>Contact</a></li>
            <li><a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-nav-column">
          <h4>Contact</h4>
          <p style={{ color: '#BDB5AE', fontSize: '0.95rem', lineHeight: '1.5' }}>
            support@pawmart.in<br />
            +91 98765 43210
          </p>
        </div>

        <div className="footer-nav-column">
          <h4>Social Media</h4>
          <div className="footer-social-pill-group">
            <span style={{ cursor: 'pointer' }} title="Instagram">📸</span>
            <span style={{ cursor: 'pointer' }} title="Facebook">🔵</span>
            <span style={{ cursor: 'pointer' }} title="Twitter">🐦</span>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', color: '#8E857E', fontSize: '0.85rem', marginTop: '2.5rem', paddingTop: '1rem' }}>
        © {new Date().getFullYear()} PawMart Marketplace. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;