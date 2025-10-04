import './Header.css'

const brandLogo = "/assets/brand/brand-logo.gif"

const Header = () => {
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
        <a href="#home">Home</a>
        <a href="#demo-reel">Demo Reel</a>
        <a href="#biography">Biography</a>
        <a href="https://github.com/Josemaik" target="_blank">GitHub</a>
      </nav>
      <a href="#portfolio" className="portfolio-btn">Portfolio</a>
    </header>
  )
}

export default Header