
import React from 'react';
import Hero from './components/Hero';
import Aka from './components/Aka';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Hobbies from './components/Hobbies';
import References from './components/References';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import StarryBackground from './components/StarryBackground';
import { portfolioData } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#0c0c1e] text-slate-200 font-sans overflow-x-hidden">
      <StarryBackground />
      <div className="relative z-10">
        <main className="container mx-auto px-6 md:px-12 py-16">
          <Hero 
            tagline={portfolioData.tagline}
            oneLineBio={portfolioData.oneLineBio}
          />
          <Aka aliases={portfolioData.aka} />
          <Bio publications={portfolioData.publications} />
          <Skills skills={portfolioData.coreSkills} />
          <Experience experiences={portfolioData.experience} />
          <Education education={portfolioData.education} />
          <Achievements achievements={portfolioData.achievements} />
          <Hobbies hobbies={portfolioData.hobbies} />
          <References references={portfolioData.references} />
          <CallToAction text={portfolioData.whyHire} />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
