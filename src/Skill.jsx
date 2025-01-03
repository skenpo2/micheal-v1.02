const Skill = ({ skill }) => {
  return (
    <div>
      <article className="skill">
        <span className="skill-svg-container">
          <skill.icon className={`skill-svg ${skill.name}`} />
        </span>
        {skill.name === 'Node'
          ? 'Node.js'
          : skill.name === 'Next'
          ? 'Next.js'
          : skill.name}
        {/* <p>{skill.description}</p> */}
      </article>
    </div>
  );
};

export default Skill;
