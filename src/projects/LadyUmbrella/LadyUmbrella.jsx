import React from 'react';
import './LadyUmbrella.css';
import Footer from '../../components/Footer/Footer';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import { FaSteam, FaYoutube, FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import Header from '../../components/Header/Header';

const socials = [
  { href: 'https://store.steampowered.com/', icon: FaSteam, label: 'Steam' },
  { href: 'https://www.youtube.com/', icon: FaYoutube, label: 'YouTube' },
  { href: 'https://www.linkedin.com/', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://twitter.com/', icon: FaTwitter, label: 'Twitter' },
  { href: 'https://www.instagram.com/', icon: FaInstagram, label: 'Instagram' },
];

export default function LadyUmbrella() {
  return (
    <div className="lu-wrapper">
        <Header 
          onHomeClick={() => { if (typeof window !== 'undefined') window.location.href = '/'; }}
          onNavigate={(selector) => {
            if (typeof window === 'undefined') return;
            // If already on root, scroll to selector; otherwise navigate to root with hash
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
      <header className="lu-hero">
        <video className="lu-hero-video" autoPlay muted loop playsInline src="/assets/videos/gameplay-demo.mp4" />
        <div className="lu-hero-overlay">
          <img src="/assets/images/projects/LadyUmbrella/LadyUmbrella_Logo1_White.png" alt="Lady Umbrella Logo" className="lu-logo" />
          <p className="lu-tagline"><strong>An umbrella is more than protection — it's your arsenal.</strong></p>
          <div className="lu-socials">
            {socials.map((s, i) => {
              const Icon = s.icon;
              return (
                <a key={i} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer" className="lu-social-link">
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </header>

      <main className="lu-main">
        <section className="lu-summary">
          <div className="lu-summary-text">
            <h1>Overview</h1>
            <p>
              Lady Umbrella is a 3D action-adventure where you play as Francesca, an operative with a multi-functional umbrella. Explore, fight and discover secrets across atmospheric locales.
            </p>
            <h1>Features</h1>
            <ul className="lu-features">
              <li>
                <img className="feature-icon" src="/assets/images/projects/LadyUmbrella/LadyUmbrella_Icon_White.png" alt="icon" />
                <p>Dynamic umbrella mechanics (combat, traversal, shields)</p>
              </li>
              <li>
                <img className="feature-icon" src="/assets/images/projects/LadyUmbrella/LadyUmbrella_Icon_White.png" alt="icon" />
                <p>Emergent AI opponents driven by behavior systems</p>
              </li>
              <li>
                <img className="feature-icon" src="/assets/images/projects/LadyUmbrella/LadyUmbrella_Icon_White.png" alt="icon" />
                <p>Procedural elements in level encounters</p>
              </li>
            </ul>
            <div className="lu-role-box" role="note" aria-label="Project role">
              <strong>My Role:</strong>
              <p>I worked as <b>AI and Gameplay Programmer</b> on this game as my Master's Degree Final Project.</p>
            </div>
          </div>
        </section>

        <section className="iframe-section">
            <div className="iframe-container">
              <iframe
              src="https://www.youtube.com/embed/X_DgUlOjEhE"
              title="Lady Umbrella Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              />
            </div>
        </section>
        

        <section className="lu-contributions">
            <div className="lu-divider" aria-hidden="true" />
            <h2>My Contributions</h2>
            <article className="lu-contribution">
                <h3><img className="contrib-icon" src="/assets/images/projects/LadyUmbrella/T_UI_UmbrellaLoadingFused.png" alt="icon"/> Arena Builder</h3>
                <p>Arena Builder is a custom tool I developed as one of my first tasks as an AI Programmer for Lady Umbrella. It was designed to help designers create, organize, and test combat encounters efficiently, bridging the gap between design and gameplay.</p>
                <p>The system dynamically generates and manages spawners and trigger boxes, giving designers full control over enemies, events, and combat flow while keeping everything neatly structured within the editor. Each spawner can be configured directly from the Details panel to define enemy types and weapons, set patrol paths, control activation logic (through wave systems, triggers, or reinforcements), and adjust spawn order for testing purposes.</p>
                <p>Beyond its editor functionality, the Arena Builder also serves as an in-game manager, orchestrating the runtime behavior of each encounter. When triggers are activated by the player, the system handles spawning waves of enemies, starting combat, launching specific scripted events, and cleaning up the arena once the fight concludes — including stopping combat music and voice lines.</p>
                <p>The result is a lightweight, modular framework that simplifies encounter design, reduces iteration time, and keeps the gameplay experience consistent across different levels.</p>
                <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaGithub />
                  <span>View Code here!</span>
                </a>
                <div className="lu-contrib-media">
                <img src="/assets/images/projects/LadyUmbrella/LadyUmbrella_cartel.png" alt="AI diagram" />
                </div>
            </article>

            <article className="lu-contribution">
                <h3><img className="contrib-icon" src="/assets/images/projects/LadyUmbrella/T_UI_UmbrellaLoadingFused.png" alt="icon"/> Mafia and Agency Behaviour Trees</h3>
                <p>Built editor tools for designers to script umbrella states and create encounters faster.</p>
                <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaGithub />
                  <span>View Code here!</span>
                </a>
                <div className="lu-contrib-media">
                <img src="/assets/images/projects/LadyUmbrella/LadyUmbrella_cartel.png" alt="Tools screenshot" />
                </div>
            </article>

            <article className="lu-contribution">
                <h3><img className="contrib-icon" src="/assets/images/projects/LadyUmbrella/T_UI_UmbrellaLoadingFused.png" alt="icon"/> Flee, Flank and Find Cover Behaviour with Unreal EQS</h3>
                <p>Built editor tools for designers to script umbrella states and create encounters faster.</p>
                <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaGithub />
                  <span>View Code here!</span>
                </a>
                <div className="lu-contrib-media">
                <img src="/assets/images/projects/LadyUmbrella/LadyUmbrella_cartel.png" alt="Tools screenshot" />
                </div>
            </article>

             <article className="lu-contribution">
                <h3><img className="contrib-icon" src="/assets/images/projects/LadyUmbrella/T_UI_UmbrellaLoadingFused.png" alt="icon"/> Enemy Interaction with Umbrella Gadgets </h3>
                <p>Built editor tools for designers to script umbrella states and create encounters faster.</p>
                <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaGithub />
                  <span>View Code here!</span>
                </a>
                <div className="lu-contrib-media">
                <img src="/assets/images/projects/LadyUmbrella/LadyUmbrella_cartel.png" alt="Tools screenshot" />
                </div>
            </article>

              <article className="lu-contribution">
                <h3><img className="contrib-icon" src="/assets/images/projects/LadyUmbrella/T_UI_UmbrellaLoadingFused.png" alt="icon"/> Voice Lines System </h3>
                <p>Built editor tools for designers to script umbrella states and create encounters faster.</p>
                <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaGithub />
                  <span>View Code here!</span>
                </a>
                <div className="lu-contrib-media">
                <img src="/assets/images/projects/LadyUmbrella/LadyUmbrella_cartel.png" alt="Tools screenshot" />
                </div>
            </article>
        </section>

        <section className="lu-details">
            <h2>Project Details</h2>
            <ul>
                <li><b>Engine:</b> Custom C++ engine + ECS</li>
                <li><b>Role:</b> AI, Gameplay Tools Programmer</li>
                <li><b>Team size:</b> 40</li>
                <li><b>Platforms:</b> PC, Consoles</li>
            </ul>
        </section>
       </main>
       <Footer />
    </div>
  );
}
