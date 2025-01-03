import ProjectCard from './ProjectCard';
import Title from './Title';
import { projects } from './data';

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <h3 className="section-title">
        <Title title={'PROJECTS'} />
      </h3>

      {projects.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </section>
  );
};

export default Projects;
