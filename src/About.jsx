import { useState } from 'react';
import { aboutMe } from './data';
import Skills from './Skills';
import Title from './Title';

const About = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <section className="section-container">
      <h3 className="section-title">
        <Title title="ABOUT" />
      </h3>
      <div className="about-text">
        {readMore ? (
          <article>
            <p>{aboutMe.description[0]}</p>
            <p>{aboutMe.description[1]}</p>
            <p>{aboutMe.description[2]}</p>
            <p>
              {aboutMe.description[3]}
              <br></br>
              <button
                className="read-btn"
                onClick={() => {
                  setReadMore(!readMore);
                }}
              >
                Show Less
              </button>
            </p>
          </article>
        ) : (
          <p>
            {aboutMe.description[0]}
            <button
              className="read-btn"
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              ....Continue reading
            </button>
          </p>
        )}
        <Skills />
      </div>
    </section>
  );
};
export default About;
