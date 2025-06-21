import React, { useEffect } from 'react'
// import SunLogo from "../assets/logos/Sun.png";
import MoonLogo from "./assets/logos/Angled-Moon.png";

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    
  return (
    // border-b border-white/5 shadow-md
    <nav className='fixed top-0 w-full z-40 bg-transparent backdrop-blur-lg'> 
        <div className='max-w-5xl mx-auto px-4'>
            <div className='flex justify-between items-center h-16'>
                <a href="#home" className='text-xl font-bold'><span className='font-color'>JAA</span>Dev</a>
                {/* mobile menu */}
                <div className='w-7 h-5 relative cursor-pointer z-40 md:hidden' onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>

                <div className='hidden md:flex items-center space-x-8'>
                    <a href="#home" className='font-hover '>Home</a>
                    <a href="#about" className='font-hover '>About</a>
                    <a href="#project" className='font-hover '>Project</a>
                    <a href="#footer" className='font-hover '>Contact</a>
                    {/* <a href="#about"><img src={MoonLogo} alt="" className='w-5 h-5 cursor-pointer dark:filter dark:invert' /></a> */}
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar