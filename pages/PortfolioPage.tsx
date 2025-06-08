
import React from 'react';
import Section from '../components/Section';
import CaseStudyCard from '../components/CaseStudyCard';
import Button from '../components/Button';
import Icon from '../components/Icon';
import { INSTAGRAM_SELLER_CASE_STUDY, PRIMARY_CTA_TEXT, ROUTES } from '../constants';
import { CaseStudy } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CASE_STUDIES_DATA: CaseStudy[] = [
  INSTAGRAM_SELLER_CASE_STUDY,
  // {
  //   id: 'ecommerce-reporting',
  //   client: 'Medium E-commerce Enterprise',
  //   challenge: 'Struggled with consolidating sales data from multiple platforms (Shopify, Amazon, offline stores) into a unified dashboard for quick decision-making. Manual report generation was time-consuming and error-prone.',
  //   solution: 'Developed an AI-powered data pipeline and analytics dashboard. The system automatically ingests data from various sources, cleans and transforms it, and presents key metrics (total sales, sales by channel, top products, customer LTV) in an interactive, real-time dashboard. Implemented anomaly detection to flag unusual sales patterns.',
  //   results: [
  //     "Reduced report generation time by 95% (from 8 hours/week to 15 minutes automated).",
  //     "Provided a single source of truth for sales performance, improving strategic alignment.",
  //     "Enabled proactive identification of sales trends and inventory needs.",
  //     "Estimated 10% increase in marketing campaign effectiveness due to faster data insights."
  //   ],
  //   visuals: {
  //     screenshot: "[Placeholder: Screenshot of the unified sales analytics dashboard]",
  //     flowchart: "[Placeholder: Diagram of the data ingestion and processing pipeline]",
  //   }
  // }
];


const PortfolioPage: React.FC = () => {
  const [introHeadingRef] = useScrollAnimation({ animationClass: "animate-fadeInUp" });
  const [emptyPortfolioRef] = useScrollAnimation({ animationClass: "animate-fadeInUp" });
  const [ctaRef] = useScrollAnimation({ animationClass: "animate-fadeInUp" });

  return (
    <>
      <Section className="bg-gradient-to-b from-primary/10 to-white dark:from-primary/20 dark:to-neutral-darker" ariaLabelledby="portfolio-intro-heading" applyAnimation={false}>
        <div ref={introHeadingRef} className="text-center animate-on-scroll">
          <h1 id="portfolio-intro-heading" className="text-4xl sm:text-5xl font-extrabold text-neutral-dark dark:text-neutral-light transition-colors duration-300 ease-in-out">
            See Our AI Tools in Action
          </h1>
          <p className="mt-4 text-xl text-neutral dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300 ease-in-out">
            Explore how we've helped businesses like yours leverage artificial intelligence to solve complex challenges, automate processes, and achieve remarkable results.
          </p>
        </div>
      </Section>

      {/* Case Studies Section */}
      <Section ariaLabelledby="case-studies-list-heading">
        <h2 id="case-studies-list-heading" className="sr-only">Case Studies</h2>
        {CASE_STUDIES_DATA.length > 0 ? (
          <div className="space-y-16">
            {CASE_STUDIES_DATA.map((caseStudy, index) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} animationDelay={index * 150} />
            ))}
          </div>
        ) : (
          <div ref={emptyPortfolioRef} className="text-center py-12 animate-on-scroll">
            <Icon name="briefcase" className="w-16 h-16 text-neutral dark:text-gray-500 mx-auto mb-4 transition-colors duration-300 ease-in-out" />
            <h3 className="text-2xl font-semibold text-neutral-dark dark:text-neutral-light mb-2 transition-colors duration-300 ease-in-out">Our Portfolio is Growing!</h3>
            <p className="text-neutral dark:text-gray-300 max-w-md mx-auto transition-colors duration-300 ease-in-out">
              We're busy building innovative AI solutions for our clients. Check back soon to see detailed case studies of our latest projects.
            </p>
          </div>
        )}
      </Section>
      
      {/* CTA Section */}
      <Section className="bg-neutral-light dark:bg-neutral-dark" ariaLabelledby="portfolio-cta-heading" applyAnimation={false}>
        <div ref={ctaRef} className="text-center animate-on-scroll">
          <h2 id="portfolio-cta-heading" className="text-3xl font-extrabold text-neutral-dark dark:text-neutral-light sm:text-4xl transition-colors duration-300 ease-in-out">
            Have a Project in Mind?
          </h2>
          <p className="mt-4 text-xl text-neutral dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300 ease-in-out">
            If you're inspired by these solutions or have a unique challenge, let's talk. We can build a custom AI tool tailored to your specific needs.
          </p>
          <div className="mt-8">
            <Button 
              to={ROUTES.CONTACT} 
              size="lg" 
              variant="primary"
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

export default PortfolioPage;