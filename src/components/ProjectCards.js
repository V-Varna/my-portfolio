import React from 'react';
import './ProjectCards.css';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const projects = [
  {
    title: 'Anti-Doping Dashboard',
    description: 'SIH Finalist Project - Secure dashboard built with React, Node.js, MongoDB featuring real-time workflows and data visualization',
    tech: ['React', 'Node.js', 'MongoDB','Express'],
    link: 'https://github.com/V-Varna/Anti-Doping-platform'
  },
  {
    title: 'Amazon Prime Clone',
    description: 'A clone of the popular streaming service, built with React and REST APIs.',
    tech: ['React', 'Tailwind css', 'REST APIs'],
    link: 'https://github.com/V-Varna/PrimeClone-React'
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio to showcase projects and skills.',
    tech: ['React', 'Tailwind css', 'JavaScript'],
    link: 'https://github.com/V-Varna/my-portfolio'
  }
  ,
  {
    title: 'Frontend Web Projects',
    description: 'A collection of my frontend web projects showcasing various skills and technologies.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/V-Varna?tab=repositories'
  }
];

const ProjectCards = () => (
  <section className="projects-section" id="projects">
    <h2>Projects</h2>
    <div className="project-cards">
      {projects.map((project, idx) => (
        <div className="project-card" key={idx}>
          <div className="project-card-header">
            <FaCode className="project-card-icon" />
            <h3>{project.title}</h3>
          </div>
          <p>{project.description}</p>
          <div className="project-tech">
            {project.tech.map((t, i) => <span key={i} className="tech-badge">{t}</span>)}
          </div>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt style={{ marginRight: '0.5rem' }} />View Project
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectCards;
