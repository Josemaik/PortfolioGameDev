import { useState, useRef, useEffect } from 'react';
import Header from './components/Header/Header'
import SocialLinks from './components/SocialLinks/SocialLinks'
import About from './components/About/About'
import Hero from './components/Hero/Hero'
import Experience from './components/Experience/Experience'
import TechnicalSkills from './components/TechnicalSkills'
import ProjectsCarousel from './components/ProjectsCarousel/ProjectsCarousel';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import PageTransition from './components/PageTransition/PageTransition';
import LadyUmbrella from './projects/LadyUmbrella/LadyUmbrella';

function App() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionTarget, setTransitionTarget] = useState(null); // null | 'home' | selector
  const topRef = useRef(null);

  const handleNavigateHome = () => {
    // Solo activar la transición si no estamos ya en la parte superior
    if (window.scrollY > 700) {
      setTransitionTarget('home');
      setIsTransitioning(true);
    }
  };

  // General navigate that triggers the page transition and scrolls to a selector after the animation
  const handleNavigateWithTransition = (targetSelector) => {
    setTransitionTarget(targetSelector || 'projects-title');
    setIsTransitioning(true);
  };

  // Helper to scroll to a selector accounting for fixed header height
  const scrollToSelectorWithOffset = (selector, instant = true) => {
    if (!selector) return;
    const el = document.querySelector(selector);
    if (!el) return;
    const header = document.querySelector('.header');
    const headerHeight = header ? header.offsetHeight : 0;
    const top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8; // small gap
    window.scrollTo({ top, behavior: instant ? 'auto' : 'smooth' });
  };

  const handleTransitionEnd = () => {
    // Decide dónde ir según el target
    if (transitionTarget === 'home') {
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (typeof transitionTarget === 'string') {
      // Try to find element by selector and scroll to it (smooth after transition)
      scrollToSelectorWithOffset(transitionTarget, false);
    }
    setIsTransitioning(false);
    setTransitionTarget(null);
  };

  // Ensure page starts at top on reload
  useEffect(() => {
    // Start the branded page transition on first load so F5 shows the fade/logo
    setTransitionTarget('home');
    setIsTransitioning(true);
  }, []);

  return (
    <div className="app" ref={topRef}>
      <PageTransition 
        isActive={isTransitioning} 
        onTransitionEnd={handleTransitionEnd}
        onCovered={() => {
          // Cuando la pantalla está cubierta por el overlay, colocamos la vista
          // en el objetivo sin animación visible para el usuario (ajustando por header)
          if (transitionTarget === 'home') {
            window.scrollTo({ top: 0, behavior: 'auto' });
          } else if (typeof transitionTarget === 'string') {
            scrollToSelectorWithOffset(transitionTarget, true);
          }
        }}
      />
      <Header onHomeClick={handleNavigateHome} onNavigate={handleNavigateWithTransition} />
      {/* Simple path-based rendering for project pages */}
      {window.location.pathname === '/projects/lady-umbrella' ? (
        <LadyUmbrella />
      ) : (
        <>
          <Hero />
          <SocialLinks />
          <About />
          <Experience />
          <TechnicalSkills />
          <ProjectsCarousel />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App