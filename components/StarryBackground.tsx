
import React, { useMemo } from 'react';

const StarryBackground: React.FC = () => {
  const stars = useMemo(() => {
    const starArray = [];
    for (let i = 0; i < 150; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 2 + 1}px`,
        height: `${Math.random() * 2 + 1}px`,
        animationDelay: `${Math.random() * 4}s`,
        animationDuration: `${Math.random() * 3 + 2}s`,
      };
      starArray.push(
        <div
          key={i}
          className="absolute bg-white rounded-full twinkle"
          style={style}
        ></div>
      );
    }
    return starArray;
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      {stars}
    </div>
  );
};

export default StarryBackground;
