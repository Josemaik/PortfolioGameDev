import React from 'react';
import './LadyUmbrella.css';
import Footer from '../../components/Footer/Footer';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import { FaSteam, FaYoutube, FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaDownload } from 'react-icons/fa';
// Header is provided globally by App; no per-page Header here to allow App's transition handlers to work

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
              Lady Umbrella is a <b>3D action-adventure shooter</b> where players step into the role of <b>special agent Francesca De Angelis</b>, better known as Lady Umbrella. While deep undercover within Italy’s last surviving mafia family, she’s betrayed and framed by her own partner. Now, hunted by her own agency, she must clear her name and bring down the criminal organization using her signature weapon — a<b> multi-functional umbrella</b> that serves as a shotgun when closed and a shield when opened.
            </p>
            <h1>Features</h1>
            <ul className="lu-features">
              <li>
                <img className="feature-icon" src="/assets/images/projects/LadyUmbrella/LadyUmbrella_Icon_White.png" alt="icon" />
                <p>Dynamic umbrella mechanics</p>
              </li>
              <li>
                <img className="feature-icon" src="/assets/images/projects/LadyUmbrella/LadyUmbrella_Icon_White.png" alt="icon" />
                <p>Close the gab based combat</p>
              </li>
              <li>
                <img className="feature-icon" src="/assets/images/projects/LadyUmbrella/LadyUmbrella_Icon_White.png" alt="icon" />
                <p>Cinematographic story-driven</p>
              </li>
              <li>
                <img className="feature-icon" src="/assets/images/projects/LadyUmbrella/LadyUmbrella_Icon_White.png" alt="icon" />
                <p>Soft enviroment puzzles</p>
              </li>
              <li>
                <img className="feature-icon" src="/assets/images/projects/LadyUmbrella/LadyUmbrella_Icon_White.png" alt="icon" />
                <p>Sense of ingenuity as special agent</p>
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
            <h2>My Contributions - IA</h2>
            <article className="lu-contribution">
                <h3><img className="contrib-icon" src="/assets/images/projects/LadyUmbrella/T_UI_UmbrellaLoadingFused.png" alt="icon"/> Arena Builder</h3>
                <p>Custom tool designed to help designer team <strong>create, organize and test combat encounters</strong> efficiently, bridging the gap between design and gameplay.
                The system dynamically <strong>generates and manages spawners and trigger boxes</strong>, giving designers full control over combat flow while keeping everything neatly structured within the editor outliner.</p>
                <p>Each spawner can be configured directly from the details panel to define:</p>
                <ul>
                  <li>Enemy types and Weapons</li>
                  <li>Set patrol paths</li>
                  <li>Set activation logic through wave systems, trigger events or reinforcements</li>
                  <li>Adjust spawn order for testing purposes</li>
                </ul>
                <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaGithub />
                  <span>Spawn Point Class here!</span>
                </a>
                <div>
                    <img src="/assets/images/projects/LadyUmbrella/Systems/SpawnPointPanel.png" alt="Spawn Point Instance" />
                </div>
                <p>Triggers are configured to notify Arena after being overlaped by player in-game to:</p>
                 <ul>
                  <li><strong>Activate Arena:</strong>Spawn Enemies, starting the first wave</li>
                  <li><strong>Start Combat:</strong> Enemies start engaging the player</li>
                  <li><strong>Exit Arena:</strong> Cleans up enemy corpses, stops combat music and halts voice lines.</li>
                  <li><strong>Enter Arena Event:</strong> Launch all linked spawners to the current event</li>
                </ul>
                <p>And also, can be used to set combat zone number to all covers and spawners overlaping with it, used later for IA logic.</p>
                <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaGithub />
                  <span>TriggerBoxArena Class here!</span>
                </a>
                <div>
                  <img src="/assets/images/projects/LadyUmbrella/Systems/ArenaTriggerPanel.png" alt="Spawn Point Instance" />
                </div>
                <video autoPlay muted loop playsInline src="/assets/videos/LadyUmbrella/ArenaManagerTool.mp4"/>

                  <p>Arena Builder also serves as an In-game Manager, orchestrating the runtime behavior of each encounter.
                  In order to have a modular, maintable and readable class, logic is delegated in different components. </p>
                  <h3>Enemy Spawner Component</h3>
                  <p>Responsible for managing all spawning logic in a combat arena. It organizes spawn points into waves, reinforcements groups ans special events. Tracks the progression throught waves, spawn timing and whether enemies spawn in order or randomly.
                    Overall. it serves as a centralized controller for when, where and how enemies appear during encounters.
                  </p>
                <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaGithub />
                  <span>View Code here!</span>
                </a>
                <div>
                  <img src="/assets/images/projects/LadyUmbrella/Systems/EnemySpawnerComponent.png" alt="Spawn Point Instance" />
                </div>
                 <h3>Enemy Coordination Component</h3>
                  <p>Responsible for managing coordinated, group-based enemy behaviour during combat by controlling various tokens that
                    determinate which enemies can perform actions such as attacking, flanking, firing electric bullets or throwing grenades.
                    It uses timers and weighted calculations based on distance, angle and time since last action to dynamically distribute
                    these tokens among active enemies and adjust token availability based on combat progress like player kills. It essence, acts as
                    AI director to create more strategic and believable combat encounters.
                  </p>
                  <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaGithub />
                  <span>View Code here!</span>
                </a>
                <div className="lu-contrib-media">
                  <img src="/assets/images/projects/LadyUmbrella/Systems/EnemyCoordinationComponent0.png" alt="Spawn Point Instance" />
                  <img src="/assets/images/projects/LadyUmbrella/Systems/EnemyCoordinationComponent1.png" alt="Spawn Point Instance" />
                </div>
                <h3>Enemy Zones Component</h3>
                  <p>
                   Responsible for tracking and managing spatial "Zones" within arena, each containing data about how many enemies and free covers
                   exist in that area. It maintains a map of zone indices linked to FZoneStruct instances, which record and can reset initial and current
                   state of enemies and covers per zone. This allows AI system to understand batlelfield distribution such as crowded zones to let tenemies know where can
                   reposition or flee.
                  </p>
                   <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaGithub />
                  <span>View Code here!</span>
                </a>
                <div className="lu-contrib-media">
                  <img src="/assets/images/projects/LadyUmbrella/Systems/EnemyZonesComponentEditor.png" alt="Spawn Point Instance"/>
                  <img src="/assets/images/projects/LadyUmbrella/Systems/EnemyZonesComponent.png" alt="Spawn Point Instance" />
                </div>
                <p>Finally, Arena manages some combat flow events:</p>
                <ul>
                  <li>On Enemy Death: Remove enemy from zones and coordination component, notify allies the position of this enemy, try call reinforcements, updates wave's system and checks if combat is finished.</li>
                  <li>On Player Death: Resets components, events, waves, triggers conditions and music. </li>
                  <li>On Player Respawn: Clear enemies pool and reactivates the combat.</li>
                  <li>On Player Shoot: Notify Enemies from sound source and start combat if is close enught.</li>
                  <li>On Player Skip Arena: If the player manages to hit the exit trigger then the enemy pool is cleared and combat ends.</li>
                </ul>
                 <div>
                    <img src="/assets/images/projects/LadyUmbrella/Systems/ArenaManagerMainCOnfig.png" alt="Spawn Point Instance" />
                </div>
                <div className="lu-contrib-media">
                </div>
            </article>

            <article className="lu-contribution">
                <h3><img className="contrib-icon" src="/assets/images/projects/LadyUmbrella/T_UI_UmbrellaLoadingFused.png" alt="icon"/> Enemy class arquitecture.</h3>
                <p>Enemy class arquitecture.</p>
                <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaGithub />
                  <span>View Code here!</span>
                </a>
                <div className="lu-contrib-media">
                  <a href="/assets/images/projects/LadyUmbrella/Systems/DiagramaClasesEnemyControllers.png" target="_blank">
                   <img className='image-zoom' src="/assets/images/projects/LadyUmbrella/Systems/DiagramaClasesEnemyControllers.png" alt="Tools screenshot" />
                  </a>   
                  <a href="/assets/images/projects/LadyUmbrella/Systems/ClassesDiagramWeapons.png" target="_blank">
                   <img className="image-zoom" src="/assets/images/projects/LadyUmbrella/Systems/ClassesDiagramWeapons.png" alt="Tools screenshot" />
                  </a>       
                </div>
            </article>

             <article className="lu-contribution">
                <h3><img className="contrib-icon" src="/assets/images/projects/LadyUmbrella/T_UI_UmbrellaLoadingFused.png" alt="icon"/> Mafia Behaviour Tree </h3>
                <p>Built editor tools for designers to script umbrella states and create encounters faster.</p>
                <div className="lu-contrib-media">
                </div>
                <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaDownload />
                  <span>Watch BT Diagram here!</span>
                </a>
            </article>

              <article className="lu-contribution">
                <h3><img className="contrib-icon" src="/assets/images/projects/LadyUmbrella/T_UI_UmbrellaLoadingFused.png" alt="icon"/> Agency Behaviour Trees </h3>
                <p>Built editor tools for designers to script umbrella states and create encounters faster.</p>
                <div className="lu-contrib-media">
                </div>
                <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaDownload />
                  <span>Watch BT Diagram here!</span>
                </a>

                <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaGithub />
                  <span>BT Tasks code here!</span>
                </a>
                <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaGithub />
                  <span>BT Services code here!</span>
                </a>
            </article>

             <article className="lu-contribution">
                <h3><img className="contrib-icon" src="/assets/images/projects/LadyUmbrella/T_UI_UmbrellaLoadingFused.png" alt="icon"/> Enviroment Query System </h3>
                <p>flee, flank and serach cover</p>
                <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaDownload />
                  <span>Watch EQS Diagram here!</span>
                </a>
                <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaGithub />
                  <span>EQS code here!</span>
                </a>
                <div className="lu-contrib-media">
                <img src="/assets/images/projects/LadyUmbrella/LadyUmbrella_cartel.png" alt="Tools screenshot" />
                </div>
            </article>

            <article className="lu-contribution">
                <h3><img className="contrib-icon" src="/assets/images/projects/LadyUmbrella/T_UI_UmbrellaLoadingFused.png" alt="icon"/> Arena Entry Behaviours </h3>
                <p>Doors and Windows</p>
                <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaGithub />
                  <span>View Code here!</span>
                </a>
                <div className="lu-contrib-media">
                <img src="/assets/images/projects/LadyUmbrella/LadyUmbrella_cartel.png" alt="Tools screenshot" />
                </div>
            </article>

             <h2>My Contributions - Gameplay</h2>
              <article className="lu-contribution">
                <h3><img className="contrib-icon" src="/assets/images/projects/LadyUmbrella/T_UI_UmbrellaLoadingFused.png" alt="icon"/> Gadgets Enemy Reactions </h3>
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
                <h3><img className="contrib-icon" src="/assets/images/projects/LadyUmbrella/T_UI_UmbrellaLoadingFused.png" alt="icon"/> Voice Line System </h3>
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
