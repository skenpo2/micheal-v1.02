import { social } from './data';

const Social = () => {
  return (
    <>
      {social.map((link) => {
        return (
          <div className="social-container" key={link.id}>
            <a className="svg" href={link.link} target="_blank">
              <link.icon className={link.name} />
            </a>
          </div>
        );
      })}
    </>
  );
};

export default Social;
