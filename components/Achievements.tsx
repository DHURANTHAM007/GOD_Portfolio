
import React from 'react';
import Section from './Section';
import type { IAchievement } from '../types';

interface AchievementsProps {
  achievements: IAchievement[];
}

const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  return (
    <Section title="Notable Achievements & Awards">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
        {achievements.map((ach, index) => (
          <div key={index} className="p-6">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-amber-400/10 border-2 border-amber-400/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 12l5.707 5.707a1 1 0 010 1.414L15 19m-4-1h-1a1 1 0 100 2h1a1 1 0 100-2zm-5-3h1a1 1 0 110 2H6a1 1 0 110-2z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-amber-200">{ach.title}</h3>
            <p className="text-slate-400 mt-2">{ach.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Achievements;
