import React from 'react';
import './Achievements.css';

const achievements = [
  {
    description: 'Hackathon 2024',
    title: 'Smart India Hackathon Finalists',
    description: 'Finalist in the national-level hackathon at NIT Surathkal, securing a Top 5 spot among 330+ teams under the Ministry of Youth Affairs and Sports. Advanced through three rigorous rounds, from internal selection to the Grand Finale, where an expert panel evaluated the solution.',
    icon: '🏆',
    year: '2024',
  },
  {
    description: 'DSA Practice 2024',
    title: 'LeetCode 150+',
    description: 'Solved over 150 coding problems on LeetCode, demonstrating strong problem-solving skills and consistency in data structures and algorithms.',
    icon: '🥇',
    year: '2024',
  },
  {
    description: 'Innovation 2023',
    title: 'Runner-Up – Ideathon',
    description: 'Secured Runner-Up at Pragnya Ideathon (GRIET) for proposing a tech-driven solution, judged for creativity, feasibility, and innovation.',
    icon: '🎖️',
    year: '2023',
  },

  {
    description: 'Certification 2023',
    title: 'NPTEL Elite Certificate',
    description: 'Awarded Elite grade for “The Joy of Computing using Python” by NPTEL – showcasing a strong grasp of foundational programming concepts.',
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
