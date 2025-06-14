import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaFolderOpen } from 'react-icons/fa';
import ProfilePhoto from './ProfilePhoto';
import './Introduction.css';

const Introduction = () => (
  <section className="introduction" id="introduction">
    <div className="intro-row">
      <div className="intro-content intro-card-square enhanced-card">
        <h1>
          Hi, I'm  <span className="intro-highlight name-animate">Varna</span>
        </h1>
        <p className="tagline">Building digital experiences with passion and precision.</p>
        <div className="profile-links pill-links">
          <div className="pill-group">
            <a href="https://github.com/alexdoe" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /> GitHub</a>
            <a href="https://linkedin.com/in/alexdoe" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /> LinkedIn</a>
            <a href="mailto:alexdoe@email.com" title="Email"><FaEnvelope /> Email</a>
          </div>
          <div className="pill-group">
            <a href="/resume.pdf" download title="Download Resume"><FaFileDownload /> Resume</a>
            <a href="#projects" title="View Projects"><FaFolderOpen /> Projects</a>
          </div>
        </div>
      </div>
      <div className="intro-profile-square enhanced-profile">
        <ProfilePhoto />
      </div>
    </div>
  </section>
);

export default Introduction;
