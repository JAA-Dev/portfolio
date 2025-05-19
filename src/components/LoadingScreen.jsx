import React, { useEffect, useState } from 'react';

export const LoadingScreen = ({onComplete}) => {
  const [text, setText] = useState('');
  const fullText = 'JAADev';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
            onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]); //Only run once on mount

  return (
    <div className="Loading flex flex-col items-center">
      <div className="mb-4 text-4xl font-bold">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>
      <div className="w-[200px] h-[2px] rounded relative overflow-hidden bg-blue-100/20">
        <div className="w-[40%] h-full shadow-[0_0_15px_#3b82f6] animate-loading-bar bg-blue-500" />
      </div>
    </div>
  );
};
