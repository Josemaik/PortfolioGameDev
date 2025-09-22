import { useState } from 'react';
import './ProjectsCarousel.css';

const projects = [
  {
    title: 'Proyecto 1',
    image: '/public/assets/images/logos/KAIWA_Logo.png',
  },
  {
    title: 'Proyecto 2',
    image: '/public/assets/images/logos/Zulo_Logo.png',
  },
   {
    title: 'Proyecto 3',
    image: '/public/assets/images/logos/KAIWA_Logo.png',
  },
  {
    title: 'Proyecto 4',
    image: '/public/assets/images/logos/Zulo_Logo.png',
  }
  // Puedes añadir más proyectos aquí
];

export default function ProjectsCarousel() {
  const [current, setCurrent] = useState(0);
  const visibleCount = 2;
  const maxIndex = Math.max(0, projects.length - visibleCount);

  const goLeft = () => {
    setCurrent((prev) => Math.max(0, prev - 1));
  };
  const goRight = () => {
    setCurrent((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="projects-carousel-section">
      <h2 className="carousel-title">Proyectos destacados</h2>
      <div className="carousel-wrapper">
        <button className="carousel-arrow left" onClick={goLeft} disabled={current === 0}>&lt;</button>
        <div className="carousel">
          {projects.slice(current, current + visibleCount).map((project, idx) => (
            <div className="carousel-item" key={current + idx}>
              <img src={project.image} alt={project.title} className="carousel-img" />
              <div className="carousel-caption">{project.title}</div>
            </div>
          ))}
        </div>
        <button className="carousel-arrow right" onClick={goRight} disabled={current === maxIndex}>&gt;</button>
      </div>
      <div className="portfolio-btn-wrapper">
        <button className="portfolio-btn" disabled>
          Ir a mi Portfolio
        </button>
      </div>
    </section>
  );
}
