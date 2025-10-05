import { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from './Modal'
import './Experience.css'

const experiences = [
  {
    id: 1,
    role: "AI and Tools Programmer",
    company: "Zulo Interactive",
    coverImage: "/assets/images/logos/Zulo_Logo.png",
    period: "2024 - Present",
    summary: "Developed gameplay mechanics and AI systems using Unreal Engine 4.",
    details: [
      "Implemented core gameplay features using C++ and Blueprints",
      "Created AI behavior trees for enemy NPCs",
      "Optimized game performance and fixed critical bugs",
      "Collaborated with artists to implement asset integration pipeline"
    ]
  },
  {
    id: 1,
    role: "Engine and AI Programmer",
    company: "Kaiwa Games",
    coverImage: "/assets/images/logos/KAIWA_Logo_Blanco.png",
    period: "2023 - 2024",
    summary: "Developed gameplay mechanics and AI systems using Unreal Engine 4. holaaaaaaaaaaaaaaaaaaaaaaa",
    details: [
      "Implemented core gameplay features using C++ and Blueprints",
      "Created AI behavior trees for enemy NPCs",
      "Optimized game performance and fixed critical bugs",
      "Collaborated with artists to implement asset integration pipeline"
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
                      <button 
                        className="details-btn"
                        onClick={() => setSelectedExp(exp)}
                      >
                        Learn More
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
                      <button 
                        className="details-btn"
                        onClick={() => setSelectedExp(exp)}
                      >
                        Learn More
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