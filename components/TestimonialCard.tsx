
import React from 'react';
import { Testimonial } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface TestimonialCardProps {
  testimonial: Testimonial;
  animationDelay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, animationDelay = 0 }) => {
  const [ref] = useScrollAnimation({ delay: animationDelay, animationClass: 'animate-fadeInUp' });

  return (
    <div 
      ref={ref}
      className="bg-white dark:bg-neutral-dark p-8 rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-primary/20 transition-all duration-300 ease-in-out h-full flex flex-col animate-on-scroll transform hover:scale-[1.03]"
    >
      <div className="flex-grow">
        <p className="text-neutral-dark dark:text-neutral-light text-lg leading-relaxed italic transition-colors duration-300 ease-in-out">"{testimonial.quote}"</p>
      </div>
      <div className="mt-6 pt-6 border-t border-neutral-light/50 dark:border-gray-700 transition-colors duration-300 ease-in-out">
        <div className="flex items-center">
          {testimonial.image && (
            <img className="w-12 h-12 rounded-full mr-4 object-cover" src={testimonial.image} alt={testimonial.name} />
          )}
          {!testimonial.image && (
            <div className="w-12 h-12 rounded-full mr-4 bg-primary/20 dark:bg-primary-light/20 flex items-center justify-center text-primary dark:text-primary-light font-bold text-xl transition-colors duration-300 ease-in-out">
              {testimonial.name.charAt(0)}
            </div>
          )}
          <div>
            <p className="font-semibold text-neutral-dark dark:text-neutral-light transition-colors duration-300 ease-in-out">{testimonial.name}</p>
            <p className="text-sm text-neutral dark:text-gray-400 transition-colors duration-300 ease-in-out">{testimonial.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;