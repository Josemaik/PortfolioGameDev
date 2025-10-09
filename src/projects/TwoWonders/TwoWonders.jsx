import React from 'react';
import './TwoWonders.css';
import Footer from '../../components/Footer/Footer';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import { SiItchdotio } from 'react-icons/si';
import { FaYoutube, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
// Header is provided globally by App; don't render a per-page Header here

const socials = [
  { href: 'https://kaiwagames.itch.io/two-wonders', icon: SiItchdotio, label: 'Itch.io' },
  { href: 'https://www.youtube.com/@KaiwaGames', icon: FaYoutube, label: 'YouTube' },
  { href: 'https://www.instagram.com/kaiwagames/', icon: FaInstagram, label: 'Instagram' },
  { href: 'https://x.com/kaiwagames?s=11&t=kByX6gVWvjWOaYSs7RYGzg', icon: FaTwitter, label: 'X' },
];

export default function TwoWonders() {
  return (
    <div className="tw-wrapper">
      <SocialLinks />
      <header className="tw-hero">
        <video className="tw-hero-video" autoPlay muted loop playsInline src="/assets/videos/TwoWonders/BackgroundGameplay.mp4"/>
        <div className="tw-hero-overlay">
          <img src="/assets/images/projects/TwoWonders/logo_two_wonders.png" alt="Two Wonders Logo" className="tw-logo" />
          <p className="tw-tagline"><strong>Your new adventure as a magician's apprentice is about to begin... ✨</strong></p>
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
            <div className="overview-section">
                <h1>OVERVIEW</h1>
                <p>
                Two Wonders is a <b>3D action-adventure</b> game with an <b>isometric view</b>, inspired by games like <b>Tunic</b> or <b>The Legend of Zelda</b>, where exploration is key element.
                </p>
                <p>
                The game combines strategic <b>puzzle-solving</b> with <b>elemental combat</b>, where players must use different elemental abilities to defeat enemies, each possessing unique elemental strengths and weaknesses.
                </p>
                <div className="tw-role-box" role="note" aria-label="Project role">
                    <strong>My Role:</strong>
                        I worked as <b>C++ Programmer</b>, mainly developing the <b>Game Engine and AI.</b> I also collaborated on the <b>graphics engine</b> and <b>level design.</b>
                </div>
                <p>It was presented at the following events: </p>
                <img className="feature-icon" src="/assets/images/projects/TwoWonders/indiesummitvalencia.png" alt="icon" />
                <img className="feature-icon" src="/assets/images/projects/TwoWonders/indiedevdaybarcelona.webp" alt="icon" />
            </div>
            <div>
                <h1>FEATURES</h1>
                <ul className="tw-features">
                <li>
                    <img className="feature-icon" src="/assets/images/projects/TwoWonders/fijado_destellin.png" alt="icon" />
                    <p>Elemental magic adventure</p>
                </li>
                <li>
                    <img className="feature-icon" src="/assets/images/projects/TwoWonders/fijado_destellin.png" alt="icon" />
                    <p>Combat and exploration</p>
                </li>
                <li>
                    <img className="feature-icon" src="/assets/images/projects/TwoWonders/fijado_destellin.png" alt="icon" />
                    <p>Rich lore and NPC interaction</p>
                </li>
                    <li>
                    <img className="feature-icon" src="/assets/images/projects/TwoWonders/fijado_destellin.png" alt="icon" />
                    <p>Custom Game Engine</p>
                </li>
                <li>
                    <img className="feature-icon" src="/assets/images/projects/TwoWonders/fijado_destellin.png" alt="icon" />
                    <p>Windows and Linux support</p>
                </li>
                <li>
                    <img className="feature-icon" src="/assets/images/projects/TwoWonders/fijado_destellin.png" alt="icon" />
                    <p>Keyboard and gamepad controls</p>
                </li>
                </ul>
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
            <h3><img className="contrib-icon" src="/assets/images/projects/TwoWonders/fijado_trama.gif" alt="icon"/>Entity-Component-System(ECS)</h3>
            <p>ECS is an architecture that separates entities into components (data) and systems (logic). Entities are just containers, components define characteristics, and systems process the logic. This allows for greater flexibility and optimization in managing game objects.</p>
            <p>I worked on the implementation of the ECS, specifically in the construction of SlotMap matrix structure that would allow us to store the data of the components that each entity could have in binary key system. Then, we implement entity manager which contains functions related to the managment of entities like their Creation, addition of components or tags and their destruction.</p>
            <a className="tw-github-btn" href="#" aria-label="View code on GitHub">
              <FaGithub />
              <span>View Code here!</span>
            </a>
            <div className="tw-contrib-media">
              <img src="/assets/images/projects/TwoWonders/ECS-diagram.png" alt="Systems screenshot" />
            </div>
          </article>

          <article className="tw-contribution">
            <h3><img className="contrib-icon" src="/assets/images/projects/TwoWonders/fijado_trama.gif" alt="icon"/> Zelda Model </h3>
            <p>Our game is based on the model of <b>The legend of Zelda</b>. For this reason, we start by implementing its basics mechanics such as collecting objects, sword attack, shield, open doors among others.</p>
            <p>My job here was to implement the basic Zelda enemies such as the Keese (random movement), Octorok (random movement and shooting),AquaMentus (fires 3 projectiles) or RiverZora (change position and shoot towards the player)</p>
            <p>This model was implemented with <a href="https://www.raylib.com/">Raylib library</a>.</p>
            <video autoPlay muted loop playsInline src="/assets/videos/TwoWonders/Modelo_Zelda.mp4"/>
          </article>
          <article className="tw-contribution">
            <h3><img className="contrib-icon" src="/assets/images/projects/TwoWonders/fijado_trama.gif" alt="icon"/> AI Engine </h3>
            <p>I developed an AI engine from scratch in c++ which would be in charge of processing different entities such as enemies or npcs and giving them behaviors according to their previous design.</p>
            <a className="tw-github-btn" href="#" aria-label="View code on GitHub">
              <FaGithub />
              <span>View Code here!</span>
            </a>
            <div className="tw-contrib-media">
              <img src="/assets/images/projects/TwoWonders/AIEngine_diagram.png" alt="Tools screenshot" />
            </div>
            <div className="tw-contrib-feature">
                <div class="tw-contrib-feature-title">
                    <img className="feature-icon" src="/assets/images/projects/TwoWonders/fijado_destellin.png" alt="icon" />
                    <h3>AI Component</h3>
                </div>
                <p>This component define characteristics about AI entities.Between them, we can find fisics aspects(velocity, aceleration or position) , 
                    flags to know what alert states are active or if it detect player, radius(detection,attack,arrival), path, behaviour tree instance, perception aspects(field of view,distance to listen) and timers to
                    manage spawning,couldowns, heal among others.
                </p>
            </div>
            <div className="tw-contrib-feature">
                <div class="tw-contrib-feature-title">
                    <img className="feature-icon" src="/assets/images/projects/TwoWonders/fijado_destellin.png" alt="icon" />
                    <h3>AI Manager</h3>
                </div>
                <p>This manager is responsible for generating entity AIs using the data provided in a JSON file.First, it extracts information such us position, rotation, scale, type, combat characteristics and more. Then, create a specific behaviour tree for each enemy type, assign the necessary components and tags.
                </p>
            </div>
            <div className="tw-contrib-feature">
                <div class="tw-contrib-feature-title">
                    <img className="feature-icon" src="/assets/images/projects/TwoWonders/fijado_destellin.png" alt="icon" />
                    <h3>AI System</h3>
                </div>
                <p>This system update the perception and behavior of enemy entities in the game, detecting the player and updating a shared "BlackBoard" with relevant information such as positions, life states and potential targets. Additionally, it runs behavior trees for each entity based on its state, provides data for visual debugging (such as vision cones), and ensures consistency by removing outdated information from non-relevant enemies.
                </p>
            </div>
             <div className="tw-contrib-feature">
                <div class="tw-contrib-feature-title">
                    <img className="feature-icon" src="/assets/images/projects/TwoWonders/fijado_destellin.png" alt="icon" />
                    <h3>Behaviour Trees</h3>
                </div>
                <p>Structure used in AI to model the behaviour of entities whose main function is organize and execute tasks or actions in a hierarchical and modular way.</p>
                <p>At a tecnical level, behaviour tree class it's responsible for the creation of the nodes controlling and managing the reserved memory space, as well as, their correct execution and node class contains virtual run functions tha all nodes implement, differentes states that result from the execution and the context(references to components or managers). From the latter, the selector, sequence and decision node is created.</p>
                 <div className="tw-contrib-media">
                  <img src="/assets/images/projects/TwoWonders/spider_bt_diagram.png" alt="icon" />
                  <img src="/assets/images/projects/TwoWonders/gym_ia_1.png" alt="icon" />
                 </div>
            </div>
             <div className="tw-contrib-feature">
                <div class="tw-contrib-feature-title">
                    <img className="feature-icon" src="/assets/images/projects/TwoWonders/fijado_destellin.png" alt="icon" />
                    <h3>Blackboard</h3>
                </div>
                <p>Is a shared data container to manage communication and coordination between different AIs.It is used by behaviour tree and updated by AI system.</p>
            </div>
             <div className="tw-contrib-feature">
                <div class="tw-contrib-feature-title">
                    <img className="feature-icon" src="/assets/images/projects/TwoWonders/fijado_destellin.png" alt="icon" />
                    <h3>Steering Behaviours</h3>
                </div>
                <p>These behaviors allow agents to move realistically through the environment, adjusting their direction and speed in real time based on their objectives and environmental conditions.</p>
                <p>n Two Wonders I implement the following types of movement: Seek, Arrive, Flee, Pursue, Avoid, Evade and Flocking. All of these return a Steer_t structure, which contains information about the agent's speed, orientation, and whether it has arrived.</p>
            </div>
             <div className="tw-contrib-feature">
                <div class="tw-contrib-feature-title">
                    <img className="feature-icon" src="/assets/images/projects/TwoWonders/fijado_destellin.png" alt="icon" />
                    <h3>Pathfinding </h3>
                </div>
                <p>It is a method used for agents to find the most optimal path between two points. In our case, we use it to make enemies move towards the player at long distances and so they can return to their patrol position after a chase.</p>
                <p>To determine the navigable areas for the AIs, we have created a system of navigation meshes that are placed on the level model and through a script we obtain the vertices, centers and orthocenters for each one compiled in a json file. Then, our maps is responsible for importing all this information into a singleton called navmesh_info and creates the NavMesh entities that will be used for later debugging.</p>
                <p>Finally, the A* algorithm has been implemented that uses the Euclidean distance as a heuristic. This method works with directed weighted graphs, so a Graph class has been created that is responsible for creating the nodes and connections from the navigation meshes.</p>
                <div className="tw-contrib-media">
                  <img src="/assets/images/projects/TwoWonders/navmeshes_structure.jpg" alt="Tools screenshot" />
                  <img src="/assets/images/projects/TwoWonders/navmeshes_debug.png" alt="Tools screenshot" />
                </div>
            </div>
            <div className="tw-contrib-feature">
                <div class="tw-contrib-feature-title">
                    <img className="feature-icon" src="/assets/images/projects/TwoWonders/fijado_destellin.png" alt="icon" />
                    <h3>Sensorial Perception</h3>
                </div>
                <p>Two Wonders uses a vision-based perception system that uses a cone as a field of vision which emerges from the head towards where the agent is facing and has a ray system for obstacle detection. In addition, it has perception by ear through alert radios that determine the volume of the sound that the agent can capture and the minimum time to detect you.</p>
                <div className="tw-contrib-media">
                  <img src="/assets/images/projects/TwoWonders/view_percepction.png" alt="Tools screenshot" />
                  <img src="/assets/images/projects/TwoWonders/hear_perception.png" alt="Tools screenshot" />
                </div>
            </div>
          </article>
          <article className="tw-contribution">
            <h3><img className="contrib-icon" src="/assets/images/projects/TwoWonders/fijado_trama.gif" alt="icon"/> In-Game Parameter Editor and Visual Debugger </h3>
            <p>

Throughout the development, I created different interfaces to debug the AI, first using <a href='https://github.com/ocornut/imgui' target="_blank">ImGui</a> and later migrating this interface to our own OpenGL-based engine.</p>
            <a className="tw-github-btn" href="#" aria-label="View code on GitHub">
              <FaGithub />
              <span>View Code here!</span>
            </a>
            <div className="tw-contrib-media">
              <img src="/assets/images/projects/TwoWonders/debuggerIA.png" alt="Tools screenshot" />
              <img src="/assets/images/projects/TwoWonders/visualdebugger.png" alt="Tools screenshot" />
            </div>
          </article>
          <article className="tw-contribution">
            <h3><img className="contrib-icon" src="/assets/images/projects/TwoWonders/fijado_trama.gif" alt="icon"/> Skeletal Animation System </h3>
            <p>I collaborated in the implementation of the animation pipeline that uses <a href="https://github.com/assimp/assimp" target="_blank">Assimp</a> to import animation data and a custom runtime system to play and blend animations. At import time the engine converts each Assimp animation into an Animation object (with bones, keyframes, duration and ticks-per-second) and collects BoneInfo (name + offset matrix) to map model nodes to runtime bones. Animations are owned centrally (unique_ptrs) by the AnimationManager and referenced by components for efficient reuse.</p>
            <p>At runtime the AnimationManager updates active animations each frame by advancing animation time, traversing the node hierarchy, computing per-bone transforms, and writing final bone matrices used for GPU skinning. The system supports queued animations and smooth cross-fades: when transitioning it interpolates position, rotation (slerp) and scale between corresponding bone keyframes over a configurable transition time. This design separates import from playback, minimizes per-frame allocations, and provides robust blending for character animation.</p>
            <a className="tw-github-btn" href="#" aria-label="View code on GitHub">
              <FaGithub />
              <span>View Code here!</span>
            </a>
            <video autoPlay muted loop playsInline src="/assets/videos/TwoWonders/SkeletalAnimation.mp4"/>
          </article>
          <article className="tw-contribution">
            <h3><img className="contrib-icon" src="/assets/images/projects/TwoWonders/fijado_trama.gif" alt="icon"/> Event Manager and Trigger System </h3>
            <p>The event system implements a simple queued event dispatcher and a thin system wrapper: code creates Event objects and schedules them on the EventManager via scheduleEvent;</p>
            <p>The EventSystem simply calls EventManager::dispatchEvents each update.
DispatchEvents method processes the queue in LIFO order, iterating listeners (entities with ListenerComponent) and, for each listener interested in the event code, executes a switch over EventCodes to perform game-specific reactions like spawning objects, adding text messages, playing sounds, teleporting NPCs, setting level flags, and scheduling further events.</p>
<p>Listeners can also gain interest in newly scheduled events by adding codes to their ListenerComponent, and some event handlers push other events back onto the queue to form chains or multi-step triggers.</p>
            <a className="tw-github-btn" href="#" aria-label="View code on GitHub">
              <FaGithub />
              <span>View Code here!</span>
            </a>
             <video autoPlay muted loop playsInline src="/assets/videos/TwoWonders/EventTrigger.mp4"/>
          </article>
        </section>

        <section className="tw-details">
          <h2>Project Details</h2>
          <ul>
            <li><b>Studio:</b> Kaiwa Games</li>
            <li><b>Genre:</b> 3D action-adventure </li>
            <li><b>Platforms:</b> PC - Linux and Windows</li>
            <li><b>Duration:</b>
              <ol>
                <li>Design and Prototype: 2023 September - 2023 October</li>
                <li>Pre-Alpha: 2023 October - 2023 December</li> 
                <li>Alpha : 2023 December - 2024 Fabruary</li>
                <li>Beta : 2023 Fabruary - 2024 MArch</li>
                <li>Gold : 2023 MArch - 2024 May</li>
              </ol>
            </li>
            <li><b>Team Size:</b>
            <ol>
              <li>Game Designers: All</li>
              <li>Programmers: 3</li>
              <li>Artist: 3</li>
            </ol>
            </li>
            <li><b>Engine and Tools: </b>Custom Engine, Maya, Blender, ZBrush </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
