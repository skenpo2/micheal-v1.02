// ThemeContext.js
import React, { createContext, useState, useEffect, useRef } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark'
  );

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // intersection observer context functionality

  const [activeSection, setActiveSection] = useState(''); // Manage active section globally
  const sectionsRef = useRef([]);

  const sections = ['about', 'experience', 'projects']; // Define your sections

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Update active section
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        showMenu,
        toggleMenu,
        setShowMenu,
        activeSection,
        sections,
        sectionsRef,
        scrollToSection,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
