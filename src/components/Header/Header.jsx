import './Header.css'
import { FaFolder, FaBars, FaTimes } from "react-icons/fa"
import { useState } from 'react'

const brandLogo = "/assets/brand/brand-logo.gif"
const brandLogoBlue = "/assets/brand/brand_logo_blue.gif"
const brandLogoPurple = "/assets/brand/brand_logo_purple.gif"

const Header = ({ onHomeClick, onNavigate }) => {
  const [open, setOpen] = useState(false)
  const isProject = typeof window !== 'undefined' && window.location.pathname.startsWith('/projects');
  const isTwoWonders = typeof window !== 'undefined' && window.location.pathname.startsWith('/projects/two-wonders');
  const brandlogochoose = isProject ? (isTwoWonders ? brandLogoPurple : brandLogoBlue) : brandLogo;
  const HeaderClassName = isProject ? (isTwoWonders ? 'header--two-wonders' : 'header--lday-umbrella') : '';
  return (
    <header className={`header ${HeaderClassName}`}>
      <div className="brand">
        <img 
          src={brandlogochoose} 
          alt="JOSEMIKE" 
          className="brand-logo"
        />
      </div>
      <nav className={`navbar ${open ? 'open' : ''}`}>
        <a href="#" onClick={(e) => {
          e.preventDefault();
          onHomeClick?.();
        }}>Home</a>
  <a href="https://github.com/Josemaik" target="_blank">GitHub</a>
  <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate?.('#contact'); }}>Contact</a>
  <a href="/documents/CV_JoseManuel.pdf" target="_blank" rel="noopener noreferrer">CV</a>
      </nav>
      <div className="actions">
        <button
          aria-label="Go to portfolio"
          onClick={() => {
            // If we're on a project page, record the desired scroll target and navigate to home
            if (isProject) {
              try { localStorage.setItem('pendingScrollTarget', '.projects-title'); } catch(e){}
              window.location.href = '/';
              return;
            }
            // Otherwise, trigger the in-app transition/scroll
            onNavigate?.('.projects-title');
          }}
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
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  )
}

export default Header