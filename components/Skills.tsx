import React from 'react';
import Section from './Section';
import type { ISkill } from '../types';

interface SkillsProps {
  skills: ISkill[];
  id: string;
}

const SkillBar: React.FC<{ name: string; description: string }> = ({ name, description }) => {
    return (
        <div className="mb-8">
            <h3 className="text-lg md:text-xl font-display font-bold text-amber-200 mb-2">{name}</h3>
            <div className="w-full bg-slate-800/50 rounded-full h-2.5 mb-2">
                <div className="bg-gradient-to-r from-amber-400 to-amber-600 h-2.5 rounded-full" style={{ width: '100%', boxShadow: '0 0 10px rgba(252, 211, 77, 0.5)' }}></div>
            </div>
            <p className="text-slate-400">{description}</p>
        </div>
    );
};

const Skills: React.FC<SkillsProps> = ({ skills, id }) => {
  return (
    <Section title="Core Skills" id={id}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        {skills.map((skill) => (
          <SkillBar key={skill.name} name={skill.name} description={skill.description} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;