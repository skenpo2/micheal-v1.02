import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
const Sections = () => {
  const { sections, sectionsRef } = useContext(ThemeContext);

  const sectionComponents = {
    about: <About />,
    experience: <Experience />,
    projects: <Projects />,
  };

  return (
    <>
      {sections.map((section, index) => (
        <div
          id={section}
          key={section}
          ref={(el) => (sectionsRef.current[index] = el)}
        >
          {sectionComponents[section]}
        </div>
      ))}
    </>
  );
};

export default Sections;
