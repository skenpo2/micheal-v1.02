import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="dark-outer-container" onClick={toggleTheme}>
      <span
        className={`dark-inner-container ${
          theme === 'light' ? 'light' : 'dark'
        }`}
      >
        {theme === 'light' ? (
          <MdOutlineLightMode className="light-svg" />
        ) : (
          <MdOutlineDarkMode className="dark-svg" />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
