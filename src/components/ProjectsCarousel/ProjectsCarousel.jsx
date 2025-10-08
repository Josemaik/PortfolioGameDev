import { s } from 'framer-motion/client';
import './ProjectsCarousel.css';
import { RiTeamFill } from "react-icons/ri";

const projects = [
  {
    title: 'Lady Umnbrella',
    studio: 'Zulo Interactive',
    image: '/assets/images/projects/LadyUmbrella/LadyUmbrella_cartel.png',
    description: (
      <>
        <strong>3D action-adventure</strong> where you play as Italian agent Francesca with a <strong>multi-functional umbrella.</strong>
      </>
    ),
    role: (
      <>
        I colaborated as <strong>AI</strong> and <strong>Gameplay Tools Programmer</strong> in a <strong>large team.</strong>
      </>
    ), 
    teamSize: 40,
    url: '/projects/lady-umbrella'
  },
  {
    title: 'Two Wonders',
    studio: 'Kaiwa Games',
  image: '/assets/images/projects/TwoWonders/Two_Wonders_Cartel.png',
    description: (
      <>
        Two Wonders is an <strong>adventure</strong> video game based on <strong>elemental magic</strong> where you play a young magician in search of his master.
      </>
    ),
    role: (
      <>
        My main role was programming the <strong>AI ​​and ECS Custom Engine</strong>, but I also collaborated on <strong>level and behavior design</strong>.
      </>
    ),
    teamSize: 6,
    url: '/projects/two-wonders'
  },
  {
    title: 'KAIWA',
    studio: 'Kaiwa Games',
  image: '/assets/images/projects/Mr.Og/Cartel_mrog_main.png',
    description: ( 
      <>
        Mr. Og the Sampler is an <strong>arcade game inspired by the classic Guzzler</strong> , released in 1986.
      </>
    ),
    role: (
      <>
       I worked as a <strong>Designer and Programmer</strong> on this project, developed in <strong>7 weeks</strong> for the <strong>Amstrad CPC using Z80 assembly.</strong>
      </>
    ),
    teamSize: 3,
    url: 'https://kaiwa-ams0.itch.io/mr-og-the-sampler'
  },
  {
    title: 'Cod Zombies Prototype',
    studio: 'Fan Game',
  image: '/assets/images/projects/CodZombiesPrototype/CodPrototype.png',
    description: ( 
        <>
        <strong>FPS Prototype</strong> made with Unreal Engine.
        </>
    ),
    role: (
      <>
        I worked as a <strong>Solo Developer</strong> on this project, developing all the gameplay mechanics and systems in 2 weeks.
      </>
    ),
    url: '/projects/cod-zombies-prototype'
  },
   {
    title: 'Sci-Fi Shooter prototype',
    studio: 'Fan Game',
  image: '/assets/images/projects/ScifiShooter/UnexpectedMission.png',
    description: ( 
        <>
        <strong>Sci-Fi Shooter prototype</strong> made in Unreal Engine 5 based in <strong>NOVA 3</strong> 
        </>
    ),
    role: (
      <>
        I worked as a <strong>Solo Developer</strong> on this project, developing all the gameplay mechanics and systems in 1 month.
      </>
    ),
    url: '#'
  },
   {
    title: 'Teapathia',
    studio: 'Final Degree Project',
  image: '/assets/images/projects/Teapathia/teapathia.png',
    description: ( 
        <>
        <strong>3D serious video game</strong> aimed at parents of children with autism spectrum disorders.
        </>
    ),
    role: (
      <>
        I worked as a <strong>Solo Developer</strong>, developing the entire project during my last year of engineering.
      </>
    ),
    url: '#'
  }
];

export default function ProjectsGrid() {
  return (
    <section id="portfolio" className="projects-section">
      <h2 className="projects-title">My Work</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a target="_blank" href={project.url} className="project-card" key={`project-${index}` }>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-content">
              <div className="project-header">
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-studio">{project.studio}</p>
                </div>
                {project.teamSize && (
                  <div className="team-size">
                    <RiTeamFill className="team-icon" />
                    <span>{project.teamSize}</span>
                  </div>
                )}
              </div>
              <div className="project-details">
                <p className="project-description">{project.description}</p>
                <p className="project-role">{project.role}</p>
                <button className="project-button">
                  <span className="button-text">View Project</span>
                  <span className="button-text-hover">Go!</span>
                </button>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
