import { social } from './data';

const Social = () => {
  return (
    <>
      {social.map((link) => {
        return (
          <div className="social-container" key={link.id}>
            <a className="svg" href={link.link}>
              <link.icon />
            </a>
          </div>
        );
      })}
    </>
  );
};

export default Social;