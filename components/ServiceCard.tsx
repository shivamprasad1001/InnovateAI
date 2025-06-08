
import React from 'react';
import { Service } from '../types';
import Icon from './Icon'; 
import Button from './Button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ServiceCardProps {
  service: Service;
  detailedLink?: boolean; 
  animationDelay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, detailedLink = false, animationDelay = 0 }) => {
  const [ref] = useScrollAnimation({ delay: animationDelay, animationClass: 'animate-fadeInUp' });

  return (
    <div 
      ref={ref}
      className="bg-white dark:bg-neutral-dark p-6 rounded-lg shadow-lg hover:shadow-xl dark:hover:shadow-primary/20 transition-all duration-300 ease-in-out flex flex-col h-full animate-on-scroll transform hover:scale-[1.03]"
    >
      <div className="flex-shrink-0 mb-4">
        <Icon name={service.iconName} className="w-12 h-12 text-primary dark:text-primary-light transition-colors duration-300 ease-in-out" />
      </div>
      <h3 className="text-xl font-semibold text-neutral-dark dark:text-neutral-light mb-2 transition-colors duration-300 ease-in-out">{service.title}</h3>
      <p className="text-neutral dark:text-gray-300 flex-grow mb-4 transition-colors duration-300 ease-in-out">{service.description}</p>
      {detailedLink && service.link && (
         <Button to={service.link} variant="outline" size="sm" className="mt-auto self-start">
          Learn More
        </Button>
      )}
    </div>
  );
};

export default ServiceCard;