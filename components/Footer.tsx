
import React from 'react';
import { COMPANY_NAME, NAV_LINKS, ROUTES } from '../constants';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-dark text-neutral-light dark:bg-neutral-darker dark:border-t dark:border-gray-700 transition-colors duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white dark:text-primary-light transition-colors duration-300 ease-in-out">{COMPANY_NAME}</h3>
            <p className="mt-2 text-sm text-gray-300 dark:text-gray-400 transition-colors duration-300 ease-in-out">AI-Powered Growth, Simplified.</p>
            {/* Optional: Add social media icons here */}
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 transition-colors duration-300 ease-in-out">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-base text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-primary-light transition-colors duration-200 ease-in-out">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 transition-colors duration-300 ease-in-out">Contact Us</h3>
            <ul className="mt-4 space-y-2">
               <li><Link to={ROUTES.CONTACT} className="text-base text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-primary-light transition-colors duration-200 ease-in-out">Get a Free Demo</Link></li>
               {/* Add email or phone if desired */}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 dark:border-gray-600 pt-8 text-center transition-colors duration-300 ease-in-out">
          <p className="text-base text-gray-400 dark:text-gray-500 transition-colors duration-300 ease-in-out">&copy; {currentYear} {COMPANY_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;