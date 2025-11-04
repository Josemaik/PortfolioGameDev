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
import TwoWonders from './projects/TwoWonders/TwoWonders';
import Teapathia from './projects/Teapathia/Teapathia';
import CodZombiesPrototype from './projects/CodZombiesPrototype/CodZombiesPrototype';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionTarget, setTransitionTarget] = useState(null); // null | 'home' | selector
  const topRef = useRef(null);

  const handleNavigateHome = () => {
    // If we're on a project page, navigate back to the main landing page
    if (typeof window !== 'undefined' && window.location.pathname.startsWith('/projects')) {
      // Use a full navigation to ensure the Router renders the landing route
      window.location.href = '/';
      return;
    }

    // Otherwise, only activate the branded transition if we've scrolled far down
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
    // If another page requested a pending scroll target (e.g., header button on project page), honor it
    const pending = typeof window !== 'undefined' ? localStorage.getItem('pendingScrollTarget') : null;
    if (pending) {
      // Clear pending immediately so it doesn't run again
      try { localStorage.removeItem('pendingScrollTarget'); } catch (e) {}
      setTransitionTarget(pending);
      setIsTransitioning(true);
      return;
    }

    // Start the branded page transition on first load so F5 shows the fade/logo
    setTransitionTarget('home');
    setIsTransitioning(true);
  }, []);
  
  return (
    <Router>
      <div className="app" ref={topRef}>
        <PageTransition 
          isActive={isTransitioning} 
          onTransitionEnd={handleTransitionEnd}
          onCovered={() => {
            if (transitionTarget === 'home') {
              window.scrollTo({ top: 0, behavior: 'auto' });
            } else if (typeof transitionTarget === 'string') {
              scrollToSelectorWithOffset(transitionTarget, true);
            }
          }}
        />

        <Header 
          onHomeClick={handleNavigateHome} 
          onNavigate={handleNavigateWithTransition} 
        />

        <Routes>
          {/* SPA Main Page */}
          <Route 
            path="/" 
            element={
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
            } 
          />

          {/* Lady Umbrella page */}
          <Route path="/projects/lady-umbrella" element={<LadyUmbrella />} />
          {/* Two Wonders page */}
          <Route path="/projects/two-wonders" element={<TwoWonders />} />
          {/* Cod Zombies Prototype page */}
          <Route path="/projects/cod-zombies-prototype" element={<CodZombiesPrototype />} />

          {/* Cod Zombies Prototype page */}
          <Route path="/projects/Teapathia" element={<Teapathia />} />

          {/* default rute */}
          <Route 
            path="*"
            element={
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
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
