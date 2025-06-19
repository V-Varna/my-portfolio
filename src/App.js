import React, { useState, useEffect } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import './index.css';
import HackathonCarousel from './components/HackathonCarousel';
import AboutMe from './components/AboutMe';
import TechnicalSkills from './components/TechnicalSkills';
import ProjectCards from './components/ProjectCards';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => true); // Always start in dark mode

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
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
      <SpeedInsights />
    </div>
  );
}

export default App;
