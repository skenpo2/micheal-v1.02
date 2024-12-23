import { skills } from './data';
import Skill from './Skill';

const Skills = () => {
  return (
    <div className="category-container">
      <p>
        Over the years, I have gained valuable experience in various programming
        languages, and industry-standard frameworks.
        <p>
          I am proficient in database management and version control systems
          such as Git and GitHub. My skill set also extends to CSS frameworks
          and UI/UX design principles.
        </p>
      </p>
      {skills.map((group) => (
        <div key={group.category}>
          <div className="skill-container">
            {group.items.map((skill, index) => (
              <Skill key={index} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
