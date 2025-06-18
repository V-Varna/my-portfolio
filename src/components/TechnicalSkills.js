import React, { useState } from 'react';
import './TechnicalSkills.css';

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
      { name: 'Netlify', icon: '🌐' },
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

const TechnicalSkills = () => {
  const [activeIdx, setActiveIdx] = useState(null);

  const handleCategoryClick = idx => {
    setActiveIdx(activeIdx === idx ? null : idx);
  };

  return (
    <section className="skills-section enhanced-glass skills-card-beautified" id="skills">
      <h2 className="skills-title-gradient">Technical Skills</h2>
      <div className="skills-category-pills-center">
        {skills.map((group, idx) => (
          <button
            className={`skill-category-pill glass-pill${activeIdx === idx ? ' active' : ''}`}
            key={idx}
            onClick={() => handleCategoryClick(idx)}
            tabIndex={0}
            aria-label={group.category}
            type="button"
          >
            <span className="pill-label-gradient">{group.category}</span>
          </button>
        ))}
      </div>
      {activeIdx !== null && (
        <div className="skills-items-center fade-in">
          <h3 className="skills-items-title">{skills[activeIdx].category}</h3>
          <div className="skills-items-list-center">
            {skills[activeIdx].items.map((skill, i) => (
              <div className="skill-card" key={i}>
                <span className="skill-icon" style={{ fontSize: 32 }}>{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default TechnicalSkills;
