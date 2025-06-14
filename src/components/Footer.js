import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>© {new Date().getFullYear()} Alex Doe. All rights reserved.</span>
        <span className="footer-links">
          <a href="mailto:alexdoe@email.com">Contact</a>
          <a href="https://github.com/alexdoe" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/alexdoe" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
