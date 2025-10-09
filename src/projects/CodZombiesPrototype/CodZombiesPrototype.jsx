import React from 'react';
import './CodZombiesPrototype.css';
import Footer from '../../components/Footer/Footer';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import { FaSteam, FaYoutube, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
// Header provided globally by App

const socials = [
  { href: 'https://store.steampowered.com/', icon: FaSteam, label: 'Steam' },
  { href: 'https://www.youtube.com/', icon: FaYoutube, label: 'YouTube' },
  { href: 'https://github.com/', icon: FaGithub, label: 'GitHub' },
  { href: 'https://www.instagram.com/', icon: FaInstagram, label: 'Instagram' },
  { href: 'https://twitter.com/', icon: FaTwitter, label: 'Twitter' },
];

export default function CodZombiesPrototype() {
  return (
    <div className="cz-wrapper">
      <SocialLinks />
      <header className="cz-hero">
        <video className="cz-hero-video" autoPlay muted loop playsInline src="/assets/videos/ai-gameplay.mp4" />
        <div className="cz-hero-overlay">
          <img src="/assets/images/projects/CodZombiesPrototype/CodPrototype.png" alt="Cod Zombies Prototype" className="cz-logo" />
          <p className="cz-tagline"><strong>Prototype FPS experience — waves, AI, and fast iteration.</strong></p>
          <div className="cz-socials">
            {socials.map((s, i) => {
              const Icon = s.icon;
              return (
                <a key={i} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer" className="cz-social-link">
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </header>

      <main className="cz-main">
        <section className="cz-summary">
          <div className="cz-summary-text">
            <h1>Overview</h1>
            <p>Cod Zombies Prototype is an FPS prototype built in Unreal Engine focused on wave-based enemies and rapid prototyping of AI behaviors.</p>
            <h1>Features</h1>
            <ul className="cz-features">
              <li>
                <img className="feature-icon" src="/assets/images/projects/CodZombiesPrototype/CodPrototype.png" alt="icon" />
                <p>Wave-based enemy spawns and progression</p>
              </li>
              <li>
                <img className="feature-icon" src="/assets/images/projects/CodZombiesPrototype/CodPrototype.png" alt="icon" />
                <p>AI state machines for adaptive combat</p>
              </li>
              <li>
                <img className="feature-icon" src="/assets/images/projects/CodZombiesPrototype/CodPrototype.png" alt="icon" />
                <p>Weapon handling and prototyped shooting feel</p>
              </li>
            </ul>
            <div className="cz-role-box" role="note" aria-label="Project role">
              <strong>My Role:</strong>
              <p>I worked as <b>Solo Developer</b> building gameplay, AI and prototyping systems.</p>
            </div>
          </div>
        </section>

        <section className="cz-iframe-section">
          <div className="cz-iframe-container">
            <iframe
              src="https://www.youtube.com/embed/"
              title="Cod Zombies Prototype Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        <section className="cz-contributions">
          <div className="cz-divider" aria-hidden="true" />
          <h2>My Contributions</h2>
          <article className="cz-contribution">
            <h3><img className="contrib-icon" src="/assets/images/projects/CodZombiesPrototype/CodPrototype.png" alt="icon"/> AI & Spawners</h3>
            <p>Implemented spawn manager and enemy AI behaviors to drive wave-based combat.</p>
            <a className="cz-github-btn" href="#" aria-label="View code on GitHub">
              <FaGithub />
              <span>View Code here!</span>
            </a>
            <div className="cz-contrib-media">
              <img src="/assets/images/projects/CodZombiesPrototype/CodPrototype.png" alt="AI diagram" />
            </div>
          </article>
        </section>

        <section className="cz-details">
          <h2>Project Details</h2>
          <ul>
            <li><b>Engine:</b> Unreal Engine</li>
            <li><b>Role:</b> Solo Developer</li>
            <li><b>Team size:</b> 1</li>
            <li><b>Platforms:</b> PC</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
