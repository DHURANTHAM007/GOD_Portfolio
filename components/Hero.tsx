import React, { useState, useEffect } from 'react';
import { DEITY_IMAGES } from '../constants';

interface HeroProps {
    tagline: string;
}

const Hero: React.FC<HeroProps> = ({ tagline }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % DEITY_IMAGES.length);
    }, 5000); // Swap image every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  const handleScrollDown = () => {
    document.querySelector('#aka')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header id="home" className="min-h-screen flex flex-col items-center justify-center text-center relative -mt-16 pb-16">
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="text-[20rem] sm:text-[30rem] lg:text-[40rem] font-black font-display text-slate-800/50 select-none">
          GOD
        </div>
      </div>
      
      <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center z-10">
        {/* Core Image Orb */}
        <div className="w-full h-full rounded-full shadow-[0_0_150px_rgba(168,85,247,0.7)] overflow-hidden">
          <img
            key={currentImageIndex} // Key forces re-render and re-triggers animation
            src={DEITY_IMAGES[currentImageIndex]}
            alt="Divine representation"
            className="w-full h-full object-cover object-center fade-in"
          />
        </div>
        
        {/* Rings */}
        <div className="absolute w-[180%] h-[180%] border-2 border-amber-200/50 rounded-full animate-spin-slow"></div>
        <div className="absolute w-[220%] h-[220%] border border-amber-200/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '45s' }}></div>
      </div>

      <div className="relative z-10 mt-12">
        <p className="text-xl md:text-2xl mt-4 text-amber-200 tracking-wider" style={{ textShadow: '0 0 15px rgba(252, 211, 77, 0.7)' }}>
          {tagline}
        </p>
      </div>

      <div 
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer group z-20"
      >
        <div className="w-6 h-10 border-2 border-slate-400 group-hover:border-amber-300 transition-colors rounded-full flex justify-center items-start p-1">
          <div className="w-1.5 h-1.5 bg-slate-400 group-hover:bg-amber-300 transition-colors rounded-full" style={{ animation: 'bounce 1.5s infinite' }}></div>
        </div>
      </div>
    </header>
  );
};

export default Hero;