import React from 'react';
import './Teapathia.css';
import Footer from '../../components/Footer/Footer';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import { FaSteam, FaYoutube, FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaDownload, FaStreetView, FaEye, FaEyeDropper, FaEyeSlash, FaDochub, FaAngleDoubleRight } from 'react-icons/fa';
import { TbBinaryTreeFilled } from "react-icons/tb";
import { TfiBlackboard } from "react-icons/tfi";

// Header is provided globally by App; no per-page Header here to allow App's transition handlers to work

const socials = [
  { href: 'https://store.steampowered.com/', icon: FaSteam, label: 'Steam' },
  { href: 'https://www.youtube.com/', icon: FaYoutube, label: 'YouTube' },
  { href: 'https://www.linkedin.com/', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://x.com/', icon: FaTwitter, label: 'Twitter' },
  { href: 'https://www.instagram.com/', icon: FaInstagram, label: 'Instagram' },
];

export default function Teapathia() {
  return (
    <div className="tp-wrapper">
        <SocialLinks />
      <header className="tp-hero">
        <div className="tp-hero-video-wrapper">
        <img src="/assets/images/projects/Teapathia/Teapathia_Cartel.png" alt="Teapathia Logo" className="tp-hero-video" />
        </div>
        <div className="tp-hero-overlay">
          <p className="tp-tagline"><strong>Parents navigating Autism Spectrum Disorder</strong></p>
        </div>
      </header>

      <main className="tp-main">
        <section className="tp-summary">
          <div className="tp-summary-text">
            <h1>Overview</h1>
            <p>
              Prototype of a <strong>serious 3D video game</strong> aimed at parents of children with autism spectrum disorders
               in order to provide families with an audiovisual tool that helps them understand the therapy process their child is going through.
            </p>
            <h1>Features</h1>
            <ul className="tp-features">
              <li>
                <p>-</p>
                <p>immersive 3D environments</p>
              </li>
              <li>
                <p>-</p>
                <p>Cinematics depicting common situations between parents and professionals in cases of ASD</p>
              </li>
              <li>
                <p>-</p>
                <p>Interaction with virtual teacher and pediatrician</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="iframe-section">
            <div className="iframe-container">
              <iframe
              src="https://www.youtube.com/embed/abRziRtpIaw"
              title="Teapathia Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
        </section>

        <section className="tp-contributions">
            <h2>My Contributions</h2>
            <article className="tp-contribution">
                <h3>Interaction with Virtual Characters</h3>
                <p>The steps followd to achieve that:</p>
                <ul>
                    <li>Creating a widget in Unreal that collects player input via keyboard or voice recognition and is stored in text format.</li>
                    <li>The prompt is sent to an AI (Python script), which will generate a response that is picked up by the UI and displayed on the screen.</li>
                    <li>A call will be made to the ElevenLabs API to generate the audio corresponding to the text.</li>
                    <li>An animation system will manage the most appropriate animation to be executed by the teacher.</li>
                </ul>
                <div>
                    <img src="/assets/images/projects/Teapathia/Diagram.png" alt="Example media" />
                </div>
                <p><strong>UI Widget Utility</strong></p>
                <div className="tp-contrib-media">
                  <img src="/assets/images/projects/Teapathia/UtilityWidget.png" alt="Example media" />
                  <img src="/assets/images/projects/Teapathia/WidgetInGame.png" alt="Example media" />
                </div>
                <p><strong>Speech Recognition</strong></p>
                <div>
                  <img src="/assets/images/projects/Teapathia/SpeechRecognition.png" alt="Example media" />
                </div>
                <a className="lu-github-btn" href="https://github.com/Josemaik/LadyUmbrella/blob/main/Source/LadyUmbrella/AI/Managers/AISpawnPoint.cpp" target="_blank" aria-label="View code on GitHub">
                    <FaGithub />
                    <span>Speech Recognition Script!</span>
                </a>
                <p>I developed a <strong>Chatbot</strong> based on <b>natural language processing and machine learning techniques</b>, implemented in Python for its versatility and efficiency in AI development. The model was trained using specific datasets —one for interaction with a teacher and another for interaction with a pediatrician— both validated by medical professionals. These corpora, structured in tabular format for easier analysis, enable the chatbot to maintain natural and coherent conversations within their respective contexts.</p>
                <div>
                  <img src="/assets/images/projects/Teapathia/ExecutionIA.png" alt="Example media" />
                </div>
                 <a className="lu-github-btn" href="https://github.com/Josemaik/LadyUmbrella/blob/main/Source/LadyUmbrella/AI/Managers/AISpawnPoint.cpp" target="_blank" aria-label="View code on GitHub">
                    <FaGithub />
                    <span>ChatBot IA Script!</span>
                </a>
                <a className="lu-github-btn" href="https://github.com/Josemaik/LadyUmbrella/blob/main/Source/LadyUmbrella/AI/Managers/AISpawnPoint.cpp" target="_blank" aria-label="View code on GitHub">
                    <FaGithub />
                    <span>Datasets!</span>
                </a>
                <p>To trigger the characters' responses, I used <b>Eleven Labs</b>, passing the chatbot's response and a context via API, and I obtained an audio that was transformed into a sound wave.</p>
                
                <div className="tp-contrib-media">
                  <img src="/assets/images/projects/Teapathia/JsonRequest.png" alt="Example media" />
                  <img src="/assets/images/projects/Teapathia/contextRequest.png" alt="Example media" />
                  <img src="/assets/images/projects/Teapathia/header.png" alt="Example media" />
                  <img src="/assets/images/projects/Teapathia/ManageErrors.png" alt="Example media" />
                </div>
                <p>To create a realistic interaction, I created different animations using the <b>Live Link plugin</b> for facial capture, Mixamo animations modified in the engine, and animations generated from level sequence with control rig.</p>
                <div className="tp-contrib-media">
                  <img src="/assets/images/projects/Teapathia/sequence_anim.png" alt="Example media" />
                  <img src="/assets/images/projects/Teapathia/livelinkuse.png" alt="Example media" />
                </div>
                <p>Finally, I used the <b>Animation Blueprint</b> to trigger animations based on the context of the conversation.</p>    
                <div>
                    <img src="/assets/images/projects/Teapathia/animbp.png" alt="Example media" />
                </div>
            </article>
            <article className="tp-contribution">
                <h3>Level Sequences</h3>
                <p>Throughout the game there are <b>cinematics</b> that represent common situations that parents experience during their child's diagnosis.</p>
                <p>In this case I have used <b>Level Sequence</b>, integrating the camera actor and the character actor with their animations and transformations.</p>
                <div className="tp-contrib-media">
                  <img src="/assets/images/projects/Teapathia/levelsequenceintro.png" alt="Example media" />
                  <img src="/assets/images/projects/Teapathia/levelsequencecamera.png" alt="Example media" />
                </div>
            </article>
            <article className="tp-contribution">
                <h3>Art</h3>
                <p>The main settings—the classroom and the pediatrician—were modeled and textured in <b>Blender</b>. They were then integrated into Unreal and the materials were created.</p>
                <div className="tp-contrib-media">
                  <img src="/assets/images/projects/Teapathia/Pediatra.png" alt="Example media" />
                  <img src="/assets/images/projects/Teapathia/Classroom.png" alt="Example media" />
                </div>
                <p>The main characters were created with <b>MetaHuman creator</b> and integrated into the project.</p>
                <div className="tp-contrib-media">
                  <img src="/assets/images/projects/Teapathia/metahuman.png" alt="Example media" />
                  <img src="/assets/images/projects/Teapathia/metahuman_2.png" alt="Example media" />
                </div>
            </article>
        </section>

        <section className="tp-details">
            <h2>Project Details</h2>
            <ul>
            <li><b>Studio:</b> Personal Project</li>
            <li><b>Genre:</b> Serious Game</li>
            <li><b>Platforms:</b> PC</li>
            </ul>
        </section>
       </main>
       <Footer />
    </div>
  );
}
