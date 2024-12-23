import { FaTerminal, FaCloudDownloadAlt, FaHeart } from 'react-icons/fa';
import Social from './Social';
import Title from './Title';

const Hero = () => {
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
          <FaTerminal style={{ color: '#213547', fontWeight: 'bold' }} /> Hire
          me!
        </a>
        <a className="download" href="#">
          Download Resume
          <FaCloudDownloadAlt />
        </a>
      </div>
      <div className="page">
        <div className="page-container">
          <div className="line"></div>
          <Title title="ABOUT" />
        </div>
        <Title title="EXPERIENCE" />
        <Title title="PROJECTS" />
      </div>
      <div className="social">
        <Social />
      </div>
    </article>
  );
};
export default Hero;
