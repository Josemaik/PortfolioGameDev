import Header from './components/Header/Header'
import SocialLinks from './components/SocialLinks/SocialLinks'
import About from './components/About/About'
import Hero from './components/Hero/Hero'
import Experience from './components/Experience/Experience'
import TechnicalSkills from './components/TechnicalSkills'
import ProjectsCarousel from './components/ProjectsCarousel/ProjectsCarousel';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <SocialLinks />
      <About />
      <Experience />
      <TechnicalSkills />
      <ProjectsCarousel />
      <Footer />
    </div>
  )
}

export default App