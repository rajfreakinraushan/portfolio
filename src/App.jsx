import { ThemeProvider } from './ThemeProvider';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import ExtraCurricular from './components/ExtraCurricular';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Home />
        <About />
        <TechStack />
        <Projects />
        <Education />
        <Certifications />
        <ExtraCurricular />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
