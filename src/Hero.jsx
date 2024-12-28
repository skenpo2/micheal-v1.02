import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

import { FaTerminal, FaCloudDownloadAlt, FaHeart } from 'react-icons/fa';
import Social from './Social';
import { nanoid } from 'nanoid';

const Hero = () => {
  const { activeSection, sections, scrollToSection } = useContext(ThemeContext);

  return (
    <article className="hero-content">
      <div className="text">
        <h1 className="name">Michael Obarewon</h1>
        <h3 className="job">Full Stack Web developer</h3>
        <p className="intro">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>
      </div>
      <div className="cto">
        <a className="hire" href="#">
          <FaTerminal className="hire-svg" /> Hire me!
        </a>
        <a className="download" href="#">
          Download Resume
          <FaCloudDownloadAlt />
        </a>
      </div>
      <div className="page">
        {sections.map((section) => {
          return (
            <button
              className={`nav-btn ${
                activeSection === section ? ' nav-btn page-active' : 'nav-btn'
              }`}
              key={section}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          );
        })}
      </div>
      <div className="social">
        <Social />
      </div>
    </article>
  );
};
export default Hero;
