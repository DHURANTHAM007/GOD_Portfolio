
import React from 'react';

const PrayerIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.539 1.118l-3.975-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>);
const MeditationIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>);
const OfferingIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1m0-1V4m0 2.01V5M12 20v-1m0-1v-1m0-1V4m0 16v-1" /></svg>);
const CameoIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5h14a2 2 0 012 2v3a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 01-2-2H5a2 2 0 01-2-2V7a2 2 0 012-2z" /></svg>);

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-800 py-8">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <p className="text-lg text-amber-200 mb-6">Contact</p>
        <div className="flex justify-center items-center space-x-6">
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
    </footer>
  );
};

export default Footer;
