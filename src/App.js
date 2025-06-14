import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';

import HackathonCarousel from './components/HackathonCarousel';
import AboutMe from './components/AboutMe';
import TechnicalSkills from './components/TechnicalSkills';
import ProjectCards from './components/ProjectCards';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className="App">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Introduction />
      
      <HackathonCarousel />
      <AboutMe />
      <TechnicalSkills />
      <ProjectCards />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
