import React from 'react';
import './CodZombiesPrototype.css';
import Footer from '../../components/Footer/Footer';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import { FaSteam, FaYoutube, FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaDownload, FaStreetView, FaEye, FaEyeDropper, FaEyeSlash, FaDochub, FaAngleDoubleRight } from 'react-icons/fa';
import { TbBinaryTreeFilled } from "react-icons/tb";
import { TfiBlackboard } from "react-icons/tfi";
// Header is provided globally by App; no per-page Header here to allow App's transition handlers to work

const socials = [
  { href: 'https://www.youtube.com/@ZuloInteractive', icon: FaYoutube, label: 'YouTube' },
  { href: 'https://www.instagram.com/ladyumbrellavg?igsh=MXZ3Y29uZ2hpZjV0cg==', icon: FaInstagram, label: 'Instagram' },
];

export default function LadyUmbrella() {
  return (
    <div className="lu-wrapper">
        <SocialLinks />
      <header className="lu-hero">
        <div className="lu-hero-video-wrapper">
          <iframe
            className="lu-hero-video"
            src="https://www.youtube.com/embed/9u2b9uudlmQ?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=9u2b9uudlmQ"
            title="Lady Umbrella - Short CutScenes"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            />
        </div>
        <div className="lu-hero-overlay">
          <img src="/assets/images/projects/CodZombiesPrototype/Cod_zombies.png" alt="Lady Umbrella Logo" className="lu-logo" />
          <p className="lu-tagline"><strong>Fan prototype -  Cod Zombies</strong></p>
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
              Fan Prototype of <b>Cod Zombies</b> made with Unreal engine 5.4 from scratch in full Blueprint.
            </p>
            <h1>Features</h1>
            <ul className="lu-features">
              <li>
                <img className="feature-icon" src="/assets/images/projects/CodZombiesPrototype/Blood.png" alt="icon" />
                <p>Movement and Animations</p>
              </li>
              <li>
                <img className="feature-icon" src="/assets/images/projects/CodZombiesPrototype/Blood.png" alt="icon" />
                <p>Shooting System and Weapons</p>
              </li>
              <li>
                <img className="feature-icon" src="/assets/images/projects/CodZombiesPrototype/Blood.png" alt="icon" />
                <p>Multiple Interactables</p>
              </li>
              <li>
                <img className="feature-icon" src="/assets/images/projects/CodZombiesPrototype/Blood.png" alt="icon" />
                <p>Waves System and Zombie AI</p>
              </li>
              <li>
                <img className="feature-icon" src="/assets/images/projects/CodZombiesPrototype/Blood.png" alt="icon" />
                <p>Enviroment and Sounds VFX</p>
              </li>
              <li>
                <img className="feature-icon" src="/assets/images/projects/CodZombiesPrototype/Blood.png" alt="icon" />
                <p>HUD, Dead and Pause Screen</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="iframe-section">
            <div className="iframe-container">
              <iframe
              src="https://www.youtube.com/embed/9u2b9uudlmQ"
              title="Lady Umbrella Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
        </section>
        

        <section className="lu-contributions">
            
            
        </section>

        <section className="lu-details">
            <h2>Project Details</h2>
            <ul>
            <li><b>Studio:</b> Personal Project</li>
            <li><b>Genre:</b> FPS </li>
            <li><b>Platforms:</b> PC</li>
            <li><b>Duration: Two Weeks</b></li>
            <li><b>Engine and Tools: </b>Unreal Engine 5.4, Blender, GIMP </li>
          </ul>
        </section>
       </main>
       <Footer />
    </div>
  );
}
