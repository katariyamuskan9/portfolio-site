import { useRef} from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import SideNav from './components/SideNav'
import Experience from './components/Experience'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);

  const skillsRef=useRef(null);
  const expRef=useRef(null);
  const projectRef=useRef(null)
  const contactRef = useRef(null);

  // Scroll to the section when called
  const scrollToSection = (sectionRef) => {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // ibelic.com for background
  <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900' >
    <div className=' fixed top-0 -z-10 h-full w-full '>
  <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div></div>
  <div className='container mx-auto px-8'>
  <div>
    <Navbar />
            <SideNav scrollToSection={scrollToSection} homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} expRef={expRef} projectRef={projectRef} contactRef={contactRef} />
            <section ref={homeRef}>
                <Hero />
            </section>
            <section ref={aboutRef}>
                <About />
            </section>
            <section ref={skillsRef}>
                <Skills />
            </section>
            <section ref={expRef}>
                <Experience />
            </section>
            <section ref={projectRef}>
                <Projects />
            </section>
            <section ref={contactRef}>
                <Contact />
            </section>
        </div>
  </div>

  </div>
  )
}

export default App
