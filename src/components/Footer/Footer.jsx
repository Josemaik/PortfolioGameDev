import './Footer.css';
import { FaGithub, FaLinkedin, FaInstagram, FaItchIo, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdYoutubeSearchedFor } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://github.com/Josemaik" target="_blank" rel="noopener noreferrer">
            <FaGithub className="footer-icon" />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="footer-icon" />
            <span>LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/jm_devmode/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="footer-icon" />
            <span>Instagram</span>
          </a>
          <a href="https://josemasito-6.itch.io/" target="_blank" rel="noopener noreferrer">
            <FaItchIo className="footer-icon" />
            <span>Itch.io</span>
          </a>
          <a href="mailto:jmdevmode@gmail.com">
            <MdEmail className="footer-icon" />
            <span>Email</span>
          </a>
           <a href="https://www.youtube.com/channel/UCqimzGorPrCjxY2vxmTfJoQ" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="footer-icon" />
            <span>Youtube</span>
          </a>
        </div>

        <div className="footer-copy">Copyright © 2025 Josemaik</div>
      </div>
    </footer>
  );
}
