import { FaGithub } from 'react-icons/fa';
import PlaceHolder from './images/placeholder.png';
import RevealOnScroll from './RevealOnScroll';
import Tag from './Tag';

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
              <a href="#" className="source">
                <FaGithub /> Source
              </a>
              <div className="live-preview">
                <span className="glowing-dot"></span>
                <a className="preview-link" href="#">
                  Live
                </a>
              </div>
            </div>
          </div>
          <p className="project-description">
            {
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet sunt a fuga nam eum officiis neque, ducimus fugit quas! Quae.'
            }
          </p>
          <div className="tag-container">
            <Tag tool={'React'} />
            <Tag tool={'HTML'} />
            <Tag tool={'API'} />
            <Tag tool={'CSS'} />
            <Tag tool={'Javascript'} />
          </div>
        </div>
      </article>
    </RevealOnScroll>
  );
};

export default ProjectCard;
