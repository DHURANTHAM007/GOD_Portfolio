import React from 'react';
import Section from './Section';
import type { IEducation } from '../types';

interface EducationProps {
  education: IEducation[];
  id: string;
}

const Education: React.FC<EducationProps> = ({ education, id }) => {
  return (
    <Section title="Education & Certifications" id={id}>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div 
            key={index}
          >
            <h3 className="text-lg md:text-xl font-display font-bold text-amber-300">{edu.institution}</h3>
            <p className="text-slate-400 mt-1">{edu.specialization}</p>
            <p className="text-amber-200 mt-2 italic">"{edu.certification}"</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;