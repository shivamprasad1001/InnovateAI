
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Icon from './Icon';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-neutral-light/50 dark:hover:bg-neutral-dark/50 text-neutral-dark dark:text-neutral-light focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? (
        <Icon name="moon" className="w-6 h-6" />
      ) : (
        <Icon name="sun" className="w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeToggle;
