import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer component for the WriteEase platform
 */
const Footer = () => {
  return (
    <footer className="writeease-footer">
      <div className="container">
        <div className="footer-content">
          <div className="copyright">
            © {new Date().getFullYear()} WriteEase. All rights reserved.
          </div>
          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/help">Help Center</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
