import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-company">
          <h3>BigTrading.JP</h3>
          <p>Exporting high quality Japanese used vehicles worldwide. BigTrading.JP is a leading exporter of construction equipment and machinery.</p>
          <div className="social-links">
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">YouTube</a>
          </div>
        </div>
        
        <div className="footer-support">
          <h3>Support</h3>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Shipping Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Big Trading Japan. All rights reserved. Designed and developed by Cloudwise</p>
      </div>
    </footer>
  );
};

export default Footer;