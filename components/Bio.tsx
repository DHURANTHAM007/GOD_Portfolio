
import React from 'react';
import Section from './Section';
import type { IPublication } from '../types';

const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
);

const PhilosophyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.874 5.126A2 2 0 016 5h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 01.874-1.874zM8 5v14M16 5v14" /></svg>
);

const ComicIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.539 1.118l-3.975-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
);

const iconMap = {
  book: <BookIcon />,
  philosophy: <PhilosophyIcon />,
  comic: <ComicIcon />,
};

interface BioProps {
  publications: IPublication[];
  id: string;
}

const Bio: React.FC<BioProps> = ({ publications, id }) => {
  return (
    <Section title="Biography & Publications" id={id}>
      <div className="space-y-12">
        {publications.map((pub) => (
          <div key={pub.category}>
             <div className="flex items-center mb-4">
              {iconMap[pub.icon]}
              <h3 className="text-xl md:text-2xl font-bold ml-4 text-amber-200 font-display">{pub.category}</h3>
            </div>
            <ul className="list-disc list-inside text-slate-300 space-y-2 pl-4 md:pl-12">
              {pub.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Bio;