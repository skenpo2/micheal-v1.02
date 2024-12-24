import ProjectCard from './ProjectCard';
import Title from './Title';

const Projects = () => {
  return (
    <div className="section-container">
      <h3 className="section-title">
        <Title title={'PROJECTS'} />
      </h3>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};
export default Projects;
