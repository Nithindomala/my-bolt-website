import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import EducationSection from './sections/EducationSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;