
import React from 'react';
import Section from './Section';
import type { IReference } from '../types';

interface ReferencesProps {
  references: IReference[];
}

const References: React.FC<ReferencesProps> = ({ references }) => {
  return (
    <Section title="References">
      <div className="space-y-12 max-w-4xl mx-auto">
        {references.map((ref, index) => (
          <blockquote key={index} className="text-center p-6 border-l-4 border-amber-300 bg-slate-900/30">
            <p className="text-xl italic text-slate-300">"{ref.quote}"</p>
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
