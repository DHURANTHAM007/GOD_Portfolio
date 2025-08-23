import React from 'react';
import Section from './Section';
import type { IExperience } from '../types';

interface ExperienceProps {
  experiences: IExperience[];
  id: string;
}

const Experience: React.FC<ExperienceProps> = ({ experiences, id }) => {
  return (
    <Section title="Experience (Select Gigs)" id={id}>
      <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-700/50">
        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-12 last:mb-0">
            {/* Dot on the timeline */}
            <div className="absolute -left-[34px] sm:-left-[42px] top-1 w-5 h-5 bg-[#0c0c1e] rounded-full border-4 border-amber-400 shadow-[0_0_10px_#fcd34d]"></div>
            
            <p className="text-sm text-amber-300 mb-1">{exp.period}</p>
            <h3 className="text-xl md:text-2xl font-display font-bold text-white">{exp.role}</h3>
            <p className="text-md md:text-lg text-slate-400 mb-4">{exp.company}</p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              {exp.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;