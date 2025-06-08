
import React from 'react';
import { HowItWorksStepContent } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface HowItWorksStepProps {
  step: HowItWorksStepContent;
  index: number;
}

const HowItWorksStep: React.FC<HowItWorksStepProps> = ({ step, index }) => {
  const [ref] = useScrollAnimation({ delay: index * 150, animationClass: 'animate-fadeInUp' }); // Staggered delay

  return (
    <div ref={ref} className="flex animate-on-scroll">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white font-bold text-xl transition-colors duration-300 ease-in-out">
          {index + 1}
        </div>
      </div>
      <div className="ml-4">
        <h4 className="text-lg font-semibold text-neutral-dark dark:text-neutral-light transition-colors duration-300 ease-in-out">{step.title}</h4>
        <p className="mt-1 text-neutral dark:text-gray-300 transition-colors duration-300 ease-in-out">{step.description}</p>
      </div>
    </div>
  );
};

export default HowItWorksStep;