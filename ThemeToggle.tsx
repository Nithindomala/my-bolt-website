import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useThemeToggle } from '../hooks/useThemeToggle';

const ThemeToggle: React.FC = () => {
  const { darkMode, toggleTheme } = useThemeToggle();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-200"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-indigo-700" />
      )}
    </button>
  );
};

export default ThemeToggle;