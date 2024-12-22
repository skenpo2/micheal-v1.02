import About from './About';
import Experience from './Experience';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';

const App = () => {
  return (
    <main>
      <div className="navbar">
        <Header />
      </div>
      <div className="content">
        <section className="left">
          <Hero />
        </section>
        <section className="right">
          <About />
          <Experience />
          <Projects />
        </section>
      </div>
    </main>
  );
};
export default App;
