import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhoAmI } from './components/WhoAmI';
import { Qualifications } from './components/Qualifications';
import { EducationExperience } from './components/EducationExperience';
import { Achievements } from './components/Achievements';
import { AboutMeSkills } from './components/AboutMeSkills';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactReferences } from './components/ContactReferences';
import { Footer } from './components/Footer';
import { FloatingGithub } from './components/FloatingGithub';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop;
        const height = (section as HTMLElement).offsetHeight;
        const id = section.getAttribute('id');
        if (id && scrollPos >= top && scrollPos < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-body relative">
      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main>
        <Hero />
        <WhoAmI />
        <Qualifications />
        <EducationExperience />
        <Achievements />
        <AboutMeSkills />
        
        {/* Replaced Community Capstone with Projects & Community Work */}
        <ProjectsSection />
        
        <ContactReferences />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating GitHub Badge */}
      <FloatingGithub />
    </div>
  );
}
