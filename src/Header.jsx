import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { MdOutlineDarkMode } from 'react-icons/md';

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
          <div className="dark-outer-container">
            <span className="dark-inner-container">
              <MdOutlineDarkMode className="dark-svg" />
            </span>
          </div>
          <div className="menu-container">
            <HiOutlineMenuAlt3 className="menu-svg" />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
