
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
          <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-slate-900/50 backdrop-blur-sm border border-slate-700/50">
            <div className="mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-amber-400/10 border border-amber-400/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-300" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8-2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
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