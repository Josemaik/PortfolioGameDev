import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>© {new Date().getFullYear()} Jose Manuel | Portfolio GameDev</span>
        <span className="footer-links">
          <a href="https://github.com/Josemaik" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:josemaik@gmail.com">Email</a>
        </span>
      </div>
    </footer>
  );
}
