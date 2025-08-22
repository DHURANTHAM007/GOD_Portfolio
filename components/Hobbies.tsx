
import React from 'react';
import Section from './Section';
import type { IHobby } from '../types';

interface HobbiesProps {
  hobbies: IHobby[];
  id: string;
}

const Hobbies: React.FC<HobbiesProps> = ({ hobbies, id }) => {
  return (
    <Section title="Hobbies & Side Projects" id={id}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
        {hobbies.map((hobby, index) => (
          <div key={index}>
            <h3 className="text-lg font-bold text-amber-200">{hobby.name}</h3>
            <p className="text-slate-400 text-sm mt-1">{hobby.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Hobbies;
