
import React from 'react';
import Section from './Section';

interface AkaProps {
  aliases: string[];
}

const Aka: React.FC<AkaProps> = ({ aliases }) => {
  return (
    <Section title="AKA">
      <div className="flex flex-wrap justify-center items-center gap-4 max-w-5xl mx-auto">
        {aliases.map((alias, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-amber-200 hover:bg-amber-300 hover:text-black transition-all duration-300 cursor-default shadow-lg hover:shadow-amber-300/30"
          >
            {alias}
          </span>
        ))}
      </div>
    </Section>
  );
};

export default Aka;
