/* For About Me Page */
import React, { useState, useEffect, useRef } from 'react';
import './AboutPageSidebar.css';

function AboutPageSidebar() {
  // Track which section is currently Active
  const [activeSection, setActiveSection] = useState('Resume');
  const sectionRefs = useRef({});

  // The List of Sections
  const navItems = [
    { id: 'Resume', label: 'Resume' },
    { id: 'About Me', label: 'About Me' },
  ];

  // Handler to update active section on click
  const handleNavClick = (id) => {
    // Set the newly clicked section as active
    setActiveSection(id);

    // Scroll smoothly to that section in the page
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Adjust based on header height
      threshold: 0, // Trigger when the section enters the middle of the viewport
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) {
        sectionRefs.current[item.id] = section;
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [navItems]);

  return (
    <aside className="nav-article">
      <h3></h3>
      <ul>
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              // Apply the .active class if this item matches activeSection
              className={item.id === activeSection ? 'active' : ''}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default AboutPageSidebar;
