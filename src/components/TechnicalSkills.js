import React from 'react';

const skills = [
  { name: 'JavaScript', icon: '🟨' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'HTML5', icon: '🟥' },
  { name: 'CSS3', icon: '🟦' },
  { name: 'Python', icon: '🐍' },
  { name: 'Git', icon: '🔧' },
];

const TechnicalSkills = () => (
  <section className="skills-section">
    <h2>Technical Skills</h2>
    <div className="skills-cards">
      {skills.map((skill, idx) => (
        <div className="skill-card" key={idx}>
          <span className="skill-icon" style={{ fontSize: 32 }}>{skill.icon}</span>
          <span className="skill-name">{skill.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default TechnicalSkills;
