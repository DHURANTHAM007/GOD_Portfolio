import React from 'react';
import StarryBackground from './StarryBackground';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-[#0c0c1e] flex flex-col items-center justify-center z-50">
      <StarryBackground />
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full loader"></div>
        <div className="absolute inset-2 rounded-full bg-amber-400/20 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-300 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 12l5.707 5.707a1 1 0 010 1.414L15 19m-4-1h-1a1 1 0 100 2h1a1 1 0 100-2zm-5-3h1a1 1 0 110 2H6a1 1 0 110-2z" />
          </svg>
        </div>
      </div>
      <p className="mt-8 text-amber-200 text-lg tracking-widest font-display animate-pulse">Summoning Cosmos...</p>
    </div>
  );
};

export default Loader;
