
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ariaLabelledby?: string;
  applyAnimation?: boolean; // New prop to control animation
  animationOptions?: Parameters<typeof useScrollAnimation>[0]; // Pass options to hook
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id, 
  ariaLabelledby, 
  applyAnimation = true, // Default to true
  animationOptions 
}) => {
  const [ref, isVisible] = useScrollAnimation(animationOptions);
  const animationClasses = applyAnimation ? 'animate-on-scroll' : ''; // Class to set initial opacity to 0

  return (
    <section 
      ref={applyAnimation ? ref : undefined}
      id={id} 
      aria-labelledby={ariaLabelledby}
      className={`py-12 md:py-20 transition-colors duration-300 ease-in-out ${animationClasses} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;