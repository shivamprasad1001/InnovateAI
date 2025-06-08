
import React from 'react';
import { CaseStudy } from '../types';
import Icon from './Icon';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  animationDelay?: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, animationDelay = 0 }) => {
  const [ref] = useScrollAnimation({ delay: animationDelay, animationClass: 'animate-fadeInUp' });

  return (
    <div 
      ref={ref}
      className="bg-white dark:bg-neutral-dark rounded-xl shadow-xl overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.02] dark:hover:shadow-primary/20 animate-on-scroll"
    >
      <div className="p-6 md:p-8">
        {caseStudy.visuals.screenshot && (
          <div className="mb-6 aspect-video bg-neutral-light dark:bg-gray-700 rounded-lg flex items-center justify-center text-neutral dark:text-gray-400 overflow-hidden transition-colors duration-300 ease-in-out">
             <img src={`https://picsum.photos/seed/${caseStudy.id}/600/338`} alt={`${caseStudy.client} screenshot`} className="w-full h-full object-cover"/>
          </div>
        )}
        <h3 className="text-sm font-semibold text-primary dark:text-primary-light uppercase tracking-wide mb-1 transition-colors duration-300 ease-in-out">{caseStudy.client}</h3>
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark dark:text-neutral-light mb-4 transition-colors duration-300 ease-in-out">The Challenge</h2>
        <p className="text-neutral dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-300 ease-in-out">{caseStudy.challenge}</p>

        <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark dark:text-neutral-light mb-4 transition-colors duration-300 ease-in-out">Our Solution</h2>
        <p className="text-neutral dark:text-gray-300 leading-relaxed whitespace-pre-line mb-6 transition-colors duration-300 ease-in-out">{caseStudy.solution}</p>

        {caseStudy.visuals.flowchart && (
            <div className="my-6 p-4 border border-dashed border-neutral-light dark:border-gray-700 rounded-md text-sm text-neutral dark:text-gray-400 italic transition-colors duration-300 ease-in-out">
                {caseStudy.visuals.flowchart}
            </div>
        )}

        <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark dark:text-neutral-light mb-4 transition-colors duration-300 ease-in-out">The Results</h2>
        <ul className="space-y-3 mb-6">
          {caseStudy.results.map((result, index) => (
            <li key={index} className="flex items-start">
              <Icon name="check" className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-neutral dark:text-gray-300 leading-relaxed transition-colors duration-300 ease-in-out">{result}</span>
            </li>
          ))}
        </ul>
         {caseStudy.visuals.demoVideo && (
            <div className="my-6 p-4 border border-dashed border-neutral-light dark:border-gray-700 rounded-md text-sm text-neutral dark:text-gray-400 italic transition-colors duration-300 ease-in-out">
                {caseStudy.visuals.demoVideo}
            </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyCard;