import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h6>Company</h6>
          <p>
            About us<br />
            Careers<br />
          </p>
        </div>
        <div className="footer-hours">
          <h6>View Website in</h6>
          <p>
            English<br />
            Hindi<br />
          </p>
        </div>
        <div className="footer-payment">
          <h6>Need Help?</h6>
          <ul>
            <li>Visit Help Center</li>
            <li>Share Feedback</li>
          </ul>
        </div>
        <div className="footer-social">
          <h6>Connect with us</h6>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;