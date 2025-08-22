import React from 'react';
import Section from './Section';

interface CallToActionProps {
  text: string;
  id: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ text, id }) => {
  return (
    <Section title="Why Hire God?" id={id}>
      <div className="text-center py-8">
        <p className="text-2xl md:text-3xl font-semibold leading-relaxed text-amber-100" style={{ textShadow: '0 0 15px rgba(252, 211, 77, 0.5)' }}>
          {text}
        </p>
      </div>
    </Section>
  );
};

export default CallToAction;
