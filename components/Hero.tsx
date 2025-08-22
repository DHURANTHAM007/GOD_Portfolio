
import React, { useState, useEffect } from 'react';
import { PROFILE_IMAGES } from '../constants';

interface HeroProps {
    tagline: string;
    oneLineBio: string;
}

const Typewriter: React.FC<{text: string}> = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');
    useEffect(() => {
        let i = 0;
        const intervalId = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(prev => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(intervalId);
            }
        }, 50);
        return () => clearInterval(intervalId);
    }, [text]);

    return <p className="text-xl md:text-2xl mt-4 text-slate-300 text-center min-h-[56px]">{displayedText}</p>;
}


const Hero: React.FC<HeroProps> = ({ tagline, oneLineBio }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % PROFILE_IMAGES.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="min-h-screen flex flex-col items-center justify-center text-center -mt-16">
      <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-300 to-purple-500 rounded-full animate-pulse blur-xl"></div>
        {PROFILE_IMAGES.map((src, index) => (
          <img
            key={src}
            src={src}
            alt="Celestial View"
            className={`w-full h-full rounded-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <h1 className="text-7xl md:text-9xl font-extrabold text-white tracking-widest" style={{ textShadow: '0 0 15px rgba(255,255,255,0.5)' }}>
        GOD
      </h1>
      <p className="text-lg md:text-xl mt-4 text-amber-200 tracking-wider">
        {tagline}
      </p>
      <div className="mt-12 max-w-3xl mx-auto">
        <Typewriter text={oneLineBio} />
      </div>
    </header>
  );
};

export default Hero;
