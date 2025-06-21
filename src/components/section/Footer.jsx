import { FaGithub, FaInstagram, FaTwitter, FaFacebook, FaGoogle, FaFacebookMessenger } from 'react-icons/fa';
// import Modal from "../UI/Modal"
export const Footer = () => {
  // const [open, setOpen] = useState(false);
  return (
    <footer className="p-6 mt-10" id='footer'>
      {/* <section
      id="project"
      className=" flex flex-col items-center justify-center py-40"
    >
        <div className="text-center">
            <h2 className="text-4xl md:text-7xl font-bold mb-9 text-center ">Get in Touch</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-10 text-xl md:text-2xl">
            Interested in working together or have a question? Feel free to reach out!
            </p>
            <a
            href="#"
            onClick={() => setOpen(true)}
            className="dark:bg-[#262626] bg-[#fafafa] dark:text-[#f3f3f3] border border-[#233831]/10 text-[#233831] py-4 px-15 rounded-4xl font-bold transition-all shadow duration-200 hover:-translate-y-0.5 hover:bg-[#f3f3f3]/80"
          >
            Get In Touch
          </a>
        </div>
       
    </section> */}
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
