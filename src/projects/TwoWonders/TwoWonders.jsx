import React from 'react';
import './TwoWonders.css';
import Footer from '../../components/Footer/Footer';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import { SiItchdotio } from 'react-icons/si';
import { FaYoutube, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import Header from '../../components/Header/Header';

const socials = [
  { href: 'https://itch.io/', icon: SiItchdotio, label: 'Itch.io' },
  { href: 'https://www.youtube.com/', icon: FaYoutube, label: 'YouTube' },
  { href: 'https://www.instagram.com/', icon: FaInstagram, label: 'Instagram' },
  { href: 'https://twitter.com/', icon: FaTwitter, label: 'X' },
];

export default function TwoWonders() {
  return (
    <div className="tw-wrapper">
      <Header 
        onHomeClick={() => { if (typeof window !== 'undefined') window.location.href = '/'; }}
        onNavigate={(selector) => {
          if (typeof window === 'undefined') return;
          const clean = selector ? selector.replace(/^#|\./, '') : '';
          if (window.location.pathname === '/') {
            if (!clean) return;
            const el = document.querySelector(selector);
            if (el) {
              const header = document.querySelector('.header');
              const headerHeight = header ? header.offsetHeight : 0;
              const top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8;
              window.scrollTo({ top, behavior: 'smooth' });
            }
          } else {
            window.location.href = '/' + (clean ? `#${clean}` : '');
          }
        }}
      />
      <SocialLinks />
      <header className="tw-hero">
        <video className="tw-hero-video" autoPlay muted loop playsInline src="/assets/videos/gameplay-demo.mp4"/>
        <div className="tw-hero-overlay">
          <img src="/assets/images/projects/TwoWonders/logo_two_wonders.png" alt="Two Wonders Logo" className="tw-logo" />
          <p className="tw-tagline"><strong>Tu nueva aventura como aprendiz de mago está a punto de empezar... ✨</strong></p>
          <div className="tw-socials">
            {socials.map((s, i) => {
              const Icon = s.icon;
              return (
                <a key={i} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer" className="tw-social-link">
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </header>

      <main className="tw-main">
        <section className="tw-summary">
          <div className="tw-summary-text">
            <h1>Overview</h1>
            <p>
              Two Wonders is a narrative-driven magical apprentice adventure. Explore spellcraft, solve environmental puzzles and level up your wizarding toolkit.
            </p>
            <h1>Features</h1>
            <ul className="tw-features">
              <li>
                <img className="feature-icon" src="/assets/images/projects/TwoWonders/fijado_destellin.png" alt="icon" />
                <p>Spell-combination system with emergent interactions</p>
              </li>
              <li>
                <img className="feature-icon" src="/assets/images/projects/TwoWonders/fijado_destellin.png" alt="icon" />
                <p>Exploration-driven puzzles in hand-crafted arenas</p>
              </li>
              <li>
                <img className="feature-icon" src="/assets/images/projects/TwoWonders/fijado_destellin.png" alt="icon" />
                <p>Progression through apprenticeship quests and trials</p>
              </li>
            </ul>
            <div className="tw-role-box" role="note" aria-label="Project role">
              <strong>My Role:</strong>
              <p>I worked as <b>AI and Gameplay Programmer</b> on this game as my Master's Degree Final Project.</p>
            </div>
          </div>
        </section>

        <section className="tw-iframe-section">
          <div className="tw-iframe-container">
            <iframe
              src="https://www.youtube.com/embed/Q4WcGRIwN_w"
              title="Two Wonders Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        <section className="tw-contributions">
          <div className="tw-divider" aria-hidden="true" />
          <h2>My Contributions</h2>

          <article className="tw-contribution">
            <h3><img className="contrib-icon" src="/assets/images/projects/TwoWonders/fijado_trama.gif" alt="icon"/> Systems & AI</h3>
            <p>Implemented core AI systems and spell-response behavior trees for NPCs.</p>
            <a className="tw-github-btn" href="#" aria-label="View code on GitHub">
              <FaGithub />
              <span>View Code here!</span>
            </a>
            <div className="tw-contrib-media">
              <img src="/assets/images/projects/TwoWonders/Background_two_wonders.png" alt="Systems screenshot" />
            </div>
          </article>

          <article className="tw-contribution">
            <h3><img className="contrib-icon" src="/assets/images/projects/TwoWonders/fijado_trama.gif" alt="icon"/> Tools & Editor</h3>
            <p>Built editor tools for designers to author puzzles and manage spell assets.</p>
            <a className="tw-github-btn" href="#" aria-label="View code on GitHub">
              <FaGithub />
              <span>View Code here!</span>
            </a>
            <div className="tw-contrib-media">
              <img src="/assets/images/projects/TwoWonders/Background_two_wonders.png" alt="Tools screenshot" />
            </div>
          </article>
        </section>

        <section className="tw-details">
          <h2>Project Details</h2>
          <ul>
            <li><b>Engine:</b> Custom C++ engine + ECS</li>
            <li><b>Role:</b> AI, Gameplay Tools Programmer</li>
            <li><b>Team size:</b> 12</li>
            <li><b>Platforms:</b> PC</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
