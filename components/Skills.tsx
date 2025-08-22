
import React from 'react';
import Section from './Section';
import type { ISkill } from '../types';

interface SkillsProps {
  skills: ISkill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Section title="Core Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group p-6 rounded-lg bg-slate-900/50 border border-slate-800 backdrop-blur-sm transform transition-all duration-300 hover:-translate-y-2 hover:border-amber-300/50 hover:shadow-2xl hover:shadow-amber-400/10"
          >
            <h3 className="text-2xl font-bold text-amber-300 mb-2">{skill.name}</h3>
            <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
