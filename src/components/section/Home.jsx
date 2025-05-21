import React from 'react'

export const Home = () => {
  return (
    <section id='home' className='bg-gradient min-h-screen flex items-center justify-center relative'>
      <div className='flex flex-col items-center justify-center'>
          <div className='text-center z-10 px-4'>
            <h2 className='text-6xl md:text-7xl font-bold'>Hello! </h2>
            <h2 className='text-6xl md:text-7xl font-bold'>I'm Augustine.</h2>
            <h1 className='text-6xl md:text-7xl font-bold'>Front-end Developer.</h1>
            <p className='mb-8 text-lg max-w-lg mx-auto'>I'm a passionate front-end 
              developer dedicated to creating seamless, inituitive, and visually
               engaging web expriences.
            </p>
          </div>
          <div className='flex justify-center space-x-4'>
            <a href='#' className='bg-black text-white py-3 px-6 rounded font-medium transition
             relative overflow-hidden hover:-translate-0.5 hover:shadow-[0_0_15px_rgb(59,130,246,0.4)'>Resume</a>
            <a href='#' className='border border-[#233831] text-[#233831] py-3 px-6 rounded font-medium
             transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgb(59,130,246,0.2) hover:bg-[#233831]/50'>Contact Me</a>
          </div>
      </div>
    </section>
  )
}

export default Home