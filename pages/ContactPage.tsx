import React, { useState, useEffect } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import Icon from '../components/Icon';
import { 
  CONTACT_PAGE_HEADLINE, 
  CONTACT_FORM_HEADING, 
  CONTACT_BOOKING_PROMPT, 
  CALENDLY_LINK,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  FOUNDER_LINKEDIN,
  COMPANY_NAME
} from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [introHeadingRef] = useScrollAnimation({ animationClass: "animate-fadeInUp" });
  const [formRef] = useScrollAnimation({ animationClass: "animate-fadeInUp", delay: 100 });
  const [contactInfoRef] = useScrollAnimation({ animationClass: "animate-fadeInUp", delay: 200 });
  const [bookingRef] = useScrollAnimation({ animationClass: "animate-fadeInUp", delay: 300 });

  // Load Calendly script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
        setFormData({ name: '', email: '', company: '', message: '' });
        // setIsSubmitted(false); 
    }, 5000); // Show success message for longer
  };

  return (
    <>
      <Section className="bg-gradient-to-b from-primary/10 to-white dark:from-primary/20 dark:to-neutral-darker" ariaLabelledby="contact-intro-heading" applyAnimation={false}>
        <div ref={introHeadingRef} className="text-center animate-on-scroll">
          <h1 id="contact-intro-heading" className="text-4xl sm:text-5xl font-extrabold text-neutral-dark dark:text-neutral-light transition-colors duration-300 ease-in-out">
            {CONTACT_PAGE_HEADLINE}
          </h1>
          <p className="mt-4 text-xl text-neutral dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300 ease-in-out">
            We're excited to hear about your project and discuss how {COMPANY_NAME} can help you achieve your AI goals.
          </p>
        </div>
      </Section>

      <Section ariaLabelledby="contact-details-heading">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div ref={formRef} className="bg-white dark:bg-neutral-dark p-8 rounded-xl shadow-xl dark:shadow-primary/10 animate-on-scroll transition-all duration-300 ease-in-out">
            <h2 id="contact-details-heading" className="text-2xl font-bold text-neutral-dark dark:text-neutral-light mb-6 transition-colors duration-300 ease-in-out">
              {CONTACT_FORM_HEADING}
            </h2>
            {isSubmitted ? (
              <div className="text-center p-8 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg animate-scaleIn">
                <Icon name="check" className="w-12 h-12 text-green-500 dark:text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-2">Thank You!</h3>
                <p className="text-green-600 dark:text-green-400">Your message has been sent. We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral dark:text-gray-300 transition-colors duration-300 ease-in-out">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-white dark:bg-gray-700 text-neutral-dark dark:text-neutral-light placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 ease-in-out"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral dark:text-gray-300 transition-colors duration-300 ease-in-out">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-white dark:bg-gray-700 text-neutral-dark dark:text-neutral-light placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 ease-in-out"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral dark:text-gray-300 transition-colors duration-300 ease-in-out">Company Name (Optional)</label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-white dark:bg-gray-700 text-neutral-dark dark:text-neutral-light placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 ease-in-out"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral dark:text-gray-300 transition-colors duration-300 ease-in-out">How can we help you?</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-white dark:bg-gray-700 text-neutral-dark dark:text-neutral-light placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 ease-in-out"
                  />
                </div>
                <div>
                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Information & Booking */}
          <div className="space-y-8">
            <div ref={contactInfoRef} className="bg-white dark:bg-neutral-dark p-8 rounded-xl shadow-xl dark:shadow-primary/10 animate-on-scroll transition-all duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-neutral-dark dark:text-neutral-light mb-4 transition-colors duration-300 ease-in-out">Direct Contact</h3>
              <ul className="space-y-3 text-neutral dark:text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary dark:text-primary-light mr-3 transition-colors duration-300 ease-in-out" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary dark:hover:text-primary-light transition-colors duration-200 ease-in-out">{CONTACT_EMAIL}</a>
                </li>
                {CONTACT_PHONE && (
                  <li className="flex items-center">
                     <svg className="w-5 h-5 text-primary dark:text-primary-light mr-3 transition-colors duration-300 ease-in-out" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                    <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="hover:text-primary dark:hover:text-primary-light transition-colors duration-200 ease-in-out">{CONTACT_PHONE}</a>
                  </li>
                )}
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary dark:text-primary-light mr-3 transition-colors duration-300 ease-in-out" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                     <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <a href={FOUNDER_LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-primary-light transition-colors duration-200 ease-in-out">Connect on LinkedIn</a>
                </li>
              </ul>
            </div>

            {/* Calendly Booking Widget */}
            <div ref={bookingRef} className="bg-white dark:bg-neutral-dark rounded-xl shadow-xl dark:shadow-primary/10 animate-on-scroll transition-all duration-300 ease-in-out overflow-hidden">
              <div className="bg-primary dark:bg-primary-dark text-white p-6 text-center">
                <h3 className="text-2xl font-bold mb-2 transition-colors duration-300 ease-in-out">Schedule a Free Consultation</h3>
                <p className="text-primary-light dark:text-teal-300 transition-colors duration-300 ease-in-out">{CONTACT_BOOKING_PROMPT}</p>
              </div>
              {/* Calendly inline widget */}
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/founder-innovatai/30min?primary_color=0faf93" 
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ContactPage;
