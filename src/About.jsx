import { useState } from 'react';
import { aboutMe } from './data';
import Skills from './Skills';
import Title from './Title';

const About = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="about">
      <div className="section-title">
        <Title title="ABOUT" />
      </div>
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
              ......Continue reading
            </button>
          </p>
        )}
        <Skills />
      </div>
    </div>
  );
};
export default About;
