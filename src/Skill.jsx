const Skill = ({ skill }) => {
  return (
    <div>
      <article className="skill">
        <span className="skill-svg-container">
          <skill.icon className="skill-svg" />
        </span>
        {skill.name}
        {/* <p>{skill.description}</p> */}
      </article>
    </div>
  );
};

export default Skill;
