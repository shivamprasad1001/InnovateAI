
import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import Icon from '../components/Icon';
import { SERVICES_DATA, TECHNOLOGY_STACK, PRIMARY_CTA_TEXT, ROUTES } from '../constants';
import { Service } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ServiceDetailCard: React.FC<{ service: Service, animationDelay?: number }> = ({ service, animationDelay = 0 }) => {
  const [ref] = useScrollAnimation({ delay: animationDelay, animationClass: 'animate-fadeInUp' });

  return (
    <div 
      ref={ref}
      id={service.id} 
      className="bg-white dark:bg-neutral-dark p-8 rounded-xl shadow-xl mb-12 transition-all duration-300 ease-in-out hover:shadow-primary/20 dark:hover:shadow-primary-light/20 animate-on-scroll transform hover:scale-[1.01]"
    >
      <div className="flex items-center mb-6">
        <Icon name={service.iconName} className="w-12 h-12 text-primary dark:text-primary-light mr-4 transition-colors duration-300 ease-in-out" />
        <h3 className="text-3xl font-bold text-neutral-dark dark:text-neutral-light transition-colors duration-300 ease-in-out">{service.title}</h3>
      </div>
      <p className="text-lg text-neutral dark:text-gray-300 mb-6 transition-colors duration-300 ease-in-out">{service.detailedDescription}</p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="text-xl font-semibold text-neutral-dark dark:text-neutral-light mb-3 transition-colors duration-300 ease-in-out">Key Benefits:</h4>
          <ul className="space-y-2">
            {service.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <Icon name="check" className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-neutral dark:text-gray-300 transition-colors duration-300 ease-in-out">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-neutral-dark dark:text-neutral-light mb-3 transition-colors duration-300 ease-in-out">Who It's For:</h4>
          <p className="text-neutral dark:text-gray-300 transition-colors duration-300 ease-in-out">{service.whoIsItFor}</p>
        </div>
      </div>

      {service.link && (
        <div className="mt-6">
          <Button to={service.link} variant="outline">
            Get Started with {service.title.split(' ')[0]}
          </Button>
        </div>
      )}
    </div>
  );
};


const ServicesPage: React.FC = () => {
  const [introHeadingRef] = useScrollAnimation({ animationClass: "animate-fadeInUp" });
  const [techStackHeadingRef] = useScrollAnimation({ animationClass: "animate-fadeInUp" });
  const [techStackItemsRef] = useScrollAnimation({ animationClass: "animate-fadeInUp", delay: 200 });
  const [ctaRef] = useScrollAnimation({animationClass: "animate-fadeInUp"});

  return (
    <>
      <Section className="bg-gradient-to-b from-primary/10 to-white dark:from-primary/20 dark:to-neutral-darker" ariaLabelledby="services-intro-heading" applyAnimation={false}>
        <div ref={introHeadingRef} className="text-center animate-on-scroll">
          <h1 id="services-intro-heading" className="text-4xl sm:text-5xl font-extrabold text-neutral-dark dark:text-neutral-light transition-colors duration-300 ease-in-out">Our AI Solutions</h1>
          <p className="mt-4 text-xl text-neutral dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300 ease-in-out">
            We empower your business with cutting-edge, custom AI tools designed to solve real problems, enhance efficiency, and drive growth. Discover how we can tailor AI to your unique needs.
          </p>
        </div>
      </Section>

      {/* Detailed Service Categories */}
      <Section ariaLabelledby="detailed-services-heading">
        <h2 id="detailed-services-heading" className="sr-only">Detailed Service Categories</h2>
        {SERVICES_DATA.map((service, index) => (
          <ServiceDetailCard key={service.id} service={service} animationDelay={index * 100}/>
        ))}
      </Section>

      {/* Technology Stack Section */}
      <Section className="bg-neutral-light dark:bg-neutral-dark" ariaLabelledby="tech-stack-heading" applyAnimation={false}>
        <div ref={techStackHeadingRef} className="text-center animate-on-scroll">
          <h2 id="tech-stack-heading" className="text-3xl font-extrabold text-neutral-dark dark:text-neutral-light sm:text-4xl transition-colors duration-300 ease-in-out">
            Our Technology Arsenal
          </h2>
          <p className="mt-4 text-xl text-neutral dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300 ease-in-out">
            We leverage industry-leading technologies and frameworks to build robust, scalable, and effective AI solutions.
          </p>
        </div>
        <div ref={techStackItemsRef} className="mt-12 max-w-4xl mx-auto animate-on-scroll">
          <div className="flex flex-wrap justify-center gap-4">
            {TECHNOLOGY_STACK.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white dark:bg-gray-700 text-primary dark:text-primary-light rounded-full shadow-md dark:shadow-sm dark:shadow-primary/10 text-sm font-medium border border-primary/20 dark:border-primary-light/30 transition-all duration-300 ease-in-out transform hover:scale-110"
                style={{ animationDelay: `${index * 50}ms` }} // Staggered animation for tech items
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section ariaLabelledby="services-cta-heading" applyAnimation={false}>
        <div ref={ctaRef} className="bg-primary dark:bg-primary-dark p-8 md:p-12 rounded-xl text-center shadow-xl animate-on-scroll transition-all duration-300 ease-in-out">
          <h2 id="services-cta-heading" className="text-3xl font-extrabold text-white sm:text-4xl transition-colors duration-300 ease-in-out">
            Ready to Implement AI in Your Business?
          </h2>
          <p className="mt-4 text-xl text-primary-light dark:text-teal-300 max-w-2xl mx-auto transition-colors duration-300 ease-in-out">
            Let's discuss your specific requirements and how our AI expertise can help you achieve your objectives.
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

export default ServicesPage;