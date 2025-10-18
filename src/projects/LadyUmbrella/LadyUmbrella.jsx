import React from 'react';
import './LadyUmbrella.css';
import Footer from '../../components/Footer/Footer';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import { FaSteam, FaYoutube, FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaDownload, FaStreetView, FaEye, FaEyeDropper, FaEyeSlash, FaDochub, FaAngleDoubleRight } from 'react-icons/fa';
import { TbBinaryTreeFilled } from "react-icons/tb";
import { TfiBlackboard } from "react-icons/tfi";
// Header is provided globally by App; no per-page Header here to allow App's transition handlers to work

const socials = [
  { href: 'https://store.steampowered.com/app/3956890/Lady_Umbrella/', icon: FaSteam, label: 'Steam' },
  { href: 'https://www.youtube.com/@ZuloInteractive', icon: FaYoutube, label: 'YouTube' },
  { href: 'https://www.linkedin.com/company/zulo-interactive/posts/?feedView=all', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://x.com/ladyumbrellavg?s=11&t=kByX6gVWvjWOaYSs7RYGzg', icon: FaTwitter, label: 'Twitter' },
  { href: 'https://www.instagram.com/ladyumbrellavg?igsh=MXZ3Y29uZ2hpZjV0cg==', icon: FaInstagram, label: 'Instagram' },
];

export default function LadyUmbrella() {
  return (
    <div className="lu-wrapper">
        <SocialLinks />
      <header className="lu-hero">
        <video className="lu-hero-video" autoPlay muted loop playsInline src="/assets/videos/LadyUmbrella/BackgroundGameplay.mp4" />
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
                  <li><strong>Activate Arena:</strong> Spawn Enemies, starting the first wave</li>
                  <li><strong>Start Combat:</strong> Enemies start engaging the player</li>
                  <li><strong>Exit Arena:</strong> Cleans up enemy corpses, stops combat music and halts voice lines.</li>
                  <li><strong>Enter Arena Event:</strong> Launch all linked spawners to the current event</li>
                </ul>
                <p>And also, can be used to set <strong>Combat Zone number</strong> to all covers and spawners overlaping with it, used later for IA logic.</p>
                <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaGithub />
                  <span>TriggerBoxArena Class here!</span>
                </a>
                <div>
                  <img src="/assets/images/projects/LadyUmbrella/Systems/ArenaTriggerPanel.png" alt="Spawn Point Instance" />
                </div>
                <video autoPlay muted loop playsInline src="/assets/videos/LadyUmbrella/ArenaManagerTool.mp4"/>

                  <p>Arena Builder also serves as an <strong>In-game Manager</strong>, orchestrating the runtime behavior of each encounter.
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
                  <li><strong>On Enemy Death:</strong> Remove enemy from zones and coordination component, notify allies the position of this enemy, try call reinforcements, updates wave's system and checks if combat is finished.</li>
                  <li><strong>On Player Death:</strong> Resets components, events, waves, triggers conditions and music. </li>
                  <li><strong>On Player Respawn:</strong> Clear enemies pool and reactivates the combat.</li>
                  <li><strong>On Player Shoot:</strong> Notify Enemies from sound source and start combat if is close enught.</li>
                  <li><strong>On Player Skip Arena:</strong> If the player manages to hit the exit trigger then the enemy pool is cleared and combat ends.</li>
                </ul>
                 <div>
                    <img src="/assets/images/projects/LadyUmbrella/Systems/ArenaManagerMainCOnfig.png" alt="Spawn Point Instance" />
                </div>
                <div className="lu-contrib-media">
                </div>
            </article>

            <article className="lu-contribution">
                <h3><img className="contrib-icon" src="/assets/images/projects/LadyUmbrella/T_UI_UmbrellaLoadingFused.png" alt="icon"/> Class architecture </h3>
                <p>A class architecture based on interfaces and inheritance has been followed for <strong>Characters, Controllers and Weapons.</strong></p>
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
                <h3><img className="contrib-icon" src="/assets/images/projects/LadyUmbrella/T_UI_UmbrellaLoadingFused.png" alt="icon"/> Behaviour Trees </h3>
                <p>The AI Behavior Tree system is organized by archetype and it has been created following a hierarchy:
                </p>
                <ul>
                  <li><strong>Main Tree:</strong> Controls the overall decision flow of the archetype (e.g., combat, patrol, arena entry).</li>
                  <li><strong>Context Subtrees:</strong> Each represents a specific behavioral context or state (e.g., Combat, Patrol, EnterArena).
These are activated based on Blackboard conditions or Selector priorities.</li>
                  <li><strong>Action Subtrees:</strong> Contain concrete tactical actions such as attacking, finding cover or flee.</li>
                </ul>
                <p>This structure provides a <strong>modular and scalable approach</strong> to AI behavior design. Each subtree can be developed and <strong>tested independently, promoting cleaner iteration and debugging</strong>. Common behaviors can be reused across different archetypes, improving consistency and reducing redundant work. Additionally, new behaviors can be integrated without altering the main BT, keeping the system flexible and easy to maintain.</p>
                
                {/* Behaviour Trees cards */}
                <div className="lu-bt-cards">
                  <div className="lu-bt-card">
                    <img className="lu-bt-keyart" src="/assets/images/projects/LadyUmbrella/Keyart_Mafioso.png" alt="Key Art Mafia" />
                    <div className="lu-bt-links">
                      <a className="lu-github-btn-card" href="/documents/BEHAVIOUR_TREES_MAFIA.pdf" target="_blank" rel="noopener noreferrer" aria-label="View code on GitHub">
                          <TbBinaryTreeFilled />
                          <span>Watch BT Diagram</span>
                      </a>
                       <a className="lu-github-btn-card" href="/documents/BLACKBOARD_MAFIA.pdf" target="_blank" rel="noopener noreferrer" aria-label="View code on GitHub">
                          <TfiBlackboard />
                          <span>Watch Blackboard</span>
                      </a>
                      <a className="lu-github-btn-card" href="#" aria-label="View code on GitHub">
                          <FaDochub />
                          <span>Mafia GDD</span>
                      </a>
                      {/* placeholder for additional links */}
                    </div>
                  </div>

                  <div className="lu-bt-card">
                    <img className="lu-bt-keyart" src="/assets/images/projects/LadyUmbrella/Keyart_Agency.png" alt="Key Art Agency" />
                    <div className="lu-bt-links">
                     <a className="lu-github-btn-card" href="/documents/BEHAVIOUR_TREES_AGENCY.pdf" target="_blank" rel="noopener noreferrer" aria-label="View code on GitHub">
                          <TbBinaryTreeFilled />
                          <span>Watch BT Diagram Biter & Flanker</span>
                      </a>
                      <a className="lu-github-btn-card" href="/documents/BEHAVIOUR_TREES_SHIELDED_AGENCY.pdf" target="_blank" rel="noopener noreferrer" aria-label="View code on GitHub">
                          <TbBinaryTreeFilled />
                          <span>Watch BT Diagram Shielded Agent</span>
                      </a>
                       <a className="lu-github-btn-card" href="/documents/BLACKBOARD_AGENCY.pdf" target="_blank" rel="noopener noreferrer" aria-label="View code on GitHub">
                          <TfiBlackboard />
                          <span>Watch Blackboard</span>
                      </a>
                      <a className="lu-github-btn-card" href="#" aria-label="View code on GitHub">
                          <FaDochub />
                          <span>Agency GDD</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="lu-bt-card">
                  <h4>Custom Task and Services in C++:</h4>
                  <div className="lu-links">
                    <a className="lu-github-btn-card" href="#" aria-label="View code on GitHub">
                      <FaGithub />
                      <span>BT Tasks code here!</span>
                    </a>
                    <a className="lu-github-btn-card" href="#" aria-label="View code on GitHub">
                      <FaGithub />
                      <span>BT Services code here!</span>
                    </a>
                  </div>
                </div>
              </article>

             <article className="lu-contribution">
                <h3><img className="contrib-icon" src="/assets/images/projects/LadyUmbrella/T_UI_UmbrellaLoadingFused.png" alt="icon"/> Enviroment Query System </h3>
                <p>I utilized Unreal Engine's Environment Query System (EQS) to drive a variety of dynamic decision-making processes for AI agents, enabling them to react intelligently to their surroundings. Below are the main use cases implemented:</p>
                <h3>Cover Search</h3>
                <p>Implemented using an Actor Generator that samples from custom CoverEntryPoint actors, representing entry positions for cover spots.The query applies several tests—including custom tests, dot product, distance, and trace—to identify the most optimal cover positions based on visibility, proximity, and orientation relative to the player.</p>
                <a className="lu-github-btn" href="/assets/images/projects/LadyUmbrella/Systems/EQS/EQS_fleecover.png" target="_blank" rel="noopener noreferrer" aria-label="View code on GitHub">
                  <FaEye />
                  <span>Watch EQS Diagram</span>
                </a>
                <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaGithub />
                  <span>EnvQueryTest: Filter Covers already selected</span>
                </a>
                <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaGithub />
                  <span>EnvQueryTest: Filter Covers inside Zone</span>
                </a>
                <video autoPlay muted loop playsInline src="/assets/videos/LadyUmbrella/SearchCoverEQS.mp4"/>
                <h3>Close Combat Movement</h3>
                <p>Utilized a Circle Points Generator around the player to define potential movement targets during close-range engagements.
Applied distance, dot product, and path existence tests to ensure the chosen positions are reachable and tactically advantageous.</p>
                <a className="lu-github-btn" href="/assets/images/projects/LadyUmbrella/Systems/EQS/EQSCloseCombat.png" target="_blank" rel="noopener noreferrer" aria-label="View code on GitHub">
                  <FaEye />
                  <span>Watch EQS Diagram</span>
                </a>
                 <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaGithub />
                  <span>EnvQueryContext: Player</span>
                </a>
                <video autoPlay muted loop playsInline src="/assets/videos/LadyUmbrella/CloseCombatEQS.mp4"/>
                <h3>Line of Sight Search</h3>
                <p>Used a Grid Generator to sample potential points from which the AI could gain visual contact with the player.
The selection process involved trace, distance, and dot product tests to ensure line-of-sight while maintaining spatial awareness.</p>
                <a className="lu-github-btn" href="/assets/images/projects/LadyUmbrella/Systems/EQS/EQSLineofsight.png" target="_blank" rel="noopener noreferrer" aria-label="View code on GitHub">
                  <FaEye />
                  <span>Watch EQS Diagram</span>
                </a>
                 <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaGithub />
                  <span>EnvQueryContext: Owner Pawn</span>
                </a>
                <video autoPlay muted loop playsInline src="/assets/videos/LadyUmbrella/LineSightEQS.mp4"/>
                <h3>Flank Path Calculation</h3>
                <p>Built using an Actor Generator referencing CoverEntryPoint actors. Central positions were filtered out via a TriggerVolume filter, isolating lateral points suitable for flanking.
Additional dot product and distance tests were used to refine the selection, ensuring flanking routes were both effective and contextually valid.</p>
                <a className="lu-github-btn" href="/assets/images/projects/LadyUmbrella/Systems/EQS/EQSflankcover.png" target="_blank" rel="noopener noreferrer" aria-label="View code on GitHub">
                  <FaEye />
                  <span>Watch EQS Diagram</span>
                </a>
                 <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaGithub />
                  <span>EnvQueryContext: TriggerVolume</span>
                </a>
                <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaGithub />
                  <span>EnvQueryTest: Filter covers in flank path</span>
                </a>
                <video autoPlay muted loop playsInline src="/assets/videos/LadyUmbrella/FlankEQS.mp4"/>
            </article>

            <article className="lu-contribution">
                <h3><img className="contrib-icon" src="/assets/images/projects/LadyUmbrella/T_UI_UmbrellaLoadingFused.png" alt="icon"/> Arena Entry Behaviours </h3>
                <p>In some of our game’s arenas, enemies were visibly popping in (spawning in plain sight of the player), which felt unnatural and broke immersion.</p>
                <p>To address this, we implemented a <strong>door- and window-based arena entry system.</strong> Instead of appearing abruptly, enemies now enter the arena through visible entry points such as doors and windows.
This approach makes encounters feel more <strong>dynamic, believable, and immersive,</strong> as players can see enemies emerging naturally from the environment before engaging in combat.</p>
                <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaGithub />
                  <span>Door and Window Class</span>
                </a>
                <div className="lu-contrib-media">
                  <video autoPlay muted loop playsInline src="/assets/videos/LadyUmbrella/DoorsEntryxd.mp4"/>
                  <video autoPlay muted loop playsInline src="/assets/videos/LadyUmbrella/WindowsEntryxd.mp4"/>
                </div>
            </article>

             <h2>My Contributions - Gameplay</h2>
              <article className="lu-contribution">
                <h3><img className="contrib-icon" src="/assets/images/projects/LadyUmbrella/T_UI_UmbrellaLoadingFused.png" alt="icon"/> Gadgets Enemy Reactions </h3>
                <p>Francesca’s umbrella is equipped with several <strong>unique gadgets</strong> that make it special. One of them is a <strong>Retractable Hook</strong> that can be fired from the umbrella and used for solving puzzles or for traversal purposes. In this case, I was responsible for implementing its interaction with enemies.</p>
                <p>The umbrella’s hook can be fired to <strong>grab enemies and pull them toward the player close range—ideal</strong> for follow-up attacks while being stunned for a short duration before returning to normal behavior. If an enemy is pulled from a higher place, they’ll fall forward and die upon hitting the ground.</p>
                <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaGithub />
                  <span>View Code here!</span>
                </a>
                <div className="lu-contrib-media">
                  <video autoPlay muted loop playsInline src="/assets/videos/LadyUmbrella/HookGadget.mp4"/>
                  <video autoPlay muted loop playsInline src="/assets/videos/LadyUmbrella/HookFalling.mp4"/>
                </div>
                <p>Francesca’s umbrella also includes an <strong>Electric Dart Gadget.</strong>
The electric dart is a <strong>high-speed projectile that shocks enemies</strong>, stunning them for an extended period. The electric effect also chains between nearby enemies, making it effective against groups.</p>
                 <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaGithub />
                  <span>View Code here!</span>
                </a>
                <div className="lu-contrib-media">
                  <video autoPlay muted loop playsInline src="/assets/videos/LadyUmbrella/ElectricDardGadget.mp4"/>
                </div>
            </article>

            <article className="lu-contribution">
                <h3><img className="contrib-icon" src="/assets/images/projects/LadyUmbrella/T_UI_UmbrellaLoadingFused.png" alt="icon"/> Voice Line System </h3>
                <p>The Voice Line System includes the creation of a <strong>VoiceLineComponent</strong>, which can be attached to any character. Its responsabilities are:</p>
                <ul>
                  <li><strong>Handle voice line playback</strong> ( audio system with FMOD) and <strong>subtitle display</strong> ( UI system )</li>
                  <li><strong>Load and organize voice lines from DataTables</strong> containing subtitle text, duration and state</li>
                  <li><strong>Store index ranges for each State</strong> so it knows which lines belong to which state</li>
                  <li><strong>Handle playback logic depending on context</strong> ( Cinematic, In-game cinematic or Combat)</li>
                </ul>
                <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaGithub />
                  <span>Voice Line Component</span>
                </a>
                 <div className="lu-contrib-media">
                  <img src="/assets/images/projects/LadyUmbrella/Systems/VoiceLines/VoiceLineComponent.png" alt="Spawn Point Instance"/>
                  <img src="/assets/images/projects/LadyUmbrella/Systems/VoiceLines/DataTableVoiceLine.png" alt="Spawn Point Instance"/>
                </div>
                <h3>Cinematics - TriggerBoxGadgets</h3>
                <p>Main story cinematics are triggered by a special actor called TriggerBoxGadgets.
This actor is placed in the level and activates when the player collides with it.
When triggered, it performs several actions:</p>
                <ul>
                  <li>Launches the Level Sequence (Master Sequence) that controls the cinematic.</li>
                  <li>Activates the “Skip” button in the UI so the player can skip the scene if desired.</li>
                  <li>Optionally unlocks new gadgets or abilities after the cinematic finishes.</li>
                </ul>
                 <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaGithub />
                  <span>TriggerBoxGadgets</span>
                </a>
                <div className="lu-contrib-media">
                  <img src="/assets/images/projects/LadyUmbrella/Systems/VoiceLines/TriggerBoxGadgets.png" alt="Spawn Point Instance"/>
                  <iframe
                    src="https://www.youtube.com/embed/atdvxoF7ydY"
                    title="Lady Umbrella Trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                  <p>
                  MasterSequence blueprint calls directly into VoiceLineComponent to speak a sequential
                  voice line.
                </p>
                <h4>Flow</h4>
                 <ul>
                  <li>Cinematic triggers a blueprint node ( event ) at specific keyframe</li>
                  <li>Player or NPC's VoiceLineComponent receives the call.</li>
                  <li>VoiceLineComponent picks next line for that chapter from the DataTable based on state index and plays FMOD event and show subtitles.</li>
                </ul>
                <p>This makes voice playback synchronized with cinematic timing, without harcoding sounds into sequences.</p>
                <div className="lu-contrib-media">
                  <img src="/assets/images/projects/LadyUmbrella/Systems/VoiceLines/LevelSequenceTrigger.png" alt="Spawn Point Instance"/>
                  <img src="/assets/images/projects/LadyUmbrella/Systems/VoiceLines/CinematicVoiceLine.png" alt="Spawn Point Instance" />
                </div>
                <h3>In-Game Cinematics - TriggerCinematic</h3>
                <p>In-Game cinematics are short, scripted dialogues or cutscenes that happen during gameplay - triggered by player actions. This is
                  handle by the ATriggerCinematic actor.
                </p>
                <h4>How It Works</h4>
                <ul>
                  <li><strong>Detection:</strong> Trigger's box collision detects when player enters</li>
                  <li><strong>Initialization:</strong> Builds VoiceLinInGameDTO struct that contains state, actor and index</li>
                  <li><strong>Sequence Setup:</strong> Use CinematicQueues predefined, it determinates the order of speakers for that cinematic</li>
                  <li><strong>Spawning:</strong> If necessary, it spawns secondary characters ( Marco, Vincenzo or Agency)</li>
                  <li><strong>PlayBack loop:</strong> Starts dialogue of current actor, waits for voice duration then calls next line</li>
                </ul>
                <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaGithub />
                  <span>TriggerCinematic</span>
                </a>
                 <div className="lu-contrib-media">
                  <img src="/assets/images/projects/LadyUmbrella/Systems/VoiceLines/TriggerCinematicIngame.png" alt="Spawn Point Instance"/>
                  <iframe
                    src="https://www.youtube.com/embed/uViJyhhvP90"
                    title="In-Game Cinematic System – Dynamic Dialogue Trigger (Unreal Engine)"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
                 <h3>Combat Voice Lines - VoiceLineManager</h3>
                 <p>VoiceLineManager is a subsystem that manages voice lines dynamically during combats. It coordinates who can speak,
                  when and with what priority, ensuring lines dont overlap or repeat too often.
                 </p>
                 <h4>Flow</h4>
                 <ul>
                  <li>When a character (enemy or player) performs an action, its VoiceLineComponent requests the VoiceLineManager to play the voice line corresponding to that action’s state.</li>
                  <li>VoiceLineManager store VoiceLineDTO in the queue with timestamp</li>
                  <li>Manager periodically procces voice lines queue removing expired request and choosing what to play.</li>
                 </ul>
                 <p>This ensures that even with many characters trying to speak at once, only one voice line plays at a time.</p>
                 <a className="lu-github-btn" href="#" aria-label="View code on GitHub">
                  <FaGithub />
                  <span>VoiceLineManager</span>
                </a>
                 <div className="lu-contrib-media">
                  <iframe
                    src="https://www.youtube.com/embed/DNBxl4mJbmM"
                    title="Lady Umbrella Trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <img src="/assets/images/projects/LadyUmbrella/Systems/VoiceLines/VoiceLineSystemDiagram.png" alt="Spawn Point Instance"/>
                </div>
            </article>
        </section>

        <section className="lu-details">
            <h2>Project Details</h2>
            <ul>
            <li><b>Studio:</b> Zulo Interactive</li>
            <li><b>Genre:</b> Action-adventure shooter</li>
            <li><b>Platforms:</b> PC - Steam </li>
            <li><b>Duration:</b>
              <ol>
                <li>Design and Prototype: 2025 January - 2025 Fabruary</li>
                <li>First playable: 2025 Fabruary - 2025 April</li> 
                <li>Alpha : 2025 April - 2025 June</li>
                <li>Beta : 2025 June - 2025 September</li>
                <li>Gold : 2025 September - 2025 October</li>
              </ol>
            </li>
            <li><b>Team Size:</b>
            <ol>
              <li>Game Designers: 8</li>
              <li>Programmers: 8</li>
              <li>Generalist Artist: 3</li>
              <li>Concept Artist: 5</li>
              <li>Animation: 5</li>
              <li>Rigging: 3</li>
              <li>Sound: 3</li>
              <li>Voice Actor: 2</li>
            </ol>
            </li>
            <li><b>Engine and Tools: </b>Unreal Engine 5.5, Maya, Blender, ZBrush </li>
          </ul>
        </section>
       </main>
       <Footer />
    </div>
  );
}
