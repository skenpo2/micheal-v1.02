import PlaceHolder from './images/placeholder.png';
import RevealOnScroll from './RevealOnScroll';
import Tag from './Tag';

const ProjectCard = ({ name, image, description }) => {
  return (
    <RevealOnScroll>
      <article className="project-card">
        <div className="project-image">
          <img src={image || PlaceHolder} alt="Project preview" />
        </div>
        <div className="project-info">
          <h3 className="project-name">{name || 'project name'}</h3>
          <p className="project-description">
            {description ||
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet sunt a fuga nam eum officiis neque, ducimus fugit quas! Quae.'}
          </p>
          <div className="tag-container">
            <Tag tool={'react'} />
            <Tag tool={'api'} />
            <Tag tool={'css'} />
            <Tag tool={'javascript'} />
          </div>
        </div>
      </article>
    </RevealOnScroll>
  );
};

export default ProjectCard;
