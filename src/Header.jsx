import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import ThemeToggle from './ThemeToggle';

const Header = () => {
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
          <div className="menu-container">
            <HiOutlineMenuAlt3 className="menu-svg" />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
