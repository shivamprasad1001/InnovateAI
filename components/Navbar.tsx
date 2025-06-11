
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_NAME, NAV_LINKS, PRIMARY_CTA_TEXT, ROUTES } from '../constants';
import Icon from './Icon'; 
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white dark:bg-neutral-dark shadow-md dark:border-b dark:border-gray-700 sticky top-0 z-50 transition-colors duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to={ROUTES.HOME} className="flex-shrink-0 flex items-center">
  <img 
    src="public/logo.png" 
    alt={COMPANY_NAME}
    className="h-8 w-auto mr-3 transition-opacity duration-300 ease-in-out hover:opacity-80"
    onError={(e) => {
      e.currentTarget.style.display = 'none';
      e.currentTarget.nextElementSibling.style.display = 'block';
    }}
  />
  <h1 
    className="text-2xl font-bold text-primary dark:text-primary-light transition-colors duration-300 ease-in-out hidden"
    style={{ display: 'none' }}
  >
    {COMPANY_NAME}
  </h1>
</Link>
          </div>
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out ${
                    location.pathname === link.path
                      ? 'text-primary dark:text-primary-light bg-primary/10 dark:bg-primary/20'
                      : 'text-neutral-dark dark:text-neutral-light hover:text-primary dark:hover:text-primary-light hover:bg-primary/5 dark:hover:bg-primary/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
             <div className="ml-4">
               <ThemeToggle />
             </div>
            <Link
              to={ROUTES.CONTACT}
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              {PRIMARY_CTA_TEXT}
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="ml-2 bg-white dark:bg-neutral-dark inline-flex items-center justify-center p-2 rounded-md text-neutral-dark dark:text-neutral-light hover:text-primary dark:hover:text-primary-light hover:bg-neutral-light dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-all duration-200 ease-in-out"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <Icon name={isMobileMenuOpen ? "close" : "menu"} className="block h-6 w-6 transition-transform duration-300 ease-in-out" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100 border-t border-gray-200 dark:border-gray-700' : 'max-h-0 opacity-0'
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ease-in-out ${
                location.pathname === link.path
                  ? 'text-primary dark:text-primary-light bg-primary/10 dark:bg-primary/20'
                  : 'text-neutral-dark dark:text-neutral-light hover:text-primary dark:hover:text-primary-light hover:bg-primary/5 dark:hover:bg-primary/10'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center px-5">
            <Link
              to={ROUTES.CONTACT}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              {PRIMARY_CTA_TEXT}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
