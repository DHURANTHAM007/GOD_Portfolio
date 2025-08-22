
import React from 'react';
import Section from './Section';

interface CallToActionProps {
  text: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ text }) => {
  return (
    <Section title="Why Hire God?">
      <div className="max-w-4xl mx-auto text-center p-8 bg-gradient-to-tr from-purple-900/30 to-amber-500/10 rounded-lg border border-amber-300/20 shadow-2xl shadow-amber-400/10">
        <p className="text-2xl md:text-3xl font-bold leading-relaxed text-amber-100">
          {text}
        </p>
      </div>
    </Section>
  );
};

export default CallToAction;
