import { FaGithub, FaLinkedin, FaItchIo  } from 'react-icons/fa'
import { MdOutlineMail } from "react-icons/md";
import { useState, useEffect } from 'react' 
import './SocialLinks.css'

const SocialLinks = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsDark(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    const aboutSection = document.querySelector('.about')
    if (aboutSection) {
      observer.observe(aboutSection)
    }

    return () => observer.disconnect()
  }, [])
  const socials = [
    { icon: <FaGithub />, url: 'https://github.com/Josemaik', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/josemanuelsorianob/', label: 'LinkedIn' },
    { icon: <FaItchIo />, url: 'https://josemasito-6.itch.io/', label: 'Itch.io' },
    { icon: <MdOutlineMail />, url: 'mailto:jmdevmode@gmail.com', label: 'Email' }
  ]

  return (
    <div className={`social-links ${isDark ? 'dark' : ''}`}>
      {socials.map((social, index) => (
        <a 
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="social-icon"
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}

export default SocialLinks