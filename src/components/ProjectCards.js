import React from 'react';

const projects = [
  {
    title: 'Smart Expense Tracker',
    description: 'A web app to track expenses, visualize spending, and set budgets.',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    title: 'Hackathon Hub',
    description: 'A platform to discover, join, and organize hackathons worldwide.',
    tech: ['React', 'Express', 'Firebase'],
    link: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio to showcase projects and skills.',
    tech: ['React', 'CSS'],
    link: '#'
  }
];

const ProjectCards = () => (
  <section className="projects-section" id="projects">
    <h2>Projects</h2>
    <div className="project-cards">
      {projects.map((project, idx) => (
        <div className="project-card" key={idx}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-tech">
            {project.tech.map((t, i) => <span key={i} className="tech-badge">{t}</span>)}
          </div>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectCards;
