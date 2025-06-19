import React from 'react';
import './TechnicalSkillItems.css';

const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'C++', icon: '💻' },
      { name: 'Java', icon: '☕' },
      { name: 'C', icon: '🔵' },
      { name: 'Python', icon: '🐍' },
      { name: 'JavaScript', icon: '🟨' },
      { name: 'SQL', icon: '🗄️' },
    ],
  },
  {
    category: 'Frontend Technologies',
    items: [
      { name: 'HTML', icon: '🟥' },
      { name: 'CSS', icon: '🟦' },
      { name: 'JavaScript', icon: '🟨' },
      { name: 'React.js', icon: '⚛️' },
      { name: 'Tailwind CSS', icon: '🌬️' },
    ],
  },
  {
    category: 'Developer Tools',
    items: [
      { name: 'VS Code', icon: '📝' },
      { name: 'Jupyter Notebook', icon: '📒' },
      { name: 'Online Editors', icon: '🌐' },
    ],
  },
  {
    category: 'Version Control',
    items: [
      { name: 'Git', icon: '🔧' },
      { name: 'GitHub', icon: '🐙' },
    ],
  },
  {
    category: 'Hosting Tools & Technologies',
    items: [
      { name: 'Vercel', icon: '🚀' },
    ],
  },
  {
    category: 'Relevant Coursework',
    items: [
      { name: 'Data Structures and Algorithms', icon: '🧩' },
      { name: 'Database Management Systems', icon: '🗄️' },
      { name: 'Object Oriented Programming', icon: '🧑‍💻' },
      { name: 'Problem Solving', icon: '🧠' },
    ],
  },
];

const TechnicalSkillItems = () => (
  <section className="skills-items-section">
    <h2 className="skills-title-gradient">All Technical Skills</h2>
    <div className="skills-items-cards">
      {skills.map((group, idx) => (
        <div className="skills-items-group" key={idx}>
          <h3 className="skills-items-category">{group.category}</h3>
          <div className="skills-items-list">
            {group.items.map((skill, i) => (
              <div className="blur-card" key={i}>
                <span className="skill-icon" style={{ fontSize: 32 }}>{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TechnicalSkillItems;
