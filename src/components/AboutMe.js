import React from 'react';
import { FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';
import './AboutMe.css';

const AboutMe = () => (
  <section className="about-me" id="about">
    <h2>About <span className="about-highlight name-animate">Me</span></h2>
    <div className="about-card">
      <div className="about-description">
        <p>
          I'm <span className="about-highlight name-animate">Varna</span>, a passionate software developer with a love for building impactful web applications. I enjoy solving complex problems and collaborating with creative teams.
        </p>
        <div className="about-info">
          <p><FaMapMarkerAlt className="about-icon" /> <strong>Location:</strong> San Francisco, CA</p>
        </div>
      </div>
      <div className="education">
        <h3><FaGraduationCap className="about-icon" /> Education</h3>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h4>B.Tech in Computer Science</h4>
              <p>Tech University</p>
              <span>2019 - 2023 | CGPA: 8.7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
