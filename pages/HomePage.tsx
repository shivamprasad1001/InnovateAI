
import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import TestimonialCard from '../components/TestimonialCard';
import ServiceCard from '../components/ServiceCard';
import HomePageHero from '../components/HomePageHero';
import HowItWorksStep from '../components/HowItWorksStep';
import Icon from '../components/Icon';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { 
  PROBLEM_STATEMENTS, 
  HOW_IT_WORKS_STEPS, 
  TESTIMONIALS_DATA, 
  SERVICES_DATA, 
  PRIMARY_CTA_TEXT, 
  ROUTES,
  TRUSTED_BY_LOGOS_PLACEHOLDER
} from '../constants';

const HomePage: React.FC = () => {
  const [problemHeadingRef] = useScrollAnimation();
  const [solutionHeadingRef] = useScrollAnimation();
  const [howItWorksHeadingRef] = useScrollAnimation();
  const [servicesOverviewHeadingRef] = useScrollAnimation();
  const [testimonialsHeadingRef] = useScrollAnimation();
  const [finalCtaHeadingRef] = useScrollAnimation();
  const [trustedByHeadingRef] = useScrollAnimation();


  return (
    <>
      <HomePageHero /> {/* Hero has its own internal animations */}

      {/* Trusted By Section */}
      <Section className="bg-neutral-light dark:bg-neutral-dark" ariaLabelledby="trusted-by-heading" applyAnimation={false}>
        <div ref={trustedByHeadingRef} className="animate-on-scroll">
          <h2 id="trusted-by-heading" className="text-center text-2xl font-semibold text-neutral-dark dark:text-neutral-light mb-8 transition-colors duration-300 ease-in-out">
            Helping Businesses Grow
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {TRUSTED_BY_LOGOS_PLACEHOLDER.map((logo, index) => (
              <img 
                key={index} 
                src={logo} 
                alt={`Client logo ${index + 1}`} 
                className="h-10 md:h-12 object-contain dark:brightness-0 dark:invert transition-all duration-300 ease-in-out transform hover:scale-110"
                style={{ animationDelay: `${index * 100}ms` }} // Staggered animation for logos
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Problem Section */}
      <Section ariaLabelledby="problem-heading" applyAnimation={false}>
        <div ref={problemHeadingRef} className="text-center animate-on-scroll">
          <h2 id="problem-heading" className="text-3xl font-extrabold text-neutral-dark dark:text-neutral-light sm:text-4xl transition-colors duration-300 ease-in-out">
            Is Your Business Facing These Challenges?
          </h2>
          <p className="mt-4 text-xl text-neutral dark:text-gray-300 transition-colors duration-300 ease-in-out">
            You're not alone. Many businesses struggle with inefficiencies that AI can solve.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROBLEM_STATEMENTS.map((problem, index) => {
            const [cardRef] = useScrollAnimation({ delay: index * 150, animationClass: 'animate-fadeInUp' });
            return (
              <div key={index} ref={cardRef} className="bg-white dark:bg-neutral-dark p-6 rounded-lg shadow-md dark:shadow-lg dark:shadow-primary/10 animate-on-scroll transition-all duration-300 ease-in-out transform hover:scale-105">
                <p className="text-lg text-neutral-dark dark:text-neutral-light transition-colors duration-300 ease-in-out">{problem}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Solution Section */}
      <Section className="bg-primary/5 dark:bg-primary/10" ariaLabelledby="solution-heading" applyAnimation={false}>
         <div ref={solutionHeadingRef} className="text-center animate-on-scroll">
          <h2 id="solution-heading" className="text-3xl font-extrabold text-neutral-dark dark:text-neutral-light sm:text-4xl transition-colors duration-300 ease-in-out">
            Unlock Efficiency with Custom AI
          </h2>
          <p className="mt-4 text-xl text-neutral dark:text-gray-300 transition-colors duration-300 ease-in-out">
            We build intelligent tools that streamline your operations and boost productivity.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_DATA.slice(0, 3).map((service, index) => {
            const [cardRef] = useScrollAnimation({ delay: index * 150, animationClass: 'animate-fadeInUp' });
            return (
              <div key={service.id} ref={cardRef} className="bg-white dark:bg-neutral-dark p-8 rounded-xl shadow-lg text-center hover:shadow-primary/20 dark:hover:shadow-primary-light/20 transition-all duration-300 ease-in-out animate-on-scroll transform hover:scale-105">
                <Icon name={service.iconName} className="w-16 h-16 text-primary dark:text-primary-light mx-auto mb-6 transition-colors duration-300 ease-in-out" />
                <h3 className="text-xl font-semibold text-neutral-dark dark:text-neutral-light mb-3 transition-colors duration-300 ease-in-out">{service.title}</h3>
                <p className="text-neutral dark:text-gray-300 transition-colors duration-300 ease-in-out">{service.description.substring(0,100)}...</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* How It Works Section */}
      <Section ariaLabelledby="how-it-works-heading" applyAnimation={false}>
        <div ref={howItWorksHeadingRef} className="text-center animate-on-scroll">
          <h2 id="how-it-works-heading" className="text-3xl font-extrabold text-neutral-dark dark:text-neutral-light sm:text-4xl transition-colors duration-300 ease-in-out">
            Your AI Success in 3 Simple Steps
          </h2>
          <p className="mt-4 text-xl text-neutral dark:text-gray-300 transition-colors duration-300 ease-in-out">
            We make adopting AI straightforward and results-driven.
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="space-y-10">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <HowItWorksStep key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </Section>

      {/* Services Overview Section */}
      <Section className="bg-neutral-light dark:bg-neutral-dark" ariaLabelledby="services-overview-heading" applyAnimation={false}>
        <div ref={servicesOverviewHeadingRef} className="text-center animate-on-scroll">
          <h2 id="services-overview-heading" className="text-3xl font-extrabold text-neutral-dark dark:text-neutral-light sm:text-4xl transition-colors duration-300 ease-in-out">
            Our Core AI Services
          </h2>
          <p className="mt-4 text-xl text-neutral dark:text-gray-300 transition-colors duration-300 ease-in-out">
            Tailored solutions to meet your specific business needs.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={service.id} service={service} detailedLink={true} animationDelay={index * 100}/>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button to={ROUTES.SERVICES} size="lg" variant="outline">
            Explore All Services
          </Button>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section ariaLabelledby="testimonials-heading" applyAnimation={false}>
        <div ref={testimonialsHeadingRef} className="text-center animate-on-scroll">
          <h2 id="testimonials-heading" className="text-3xl font-extrabold text-neutral-dark dark:text-neutral-light sm:text-4xl transition-colors duration-300 ease-in-out">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-neutral dark:text-gray-300 transition-colors duration-300 ease-in-out">
            Real results from businesses like yours.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} animationDelay={index * 100}/>
          ))}
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section className="bg-primary dark:bg-primary-dark text-white" ariaLabelledby="final-cta-heading" applyAnimation={false}>
        <div ref={finalCtaHeadingRef} className="text-center animate-on-scroll">
          <h2 id="final-cta-heading" className="text-3xl font-extrabold sm:text-4xl transition-colors duration-300 ease-in-out">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="mt-4 text-xl text-primary-light dark:text-teal-300 transition-colors duration-300 ease-in-out">
            Let's discuss how our custom AI solutions can help you save time and achieve your goals.
          </p>
          <div className="mt-8">
            <Button 
              to={ROUTES.CONTACT} 
              size="lg" 
              className="bg-white text-primary hover:bg-neutral-light focus:ring-white dark:hover:bg-gray-200"
              rightIcon={<Icon name="chevronRight" className="w-5 h-5" />}
            >
              {PRIMARY_CTA_TEXT}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default HomePage;