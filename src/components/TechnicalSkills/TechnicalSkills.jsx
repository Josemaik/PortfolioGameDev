import { motion } from 'framer-motion';
import './TechnicalSkills.css';
import { 
  SiUnity, SiUnrealengine, SiCplusplus, 
  SiPython, SiLua, SiOpengl, SiHtml5, SiCss3, 
  SiJavascript, SiReact, SiNodedotjs, SiMongodb,
  SiMysql, SiGit, SiGithub
} from 'react-icons/si';
import { PiFileCSharpFill } from "react-icons/pi";
import { FaCode, FaMicrochip } from 'react-icons/fa';

const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: "Game Engines",
      skills: [
        { 
          name: "Unity",
          icon: <SiUnity />,
          description: "Desarrollo de juegos, herramientas de editor, shaders personalizados"
        },
        { 
          name: "Unreal Engine",
          icon: <SiUnrealengine />,
          description: "Blueprints, gameplay en C++"
        }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { 
          name: "C++",
          icon: <SiCplusplus />,
          description: "Motores de juego, sistemas de alto rendimiento"
        },
        { 
          name: "C#",
          icon: <PiFileCSharpFill />,
          description: "Unity, backend y herramientas"
        }
        // { 
        //   name: "Assembly",
        //   icon: <FaMicrochip />,
        //   description: "Optimización low-level, interfacing hardware"
        // }
      ]
    },
    {
      title: "Scripting and Graphics",
      skills: [
        { 
          name: "Lua",
          icon: <SiLua />,
          description: "Scripting embebido, modding de juegos"
        },
        { 
          name: "Python",
          icon: <SiPython />,
          description: "Automatización, herramientas y data"
        },
        { 
          name: "OpenGL",
          icon: <SiOpengl />,
          description: "Renderizado personalizado, shaders"
        }
      ]
    },
        {
      title: "Version Control",
      skills: [
        { 
          name: "Git/GitHub",
          icon: <><SiGit /><SiGithub /></>,
          description: "Control de versiones, colaboración"
        },
        { 
          name: "Plastic SCM",
          icon: <FaCode />,
          description: "Versionado de assets, binarios grandes"
        }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { 
          name: "HTML/CSS/JS",
          icon: <><SiHtml5 /><SiCss3 /><SiJavascript /></>,
          description: "Web responsive, layouts modernos"
        },
        { 
          name: "React",
          icon: <SiReact />,
          description: "Desarrollo de interfaces modernas"
        },
        { 
          name: "Node.js",
          icon: <SiNodedotjs />,
          description: "APIs y servicios backend"
        },
        { 
          name: "SQL/MongoDB",
          icon: <><SiMysql /><SiMongodb /></>,
          description: "Bases de datos relacionales y no relacionales, optimización"
        },
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Technical Skills</h2>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="skill-category"
              data-category={category.title === 'Web Development' ? 'Web Development' : undefined}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3>{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-description">{skill.description}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechnicalSkills;