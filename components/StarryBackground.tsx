import React from 'react';

const StarryBackground: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      {/* Drifting star layers */}
      <div id="stars1"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      
      {/* Shooting stars */}
      <div className="shooting-star" style={{ animationDelay: '1s' }}></div>
      <div className="shooting-star" style={{ animationDelay: '5s', animationDuration: '8s' }}></div>
      <div className="shooting-star" style={{ animationDelay: '12s', animationDuration: '12s' }}></div>
    </div>
  );
};

export default StarryBackground;