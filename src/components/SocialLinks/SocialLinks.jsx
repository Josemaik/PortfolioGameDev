import { FaGithub, FaLinkedin, FaItchIo  } from 'react-icons/fa'
import { MdOutlineMail } from "react-icons/md";
import './SocialLinks.css'

const SocialLinks = () => {
  const socials = [
    { icon: <FaGithub />, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <FaItchIo />, url: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: <MdOutlineMail />, url: 'https://youtube.com/@yourusername', label: 'YouTube' }
  ]

  return (
    <div className="social-links">
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