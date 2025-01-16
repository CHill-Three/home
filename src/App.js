// src/App.js
import React from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import FadeIn from 'react-fade-in';

// Current Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ResearchPage from './pages/ResearchPage'; 

import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            // Fade In Transition & Page Name
            <FadeIn key={location.pathname + '-home'} transitionDuration={600}> 
              <HomePage />
            </FadeIn>
          }
        />
        <Route
          path="/about"
          element={
            // Fade In Transition & Page Name
            <FadeIn key={location.pathname + '-about'} transitionDuration={600}>
              <AboutPage />
            </FadeIn>
          }
        />
        <Route
          path="/projects"
          element={
            // Fade In Transition & Page Name
            <FadeIn key={location.pathname + '-projects'} transitionDuration={600}>
              <ProjectsPage />
            </FadeIn>
          }
        />
        <Route
          path="/research"
          element={
            // Fade In Transition & Page Name
            <FadeIn key={location.pathname + '-research'} transitionDuration={600}>
              <ResearchPage />
            </FadeIn>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

// Header Info: Name and Tabs
function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        <h1>Charles P. Hill III</h1>
        <p className="subtitle">BSEE</p>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/About"
              className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/Projects"
              className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/Research"
              className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
            >
              Research
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// Footer: Contact Info
function Footer() {
  return (
    <footer className="footer">
      <p>
        Feel free to contact me on 
        {' '}
        <a 
          href="https://www.linkedin.com/in/charleshillthree/" 
          target="_blank" 
          rel="noreferrer"
        >
          LinkedIn↗
        </a>
        {' '}
        • Thank You for Your Time :)
      </p>
      <p>Created by C.Hill • Last Updated: Wednesday, January 1, 2025 🎆 • © All Rights Reserved.</p>
    </footer>
  );
}
// 📅🎉🎂 — Monthiversary
// 🌷 — March
// 🌧️ — April
// 🌼 — May
// 🏖️ — June
// 🌞 — July
// 🌅— August
// 🍂 — September
// 🎃 — October
// 🍁🦃 — November
// 🎄❄️ — December (Website created on Christmas 2024)
export default App;
