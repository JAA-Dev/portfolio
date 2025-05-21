import React from 'react'

export const MobileMenu = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={`fixed inset-0 bg-transparent backdrop-blur-lg z-40 flex flex-col
     items-center justify-center transition-all duration-300 ease-in-out
     ${menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-full pointer-events-none"}`}>
        <button onClick={() => setMenuOpen(false)} className='absolute top-6 right-6 text-[#D4EDE4] text-3xl
         focus:outline-none cursor-pointer' aria-label='Close Menu'>&times;</button>

        <a href="#home" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-[#D4EDE4] my-4 transform
             transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}  className={`text-2xl font-semibold text-[#D4EDE4] my-4 transform
             transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>About</a>
        <a href="#project" onClick={() => setMenuOpen(false)}  className={`text-2xl font-semibold text-[#D4EDE4] my-4 transform
             transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>Project</a>
        <a href="#footer" onClick={() => setMenuOpen(false)}  className={`text-2xl font-semibold text-[#D4EDE4] my-4 transform
             transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>Contact</a>
    </div>
  )
}
export default MobileMenu