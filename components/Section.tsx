import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  title: string;
  id: string;
}

const Section: React.FC<SectionProps> = ({ children, title, id }) => {
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
      id={id}
      ref={sectionRef} 
      className={`py-16 md:py-24 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <h2 className="relative text-3xl md:text-4xl font-display font-bold text-left mb-12 text-amber-300 tracking-wider pb-4">
        {title}
        <span className="absolute bottom-0 left-0 h-1 w-20 bg-amber-400 rounded-full" style={{boxShadow: '0 0 15px rgba(252, 211, 77, 0.7)'}}></span>
      </h2>
      {children}
    </section>
  );
};

export default Section;
