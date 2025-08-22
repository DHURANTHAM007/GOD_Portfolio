import React from 'react';

const PrayerIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.539 1.118l-3.975-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>);
const MeditationIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>);
const OfferingIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1m0-1V4m0 2.01V5M12 20v-1m0-1v-1m0-1V4m0 16v-1" /></svg>);
const CameoIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5h14a2 2 0 012 2v3a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 01-2-2H5a2 2 0 01-2-2V7a2 2 0 012-2z" /></svg>);

const SoundOnIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>);
const SoundOffIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg>);


interface FooterProps {
  isPlaying: boolean;
  toggleAudio: () => void;
}

const Footer: React.FC<FooterProps> = ({ isPlaying, toggleAudio }) => {
  return (
    <footer id="contact" className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-800 py-8 relative">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <p className="text-lg text-amber-200 mb-6 font-display">Contact</p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <a href="#" className="p-3 rounded-full text-slate-300 bg-slate-800/50 hover:bg-amber-300 hover:text-black transition-colors duration-300" title="Prayer">
            <PrayerIcon />
          </a>
          <a href="#" className="p-3 rounded-full text-slate-300 bg-slate-800/50 hover:bg-amber-300 hover:text-black transition-colors duration-300" title="Meditation">
            <MeditationIcon />
          </a>
          <a href="#" className="p-3 rounded-full text-slate-300 bg-slate-800/50 hover:bg-amber-300 hover:text-black transition-colors duration-300" title="Offering">
            <OfferingIcon />
          </a>
          <a href="#" className="p-3 rounded-full text-slate-300 bg-slate-800/50 hover:bg-amber-300 hover:text-black transition-colors duration-300" title="Comic-con Cameo">
            <CameoIcon />
          </a>
        </div>
        <p className="text-sm text-slate-500 mt-8">&copy; Since the Beginning of Time. All rights reserved, created, and managed.</p>
      </div>
       <button onClick={toggleAudio} className="absolute bottom-6 right-6 p-3 rounded-full text-slate-300 bg-slate-800/50 hover:bg-amber-300 hover:text-black transition-colors duration-300" title={isPlaying ? 'Mute Audio' : 'Play Audio'}>
        {isPlaying ? <SoundOnIcon /> : <SoundOffIcon />}
      </button>
    </footer>
  );
};

export default Footer;