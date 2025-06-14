import React from 'react';
import './Achievements.css';

const achievements = [
  {
    title: 'Smart India Hackathon Winner',
    description: 'Secured 1st place in SIH 2023 for developing an innovative solution to a real-world problem.',
    icon: '🏆',
    year: '2023',
  },
  {
    title: 'Best Project Award',
    description: 'Received the Best Project Award at College Tech Fest for an AI-powered web app.',
    icon: '🥇',
    year: '2024',
  },
  {
    title: 'Certificate of Excellence',
    description: 'Recognized for outstanding performance in the National Coding Challenge.',
    icon: '🎖️',
    year: '2023',
  },
  // Add more achievements as needed
];

function Achievements() {
  return (
    <section className="achievements-section" id="achievements">
      <h2>Achievements</h2>
      <div className="achievements-cards">
        {achievements.map((ach, idx) => (
          <div className="achievement-card" key={idx}>
            <div className="achievement-icon">{ach.icon}</div>
            <div className="achievement-content">
              <h3>{ach.title}</h3>
              <p>{ach.description}</p>
              <span className="achievement-year">{ach.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
