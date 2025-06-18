import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
  FaFolderOpen,
} from 'react-icons/fa';
import ProfilePhoto from './ProfilePhoto';
import './Introduction.css';

const links = [
  { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/V-Varna', group: 1 },
  { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/varna-vanamala/', group: 1 },
  { icon: <FaEnvelope />, label: 'Email', href: 'https://mail.google.com/mail/?view=cm&to=v2005varna@gmail.com&su=Contact%20from%20Portfolio&body=Hi%20Varna,', group: 1 },
  { icon: <FaFileDownload />, label: 'Resume', href: 'https://drive.google.com/file/d/1iSL72OUc_IZ0P_eZaMa_4d9K6I1zKOeZ/view?usp=drive_link', download: true, group: 2 },
  { icon: <FaFolderOpen />, label: 'Projects', href: 'https://github.com/V-Varna?tab=repositories', group: 2 },
];

const Introduction = () => {
  const groupedLinks = links.reduce((groups, link) => {
    const group = groups[link.group] || [];
    group.push(link);
    groups[link.group] = group;
    return groups;
  }, {});

  return (
    <section className="introduction" id="introduction">
      <div className="intro-row">
        <div className="intro-content intro-card-square enhanced-card">
          <h1>
            Hi, I'm <span className="intro-highlight name-animate">Varna</span>
          </h1>

          <h2 className="intro-subtitle">UI/UX Designer | Problem Solver | SIH Finalist</h2>
                   <p className="tagline">I build responsive, user-friendly web applications using modern technologies like React and the MERN stack. I focus on solving real-world problems with clean code, practical functionality, and intuitive UI/UX design.</p>
          <div className="profile-links pill-links">
            {[1, 2].map((groupNum) => (
              <div className="pill-group" key={groupNum}>
                {groupedLinks[groupNum]?.map(({ icon, label, href, download }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    title={label}
                    aria-label={label}
                    
                    {...(download && { download })}
                  >
                    <span className="pill-icon">{icon}</span>
                    {label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="intro-profile-square enhanced-profile">
          <ProfilePhoto />
        </div>
      </div>
    </section>
  );
};

export default Introduction;