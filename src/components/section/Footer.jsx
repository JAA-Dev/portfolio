import { FaGithub, FaInstagram, FaTwitter, FaFacebook, FaGoogle, FaFacebookMessenger } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-logoNav">
          <h1 className="footer-logoNavh1">JAADev</h1>
          <nav className="footer-nav">
            <a href="#home" className="footer-a">Home</a>
            <a href="#about" className="footer-a">About</a>
            <a href="#project" className="footer-a">Project</a>
            <a href="#" className="footer-a">Contact</a>
          </nav>
        </div>

        <hr className="footer-hr" />

        <div className="footer-bottom">
          <p className="footer-p">Copyright © 2025</p>
          <div className="footer-container-logo">
            <a href="#"><FaGithub className="hover:text-white" /></a>
            <a href="#"><FaInstagram className="text-pink-500" /></a>
            <a href="#"><FaTwitter className="text-blue-400" /></a>
            <a href="#"><FaFacebook className="text-blue-600" /></a>
            <a href="#"><FaGoogle className="text-red-500" /></a>
            <a href="#"><FaFacebookMessenger className="text-blue-500" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
