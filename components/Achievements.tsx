
import React from 'react';
import Section from './Section';
import type { IAchievement } from '../types';

interface AchievementsProps {
  achievements: IAchievement[];
  id: string;
}

const Achievements: React.FC<AchievementsProps> = ({ achievements, id }) => {
  return (
    <Section title="Notable Achievements & Awards" id={id}>
      <div className="space-y-8">
        {achievements.map((ach, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-amber-400/10 border border-amber-400/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 12l5.707 5.707a1 1 0 010 1.414L15 19m-4-1h-1a1 1 0 100 2h1a1 1 0 100-2zm-5-3h1a1 1 0 110 2H6a1 1 0 110-2z" /></svg>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-amber-200">{ach.title}</h3>
              <p className="text-slate-400 mt-1">{ach.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Achievements;