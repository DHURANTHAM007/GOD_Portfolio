
import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  title: string;
}

const Section: React.FC<SectionProps> = ({ children, title }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`py-16 md:py-24 transition-opacity duration-1000 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-amber-300 tracking-wider">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
