import Header from './components/Header/Header'
import SocialLinks from './components/SocialLinks/SocialLinks'
import About from './components/About/About'
import Hero from './components/Hero/Hero'
import Experience from './components/Experience/Experience'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <SocialLinks />
      <About />
      <Experience />
    </div>
  )
}

export default App