import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <img src="src/assets/icon/Ardhianzy_Logo 2.png" alt="Ardhianzy Logo" />
        </div>

        {/* Links */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>INSIDE ARDHIANZY</h4>
            <ul>
              <li><a href="#magazine">Magazine</a></li>
              <li><a href="#research">Research</a></li>
              <li><a href="#course">Course</a></li>
              <li><a href="#monologues">Monologues</a></li>
              <li><a href="#reading-guide">Reading Guide</a></li>
              <li><a href="#ideas">Ideas & Tradition</a></li>
              <li><a href="#pop-culture">Pop-Culture Review</a></li>
              <li><a href="#shops">Shops</a></li>
              <li><a href="#community">Community</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>CUSTOMER CARE</h4>
            <ul>
              <li><a href="#terms">Term & Condition</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#faqs">FAQs</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>GET IN TOUCH</h4>
            <ul>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
            <div className="footer-socials">
              <a href="https://youtube.com" aria-label="YouTube">
                <img src="src/assets/icon/youtube.svg" alt="YouTube" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <img src="src/assets/icon/instagram.svg" alt="Instagram" />
              </a>
              <a href="https://discord.com" aria-label="Discord">
                <img src="src/assets/icon/discord.svg" alt="Discord" />
              </a>
              <a href="https://tiktok.com" aria-label="TikTok">
                <img src="src/assets/icon/tiktok.svg" alt="TikTok" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <img src="src/assets/icon/linkeind.svg" alt="LinkedIn" />
              </a>
              <a href="mailto:info@example.com" aria-label="Email">
                <img src="src/assets/icon/gmail.svg" alt="Email" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
)}