import { useState } from 'react';
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/section/Home'
import { About } from './components/section/About'
import { Project } from './components/section/Project'
import { Footer } from './components/section/Footer'
import Toggle from "./components/UI/Toggle";


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
  }

  return (
    <>
    {/* <div className='section-wrapper'> */}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      {/* <div className={`dark min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}> */}
      <div className={`${isDarkMode ? 'dark' : ''} min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Home />
          {/* <Toggle /> */}
          {/* <Toggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} /> */}

          <About />
          <Project />
          <Footer />
      </div>
    {/* </div> */}

    </>
  );
}

export default App;
