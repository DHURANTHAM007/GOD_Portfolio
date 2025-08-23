import React from 'react';

interface MarqueeProps {
  text: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text }) => {
  return (
    <div className="relative flex overflow-x-hidden bg-slate-900/50 backdrop-blur-sm py-3 border-y border-slate-800 my-16 md:my-24">
      <div className="py-2 animate-marquee whitespace-nowrap flex">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-lg md:text-xl mx-4 text-amber-200 font-display tracking-wider">
            {text} <span className="text-amber-400 mx-8">✦</span>
          </span>
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-r from-[#0c0c1e] via-transparent to-[#0c0c1e]"></div>
    </div>
  );
};

export default Marquee;
