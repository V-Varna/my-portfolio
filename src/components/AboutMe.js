import React from 'react';
import { FaMapMarkerAlt, FaGraduationCap, FaUserGraduate, FaStar, FaUserCheck, FaAward } from 'react-icons/fa';
import './AboutMe.css';

const AboutMe = () => (
  <section className="about-me" id="about">
    <h2>About <span className="about-highlight name-animate">Me</span></h2>
    <div className="about-card enhanced-glass about-card-beautified">
      <div className="about-description">
        <div className="about-header">
          <FaUserGraduate className="about-avatar-icon" />
          <span className="about-highlight name-animate">Varna</span>
        </div>
        <p className="about-bio">
          <span className="about-bio-highlight"><FaAward className="about-bio-icon" /> Smart India Hackathon 2024 Finalist</span> &mdash; IT undergrad passionate about building impactful solutions.<br/>
          <b>Skills:</b> React.js, Tailwind CSS, UI/UX, C++, Python, SQL, DSA.<br/>
          <b>Projects:</b> Real-time Anti-Doping Dashboard, Prime Video Clone.<br/>
          <FaStar className="about-star" /> <b>100+ LeetCode</b> problems solved.<br/>
          <span className="about-bio-highlight">Open to UI/UX, MERN Stack opportunities!</span>
        </p>
      </div>
      <div className="education">
        <h3><FaGraduationCap className="about-icon" /> Education</h3>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h4>B.Tech in Information Technology</h4>
              <p>Gokaraju Lailavathi Women's Engineering College</p>
              <span>2022 - 2026 | CGPA: 9.0</span>
              <div className="about-info">
                <p><FaMapMarkerAlt className="about-icon" /> <strong>Location:</strong> Hyderabad, India</p>
                <p><FaUserCheck className="about-icon status-icon" /> <strong>Status:</strong> Available for opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
