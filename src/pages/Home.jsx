import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Services from '../components/Services';
import Contact from '../components/Contact';
import usePauseOffscreen from '../lib/usePauseOffscreen';

export default function Home() {
  usePauseOffscreen();
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Services />
      <Contact />
    </main>
  );
}
