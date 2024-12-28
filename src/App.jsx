import { useContext } from 'react';
import About from './About';
import Experience from './Experience';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import { ThemeContext } from './ThemeContext';
import Sections from './Sections';

const App = () => {
  const { setShowMenu } = useContext(ThemeContext);
  return (
    <main>
      <Header />
      <div className="content" onClick={() => setShowMenu(false)}>
        <section className="left">
          <Hero />
        </section>
        <section className="right">
          <Sections />
        </section>
      </div>
    </main>
  );
};
export default App;
