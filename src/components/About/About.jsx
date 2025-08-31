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
      {/* <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow"></div>
      </div> */}

      <section ref={sectionRef} className="about">
        <div className="about-content">
          <div className="about-text">
            <h2>My Name is Jose Manuel, Game Programmer</h2>
            <p>A <b>game programmer</b> from Spain and I'm love with games since I was child. Last year I finished my degree in Multimedia Engeneering in which I take my first steps in video game development and where my curiosity grew about the technical aspects of this field.
               Now I'm doing a Master's degree in video game programming to extend my knowledge with the help of industry programmers.</p>
            <p>Besides, In my free time I like to attend talks to learn about the latest developments in different engines, but more focused on Unreal Engine and build different personal prototypes where I can apply new techniques.</p>
            <p>I am a person who enjoys working as a team, maintaining a healthy environment and where communication is the most important point. In addition, I like to go to the gym and play sports in general to maintain a good physical and mental state.</p>
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