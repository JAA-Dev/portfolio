import { useState } from 'react';
import './App.css';
import Home from './components/section/Home';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded ? (
        <LoadingScreen onComplete={() => setIsLoaded(true)} />
      ) : (
        <>
          <h1 className="text-center text-6xl">Hello JAADev</h1>
          <Home />
        </>
      )}
    </>
  );
}

export default App;
