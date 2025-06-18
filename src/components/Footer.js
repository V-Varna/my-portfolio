import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>© {new Date().getFullYear()}
            <p>
               V.Varna Portfolio. All rights reserved.
              </p></span>
        <span className="footer-links">
          <a
  href="https://mail.google.com/mail/?view=cm&to=v2005varna@gmail.com&su=Contact%20from%20Portfolio&body=Hi%20Varna,"
  target="_blank"
  rel="noopener noreferrer"
>
  Contact
</a>
          <a href="https://github.com/V-Varna" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/varna-vanamala" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
