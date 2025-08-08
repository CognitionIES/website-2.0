// Design System Constants and Components
import React from 'react';

// Spacing System (8px base)
export const spacing = {
  xs: '8px',    // 8px
  sm: '16px',   // 16px
  md: '24px',   // 24px
  lg: '32px',   // 32px
  xl: '48px',   // 48px
  '2xl': '64px', // 64px
  '3xl': '96px', // 96px
} as const;

// Typography System
export const typography = {
  // Font Sizes
  xs: 'text-sm',     // 14px
  sm: 'text-base',   // 16px
  md: 'text-lg',     // 18px
  lg: 'text-xl',     // 20px
  xl: 'text-2xl',    // 24px
  '2xl': 'text-3xl', // 30px
  '3xl': 'text-4xl', // 36px
  '4xl': 'text-5xl', // 48px
  '5xl': 'text-6xl', // 60px
  
  // Font Weights
  normal: 'font-normal',   // 400
  semibold: 'font-semibold', // 600
  bold: 'font-bold',       // 700
  
  // Line Heights
  tight: 'leading-tight',   // 1.25
  normal: 'leading-normal', // 1.5
  relaxed: 'leading-relaxed', // 1.625
} as const;

// Color System
export const colors = {
  primary: {
    main: '#0098AF',
    dark: '#007B8F',
    light: '#99D5DF',
    bg: '#0098AF',
  },
  secondary: {
    main: '#003C46',
    light: '#5B5B5B',
  },
  background: {
    primary: '#F5FDFF',
    secondary: '#E6F0F5',
    white: '#FFFFFF',
  },
  text: {
    primary: '#003C46',
    secondary: '#5B5B5B',
    white: '#F5FDFF',
  }
} as const;

// Animation System
export const animations = {
  duration: {
    fast: '300ms',
    normal: '500ms',
    slow: '700ms',
  },
  easing: {
    easeOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

// Consistent Animation Component
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  isVisible: boolean;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  isVisible
}) => {
  return (
    <div
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-8 opacity-0'
      } ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionProperty: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};

// Consistent Card Component
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true 
}) => {
  return (
    <div className={`
      bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/50
      ${hover ? 'hover:shadow-2xl hover:scale-[1.01] transition-all duration-500' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};

// Consistent Button Component
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500 shadow-lg hover:shadow-xl hover:-translate-y-0.5',
    secondary: 'bg-slate-800 text-white hover:bg-slate-900 focus:ring-slate-500 shadow-lg hover:shadow-xl hover:-translate-y-0.5',
    outline: 'border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 focus:ring-white backdrop-blur-sm',
  };
  
  const sizes = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Section Container Component
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'primary' | 'secondary' | 'white';
  padding?: 'sm' | 'md' | 'lg';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'primary',
  padding = 'lg'
}) => {
  const backgrounds = {
    primary: 'bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100',
    secondary: 'bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100',
    white: 'bg-white',
  };
  
  const paddings = {
    sm: 'py-16',
    md: 'py-20',
    lg: 'py-24',
  };
  
  return (
    <section className={`${backgrounds[background]} ${paddings[padding]} relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-8">
        {children}
      </div>
    </section>
  );
};