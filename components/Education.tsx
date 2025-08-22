
import React from 'react';
import Section from './Section';
import type { IEducation } from '../types';

interface EducationProps {
  education: IEducation[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <Section title="Education & Certifications">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {education.map((edu, index) => (
          <div 
            key={index} 
            className="p-6 rounded-lg bg-slate-900/50 border border-slate-800 backdrop-blur-sm text-center float"
            style={{animationDelay: `${index * 0.2}s`}}
          >
            <h3 className="text-xl font-bold text-amber-300">{edu.institution}</h3>
            <p className="text-slate-400 mt-2">{edu.specialization}</p>
            <p className="text-amber-200 mt-4 italic">"{edu.certification}"</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
