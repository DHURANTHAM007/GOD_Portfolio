
import React from 'react';
import Section from './Section';
import type { IReference } from '../types';

interface ReferencesProps {
  references: IReference[];
  id: string;
}

const References: React.FC<ReferencesProps> = ({ references, id }) => {
  return (
    <Section title="References" id={id}>
      <div className="space-y-12">
        {references.map((ref, index) => (
          <blockquote key={index} className="p-4 sm:p-6 border-l-4 border-amber-400/50 bg-slate-900/50 backdrop-blur-sm">
            <p className="text-xl italic text-slate-300 leading-relaxed">"{ref.quote}"</p>
            <cite className="block mt-4 text-md font-semibold text-amber-200 not-italic">
              — {ref.author}
            </cite>
          </blockquote>
        ))}
      </div>
    </Section>
  );
};

export default References;