import { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from './Modal'
import './Experience.css'

const experiences = [
  {
    id: 1,
    role: "AI and Gameplay Programmer",
    company: "Zulo Interactive",
    coverImage: "/assets/images/logos/Zulo_Logo.png",
    period: "2025 fabruary - 2025 november",
    summary: (
      <>
      <a class = "summarry-project-link" target="_blank" href='https://store.steampowered.com/app/3956890/Lady_Umbrella/'>Lady Umbrella</a> is a third-person action-adventure shooter in which you wield Francesca's high-tech umbrella.
      </>
    ),
    summary_p2: (<>I worked in a team composed of 8 designers, 3 core artists, 8 programmers, 3 sound designers and many more, reaching a total of 40.</>),
    details: [
      <>Implement an <b>Editor Tool</b> that allows designers to quickly and iteratively <b>create encounters</b>.</>,
      <>Design and creation of <b>behavior trees</b> for the main enemy archetypes (mafia and agency).</>,
      <><b>Enviroment Query System</b> to perform behaviors such as cover seeking, close combat, line-of-sight seeking, or finding a flanking path.</>,
      <>Creating <b>class architecture</b> for enemies, weapons, and AI controllers</>,
      <><b>Enemy interactions</b> with the umbrella, shock dart, and grappling hook gadgets.</>,
      <>Door and window system for enemy <b>arena entrance events.</b></>,
      <><b>Voiceline system</b> for the protagonist and enemies that includes combat, cinematics, and in-game sequences.</>
    ]
  },
  {
    id: 2,
    role: "Tools Programmer",
    company: "Universitat Alacant, EPS",
    coverImage: "/assets/images/logos/UA_logo.png",
    period: "2024 june - 2024 august",
    summary: "Collaborate to make the data generation pipeline of a unannounced project more flexible and agile for the generation of realistic virtual scenes with Unreal Engine 5.",
    summary_p2: "",
    details: [
      <>Creating realistic 3D scenes using <b>Gaussian splats</b> generated in Luma AI and importing them into the engine</>,
      <><b>Dynamic scene loading from json:</b> metahuman, gaussian splat and cine camera data.</>,
      <>Improve and Fix <b>C++ Tool</b> that captures frames from the scene and exports to files</>,
      <><b>Skeleton retargeter</b> to generate metahuman animations from recorded animations.</>
    ]
  },
  {
    id: 3,
    role: "AI and Engine Programmer",
    company: "Kaiwa Games",
    coverImage: "/assets/images/logos/KAIWA_Logo_Blanco.png",
    period: "2023 - 2024",
    summary: (
    <>
    Along with a team of six people, I developed <a class = "summarry-project-link" target="_blank" href='https://kaiwagames.itch.io/two-wonders'>Two Wonders</a>, an isometric adventure game in which you control a wizard in search of his master.
    </>
    ),
    summary_p2: (<>We also developed <a class = "summarry-project-link" target="_blank" href='https://kaiwa-ams0.itch.io/mr-og-the-sampler'>Mr. Og</a>, an arcade game based on the classic Guzzler for the Amstrad CPC.</>),
    details: [
      <><b>Zelda Model</b> with Raylib library</>,
      <><b>Custom Game Engine - ECS</b></>,
      <><b>Custom AI Engine</b> : Behaviour Trees, Blackboard, Steering Behavour, Navigation Mesh, Pathfinding and Perception System.</>,
      <>Contribution to <b>Custom Graphics Engine</b> based on OpenGL: Skeletal animation, including import bones and animation data from obj files and the system to reproduce them</>,
      <><b>Event trigger system</b> for dialogue reprodution, interaction with level elements and scripted sequences</>,
      <>Collisions and AI system in <b>Assembly Z80</b></>
    ]
  }
]

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null)

  return (
    <section className="experience">
      <h2 className="section-title">My Experience</h2>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={`exp-${exp.id}`} className="timeline-row">
            {/* Content changes sides based on index */}
            {index % 2 === 0 ? (
              <>
                <motion.div 
                  className="timeline-content left"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="node-content">
                    <div className="exp-info">
                      <h3>{exp.role}</h3>
                      <h4>{exp.company}</h4>
                      <span className="period">{exp.period}</span>
                      <p>{exp.summary}</p>
                      <p>{exp.summary_p2}</p>
                      <button 
                        className="details-btn"
                        onClick={() => setSelectedExp(exp)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
                <div className="timeline-node">
                  <div className="node-marker"></div>
                </div>
                <motion.div 
                  className="timeline-image right"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={exp.coverImage} alt={`${exp.company} project`} />
                </motion.div>
              </>
            ) : (
              <>
                <motion.div 
                  className="timeline-image left"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={exp.coverImage} alt={`${exp.company} project`} />
                </motion.div>
                <div className="timeline-node">
                  <div className="node-marker"></div>
                </div>
                <motion.div 
                  className="timeline-content right"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="node-content">
                    <div className="exp-info">
                      <h3>{exp.role}</h3>
                      <h4>{exp.company}</h4>
                      <span className="period">{exp.period}</span>
                      <p>{exp.summary}</p>
                      <p>{exp.summary_p2}</p>
                      <button 
                        className="details-btn"
                        onClick={() => setSelectedExp(exp)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </div>
        ))}
        <div className="timeline-line" />
      </div>

      {selectedExp && (
        <Modal 
          experience={selectedExp} 
          onClose={() => setSelectedExp(null)} 
        />
      )}
    </section>
  )
}

export default Experience