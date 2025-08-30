import { useEffect, useRef } from 'react'
import './About.css'

const About = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in')
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow"></div>
      </div>

      <section ref={sectionRef} className="about">
        <div className="about-content">
          <div className="about-text">
            <h2>Hello, I'm Jose Manuel</h2>
            <p>Game programmer passionate about creating immersive experiences through code.
               Specializing in AI, gameplay mechanics, and tool development.</p>
          </div>
          <div className="about-image">
            <img src="/assets/images/profile.jpg" alt="Jose Manuel" />
          </div>
        </div>
      </section>
    </>
  )
}

export default About