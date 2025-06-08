
import React from 'react';
import { Link } from 'react-router-dom';
import { HERO_HEADLINE, HERO_SUBHEADLINE, PRIMARY_CTA_TEXT, ROUTES } from '../constants';
import Button from './Button';
import Icon from './Icon';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const HomePageHero: React.FC = () => {
  const [h1Ref] = useScrollAnimation({ animationClass: 'animate-fadeInUp' });
  const [pRef] = useScrollAnimation({ animationClass: 'animate-fadeInUp', delay: 200 });
  const [buttonsRef] = useScrollAnimation({ animationClass: 'animate-fadeInUp', delay: 400 });
  const [imageRef] = useScrollAnimation({ animationClass: 'animate-fadeInUp', delay: 300 });


  return (
    <div className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 dark:from-primary/10 dark:via-neutral-darker dark:to-secondary/10 transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:py-28 sm:px-6 lg:px-8 text-center">
        <h1 
          ref={h1Ref}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-dark dark:text-neutral-light tracking-tight animate-on-scroll transition-colors duration-300 ease-in-out"
        >
          <span className="block">{HERO_HEADLINE.split('. ')[0]}.</span>
          <span className="block text-primary dark:text-primary-light transition-colors duration-300 ease-in-out">{HERO_HEADLINE.split('. ')[1]}</span>
        </h1>
        <p 
          ref={pRef}
          className="mt-6 max-w-lg mx-auto text-lg sm:text-xl text-neutral dark:text-gray-300 md:max-w-2xl animate-on-scroll transition-colors duration-300 ease-in-out"
        >
          {HERO_SUBHEADLINE}
        </p>
        <div 
          ref={buttonsRef}
          className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-on-scroll"
        >
          <Button to={ROUTES.CONTACT} size="lg" className="w-full sm:w-auto" rightIcon={<Icon name="chevronRight" className="w-5 h-5" />}>
            {PRIMARY_CTA_TEXT}
          </Button>
          <Button to={ROUTES.SERVICES} variant="outline" size="lg" className="w-full sm:w-auto">
            Explore Services
          </Button>
        </div>
        <div 
          ref={imageRef}
          className="mt-16 animate-on-scroll"
        >
          <img 
            src="https://picsum.photos/seed/aihero/1200/600" 
            alt="AI tools in action" 
            className="rounded-xl shadow-2xl dark:shadow-primary/10 mx-auto transition-shadow duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePageHero;