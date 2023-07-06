import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
