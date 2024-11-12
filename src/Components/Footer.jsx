import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h4 className="footer-heading">CheckMyPeople</h4>
          <p className="footer-tagline">Trust But Verify</p>
        </div>
        <div className="footer-right">
            <ul className="social-icons">
                <li><a href="#"><FaFacebookF /></a></li>
                <li><a href="#"><FaTwitter /></a></li>
                <li><a href="#"><FaYoutube /></a></li>
                <li><a href="#"><FaInstagram /></a></li>
                <li><a href="#"><FaLinkedinIn /></a></li>
            </ul>
        </div>
      </div>
      <div className='hr'></div>
      <div className="footer-links">
        <div className="footer-column">
          <h4 className="footer-heading">Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Online Community</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">Policies</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms Of Service</a></li>
            <li><a href="#">Indemnity Agreement</a></li>
            <li><a href="#">Cookies Policy</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">Resources</h4>
          <ul>
            <li><a href="#">Use Case</a></li>
          </ul>
          <div className="app-store-buttons">
            <a href="#"><img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" alt="Get it on Google Play" /></a>
            <a href="#"><img src="https://developer.apple.com/app-store/marketing/guidelines/images/app-store-badge-en-us.svg" alt="Download on the App Store" /></a>
          </div>
        </div>
      </div>
      <div className="hr"></div>
      <div className="footer-copyright">
        <p>&copy; 2024, CheckMyPeople</p>
      </div>
      <div className="footer-chat-button">
        <button><i className="fas fa-comment"></i></button>
      </div>
    </footer>
  );
};

export default Footer;