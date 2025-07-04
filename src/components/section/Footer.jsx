import { FaGithub, FaInstagram, FaTwitter, FaFacebook, FaGoogle, FaFacebookMessenger } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="p-6 mt-10" id='footer'>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center flex-wrap">
          <h1 className="text-lg font-semibold"><span className='font-color'>JAA</span>Dev</h1>
          <nav className="flex space-x-6 text-sm">
            <a href="#home" className="footer-a">Home</a>
            <a href="#about" className="footer-a">About</a>
            <a href="#project" className="footer-a">Project</a>
            <a href="#footer" className="footer-a">Contact</a>
          </nav>
        </div>

        <hr className="my-4" />

        <div className="flex max-sm:flex-col justify-between items-center flex-wrap">
          <p className="text-sm max-sm:mb-2.5">Copyright © 2025</p>
          <div className="flex space-x-4 text-2xl max-sm:mb-2.5">
            <a href="#"><FaGithub/></a>
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
