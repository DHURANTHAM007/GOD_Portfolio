import React from 'react';
import Section from './Section';
import { ICoreDetail } from '../types';

interface AkaProps {
  aliases: string[];
  coreDetails: ICoreDetail[];
  id: string;
}

const Aka: React.FC<AkaProps> = ({ aliases, coreDetails, id }) => {
  return (
    <Section title="Core Details" id={id}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {coreDetails.map(detail => (
          <div key={detail.label} className="p-6 rounded-lg bg-slate-900/50 backdrop-blur-sm border border-slate-700/50">
            <h3 className="font-display text-lg md:text-xl text-amber-300 mb-2">{detail.label}</h3>
            <p className="text-slate-400">{detail.value}</p>
          </div>
        ))}
      </div>
      <div>
        <h3 className="font-display text-lg md:text-xl text-amber-300 mb-4">Also Known As</h3>
        <p className="text-slate-400 leading-relaxed">
          {aliases.join(' · ')}
        </p>
      </div>
    </Section>
  );
};

export default Aka;