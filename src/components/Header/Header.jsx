import './Header.css'
import { FaFolder } from "react-icons/fa"

const brandLogo = "/assets/brand/brand-logo.gif"

const Header = ({ onHomeClick, onNavigate }) => {
  return (
    <header className="header">
      <div className="brand">
        <img 
          src={brandLogo} 
          alt="JOSEMIKE" 
          className="brand-logo"
        />
      </div>
      <nav className="navbar">
        <a href="#" onClick={(e) => {
          e.preventDefault();
          onHomeClick?.();
        }}>Home</a>
  <a href="https://github.com/Josemaik" target="_blank">GitHub</a>
  <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate?.('#contact'); }}>Contact</a>
  <a href="/documents/CV_JoseManuel.pdf" target="_blank" rel="noopener noreferrer">CV</a>
      </nav>
      <button
        aria-label="Go to portfolio"
        onClick={() => onNavigate?.('.projects-title')}
        className="portfolio-btn"
      >
        <span className="button-text">
          <FaFolder className="folder-icon" />
          <span className="label-text">Portfolio</span>
        </span>
        <span className="button-text-hover">
          <span className="label-text">Go!</span>
        </span>
      </button>
    </header>
  )
}

export default Header