// import React from 'react'

// export const Home = () => {
//   return (
//     <section id='home' className='bg-gradient min-h-screen flex items-center justify-center relative'>
//       <div className='flex flex-col items-center justify-center'>
//           <div className='text-center z-10 px-4'>
//             <h2 className='text-6xl md:text-7xl font-bold'>Hello! 👋</h2>
//             <h2 className='text-6xl md:text-7xl font-bold'>I'm Augustine.</h2>
//             <h1 className='text-6xl md:text-7xl font-bold'>Front-end Developer.</h1>
//             <p className='mb-8 text-lg max-w-lg mx-auto'>I'm a passionate front-end 
//               developer dedicated to creating seamless, inituitive, and visually
//                engaging web expriences.
//             </p>
//           </div>
//           <div className='flex justify-center space-x-4'>
//             <a href='#' className='bg-black text-white py-3 px-6 rounded font-medium transition
//              relative overflow-hidden hover:-translate-0.5 hover:shadow-[0_0_15px_rgb(59,130,246,0.4)'>Resume</a>
//             <a href='#' className='border border-[#233831] text-[#233831] py-3 px-6 rounded font-medium
//              transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgb(59,130,246,0.2) hover:bg-[#233831]/50'>Contact Me</a>
//           </div>
//       </div>
//     </section>
//   )
// }

// export default Home


import React, { useState, useEffect } from 'react';

const greetings = ['Hello!', 'Bonjour!', 'Hola!', 'こんにちは!', '안녕하세요!', 'Ciao!', 'Olá!', 'Hallo!', 'مرحبا!', 'नमस्ते!'];

export const Home = () => {
  const [text, setText] = useState('');
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = greetings[greetingIndex];
    let speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setText(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setGreetingIndex((greetingIndex + 1) % greetings.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, greetingIndex]);

  return (
    <section id='home' className='bg-gradient min-h-screen flex items-center justify-center relative'>
      <div className='flex flex-col items-center justify-center'>
        <div className='text-center z-10 px-4'>
          <h2 className='text-6xl md:text-7xl font-bold min-h-[5rem]'>
            {text}
          </h2>
          <h2 className='text-6xl md:text-7xl font-bold'>I'm Augustine.</h2>
          <h1 className='text-6xl md:text-7xl font-bold'>Front-end Developer.</h1>
          <p className='mb-8 text-lg max-w-lg mx-auto'>
            I'm a passionate front-end developer dedicated to creating seamless, intuitive, and visually engaging web experiences.
          </p>
        </div>
        <div className='flex justify-center space-x-4'>
          <a
            href='#'
            className='bg-black text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-0.5 hover:shadow-[0_0_15px_rgb(59,130,246,0.4)]'
          >
            Resume
          </a>
          <a
            href='#'
            className='border border-[#233831] text-[#233831] py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgb(59,130,246,0.2)] hover:bg-[#233831]/50'
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
