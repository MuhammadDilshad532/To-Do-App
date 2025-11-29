import React from 'react';
import { FaCheckCircle, FaMoon, FaSun } from 'react-icons/fa';

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="w-full py-6 px-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 shadow-lg">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <FaCheckCircle className="text-white text-3xl" />
          <div>
            <h1 className="text-2xl font-bold text-white">TaskMaster Pro</h1>
            <p className="text-blue-100 text-sm">Professional Task Management</p>
          </div>
        </div>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <FaSun className="text-white text-xl" />
          ) : (
            <FaMoon className="text-white text-xl" />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;