
import React from 'react';
import Section from './Section';
import type { IHobby } from '../types';

interface HobbiesProps {
  hobbies: IHobby[];
}

const Hobbies: React.FC<HobbiesProps> = ({ hobbies }) => {
  return (
    <Section title="Hobbies & Side Projects">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {hobbies.map((hobby, index) => (
          <div key={index} className="p-6 rounded-lg bg-slate-900/30 border border-slate-800 backdrop-blur-sm text-center">
            <h3 className="text-lg font-bold text-amber-200">{hobby.name}</h3>
            <p className="text-slate-400 text-sm mt-1">{hobby.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Hobbies;
