import './App.css';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import Skills from './components/Skills/Skills';
import Connect from './components/Connect/Connect';
import Footer from './components/Footer/Footer';
import AOS from 'aos';


function App() {
  AOS.init({offset: 400, 
    delay: 10});
  
  return (
    <div className="App">
      <Home />
      <ScrollProgress />
      <Skills/>
      <Projects/>
      <Connect/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
