import { FaGithub } from 'react-icons/fa';
import PlaceHolder from './images/placeholder.png';
import RevealOnScroll from './RevealOnScroll';
import Tag from './Tag';
import { ImArrowUpRight2 } from 'react-icons/im';

const ProjectCard = ({ project }) => {
  console.log(project);
  return (
    <RevealOnScroll>
      <article className="project-card">
        <div className="project-image">
          <img src={project.image || PlaceHolder} alt="Project preview" />
        </div>
        <div className="project-info">
          <div className="name-preview">
            <h3 className="project-name">{project.name || 'project name'}</h3>
            <div className="preview">
              <div className="source">
                <a href="#" className="source-svg">
                  <FaGithub className="preview-svgs" />
                </a>
              </div>
              <div className="live-preview">
                <a href="#" className="preview-svg">
                  <ImArrowUpRight2 className="preview-svgs" />
                </a>
              </div>
            </div>
          </div>
          <p className="project-description">{project.description}</p>
          <div className="tag-container">
            <Tag tool={'React'} />
            <Tag tool={'HTML'} />

            <Tag tool={'CSS'} />
            <Tag tool={'Javascript'} />
          </div>
        </div>
      </article>
    </RevealOnScroll>
  );
};

export default ProjectCard;
