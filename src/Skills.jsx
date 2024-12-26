import { skills } from './data';
import RevealOnScroll from './RevealOnScroll';
import Skill from './Skill';
import Title from './Title';

const Skills = () => {
  return (
    <RevealOnScroll>
      <div className="category-container">
        <h3 className="page-title">
          <Title title={'Skills and Tools'} />
        </h3>
        <p>
          Over the years, I have gained valuable experience in various
          programming languages, and industry-standard frameworks.
        </p>
        <p>
          I am proficient in database management and version control systems
          such as Git and GitHub. My skill set also extends to CSS frameworks
          and UI/UX design principles.
        </p>
        <RevealOnScroll>
          {skills.map((group) => (
            <div key={group.category}>
              <div className="skill-container">
                {group.items.map((skill, index) => (
                  <Skill key={index} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </RevealOnScroll>
  );
};

export default Skills;
