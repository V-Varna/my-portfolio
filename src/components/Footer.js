import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>© {new Date().getFullYear()}
            V.Varna. All rights reserved.</span>
        <span className="footer-links">
          <a href="mailto:v.varna@email.com">Contact</a>
          <a href="https://github.com/vvarna" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/vvarna" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
