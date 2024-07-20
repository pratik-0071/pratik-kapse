import logo from './logo.svg';
import Nav from '../src/Components/Nav.jsx';
import Hero from '../src/Components/Hero.jsx';
import About from '../src/Components/About.jsx';
import Contact from '../src/Components/Contact.jsx';
import Skills from '../src/Components/Skills.jsx';
import Work from '../src/Components/Work.jsx';

function App() {
  return (
    <div className="App ">
      <Nav/>
      <Hero/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
