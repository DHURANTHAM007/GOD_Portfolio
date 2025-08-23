import React, { useState, useEffect, useRef } from 'react';
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
import Loader from './components/Loader';
import Header from './components/Header';
import { portfolioData } from './constants';
import Marquee from './components/Marquee';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);
  
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => console.error("Audio play failed:", error));
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-[#0c0c1e] font-sans text-slate-300 overflow-x-hidden">
      {/* BACKGROUND CONTAINER */}
      <div 
        className="fixed top-0 left-0 w-full h-full"
        style={{
          backgroundImage: "url('https://w.forfun.com/fetch/e8/e81414e6a4b11a91d1caf6c42173f1d8.jpeg')",
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center'
        }}
      >
        <StarryBackground />
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="relative">
        <Header />
        <audio ref={audioRef} loop>
          <source src="https://cdn.pixabay.com/audio/2022/02/07/audio_cbe423d242.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <main>
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <Hero 
              tagline={portfolioData.tagline}
            />
          </div>
          <Marquee text={portfolioData.oneLineBio} />
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <Aka id="aka" aliases={portfolioData.aka} coreDetails={portfolioData.coreDetails} />
            <Bio id="publications" publications={portfolioData.publications} />
            <Skills id="skills" skills={portfolioData.coreSkills} />
            <Experience id="experience" experiences={portfolioData.experience} />
            <Education id="education" education={portfolioData.education} />
            <Achievements id="achievements" achievements={portfolioData.achievements} />
            <Hobbies id="hobbies" hobbies={portfolioData.hobbies} />
            <References id="references" references={portfolioData.references} />
            <CallToAction id="why-hire" text={portfolioData.whyHire} />
          </div>
        </main>
        <Footer isPlaying={isPlaying} toggleAudio={toggleAudio} />
      </div>
    </div>
  );
};

export default App;