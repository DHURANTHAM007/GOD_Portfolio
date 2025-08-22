
import React from 'react';
import Section from './Section';
import type { IExperience } from '../types';

interface ExperienceProps {
  experiences: IExperience[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <Section title="Experience (Select Gigs)">
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-slate-700"></div>
        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-12">
            <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} w-full`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="p-6 rounded-lg bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
                  <p className="text-sm text-amber-300 mb-1">{exp.period}</p>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-md text-slate-400 mb-4">{exp.company}</p>
                  <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 w-4 h-4 bg-amber-300 rounded-full border-4 border-slate-800 shadow-lg shadow-amber-300/50"></div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
