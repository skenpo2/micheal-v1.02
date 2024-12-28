import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { FaXmark } from 'react-icons/fa6';
import { useContext, useRef } from 'react';
import ThemeToggle from './ThemeToggle';
import { navLinks } from './data';
import { ThemeContext } from './ThemeContext';
const Header = () => {
  const { showMenu, toggleMenu, setShowMenu } = useContext(ThemeContext);
  const containerRef = useRef(null);

  const linkStyles = {
    height: showMenu
      ? `${containerRef.current.getBoundingClientRect().height}px`
      : '0px',
  };

  return (
    <nav className="header">
      <div className="nav-container">
        <div className="nav-left">
          <div className="logo-container">
            <h3 className="logo">
              M <span className="log-bar">/</span>O
            </h3>
          </div>
        </div>
        <div className="nav-right">
          <ThemeToggle />
          <button onClick={toggleMenu} className="menu-container">
            {showMenu ? (
              <FaXmark className="menu-svg" />
            ) : (
              <HiOutlineMenuAlt3 className="menu-svg" />
            )}
          </button>
        </div>
      </div>

      <div className="menu-page-container" style={linkStyles}>
        <ul ref={containerRef} className="menu-list">
          {navLinks.map((link) => {
            return (
              <a
                key={link.id}
                href={link.url}
                className="link-item"
                onClick={() => setShowMenu(false)}
              >
                {link.name}
              </a>
            );
          })}
          {/* <div className="nav-bar-social">
            <Social />
          </div> */}
        </ul>
      </div>
    </nav>
  );
};
export default Header;
