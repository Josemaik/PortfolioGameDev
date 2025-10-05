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
            <p>I'm a <strong>Software Engineer</strong> passionate about video game development, specializing in <strong>C++ and Unreal Engine</strong>. </p>
            <p>Last year I finished my degree in <strong>Multimedia Engeneering</strong> in which I take my first steps in video game development and where my curiosity grew about the technical aspects of this field.
               Now I'm doing a <strong>Master's degree in video game programming</strong> to extend my knowledge with the help of industry programmers.</p>
              <p>In recent projects, I've focused on crafting custom <strong>AI systems</strong> — from behavior trees, blackboards, and navigation systems to AI perception frameworks — to create dynamic and engaging gameplay experiences. I also build editor tools and systems that allow designers to create engaging encounters and interactions with npcs.
              I’ve developed <strong>ECS-based game engines</strong> from scratch, emphasizing performance, scalability, and <strong>data-driven architectures</strong>. This experience deepened my understanding of how to design flexible, maintainable systems that push technical limits without sacrificing creativity.</p>
            <div className="about-cta">
              <a href="#contact" className="about-contact-btn">
                <svg className="about-contact-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.217l-8 4.8-8-4.8V4z"/>
                  <path d="M0 6.383V12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6.383l-7.555 4.533a.5.5 0 0 1-.49 0L0 6.383z"/>
                </svg>
                Contact
              </a>
            </div>
          </div>
          <div className="about-image">
            <img src="/assets/images/aboutme_picture.jpg" alt="Jose Manuel" />
          </div>
        </div>
      </section>
    </>
  )
}

export default About