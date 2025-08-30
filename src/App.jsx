import Header from './components/Header/Header'
import SocialLinks from './components/SocialLinks/SocialLinks'
import About from './components/About/About'
import Hero from './components/Hero/Hero'

function App() {
  return (
    <div className="app">
      <Header />
      <SocialLinks />
      <Hero />
      <About />
    </div>
  )
}

export default App