import React, { useState, useEffect, useRef } from 'react';

const Cursor: React.FC = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ('ontouchstart' in window) {
      setIsTouchDevice(true);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (cursorDotRef.current && cursorOutlineRef.current) {
        cursorDotRef.current.style.left = `${clientX}px`;
        cursorDotRef.current.style.top = `${clientY}px`;
        
        cursorOutlineRef.current.animate({
          left: `${clientX}px`,
          top: `${clientY}px`
        }, { duration: 500, fill: "forwards" });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      <div 
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-amber-200 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50 transition-transform duration-75"
      ></div>
      <div
        ref={cursorOutlineRef}
        className="fixed top-0 left-0 w-8 h-8 border-2 border-amber-300/70 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50"
      ></div>
    </>
  );
};

export default Cursor;
