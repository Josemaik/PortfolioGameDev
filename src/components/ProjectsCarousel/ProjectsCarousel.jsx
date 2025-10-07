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
    url: '#'
  },
  {
    title: 'KAIWA',
    studio: 'KAIWA Studios',
  image: '/assets/images/projects/LadyUmbrella/LadyUmbrella_cartel.png',
    description: ( 
      <>
        <strong>3D action-adventure</strong> where you play as Italian agent Francesca with a <strong>multi-functional umbrella.</strong>
      </>
    ),
    role: 'Solo Developer',
    url: '#'
  },
  {
    title: 'KAIWA',
    studio: 'KAIWA Studios',
  image: '/assets/images/projects/LadyUmbrella/LadyUmbrella_cartel.png',
    description: ( <>
        <strong>3D action-adventure</strong> where you play as Italian agent Francesca with a <strong>multi-functional umbrella.</strong>
      </>
    ),
    role: 'Solo Developer',
    url: '#'
  }
];

export default function ProjectsGrid() {
  return (
    <section id="portfolio" className="projects-section">
      <h2 className="projects-title">My Work</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a href={project.url} className="project-card" key={`project-${index}`}>
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
