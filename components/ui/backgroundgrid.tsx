
import React from 'react';

interface BackgroundGridProps {
  className?: string;
}

const BackgroundGrid: React.FC<BackgroundGridProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute inset-0" style={{ 
        backgroundImage: `
          linear-gradient(to right, #0098af10 1px, transparent 1px),
          linear-gradient(to bottom, #0098af10 1px, transparent 1px)
        `,
        backgroundSize: '24px 24px' 
      }} />
    </div>
  );
};

export default BackgroundGrid;
