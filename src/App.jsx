import './App.css';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Profile />
      <Aboutme />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
