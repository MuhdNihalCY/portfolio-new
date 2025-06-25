import React, { useState, useEffect } from 'react';
import { Briefcase, Users, Coffee } from 'lucide-react';
import { Helmet } from "react-helmet";
import CustomCursor from './components/ui/CustomCursor.jsx';
import HeroSection from './components/sections/HeroSection.jsx';
import AboutSection from './components/sections/AboutSection.jsx';
import TechStack from './components/sections/TechStack.jsx';
import ProjectsSection from './components/sections/ProjectsSection.jsx';
import ContactSection from './components/sections/ContactSection.jsx';
import DockNavigation from './components/shared/BottomDock.jsx';
import Footer from './components/sections/Footer.jsx';

function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const achievements = [
    { icon: Briefcase, count: '4+', label: 'Projects Completed', color: 'blue' },
    { icon: Users, count: '3+', label: 'Happy Clients', color: 'green' },
    { icon: Coffee, count: '2+', label: 'Years Experience', color: 'yellow' }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Muhammed Nihal",
    "jobTitle": "Full-Stack Developer & DevOps Engineer",
    "url": "https://www.muhammednihal.com",
    "sameAs": [
      "https://github.com/muhdnihalcy",
      "https://www.linkedin.com/in/nihalcy/"
    ],
    "skills": ["Backend Development", "DevOps", "Database Management", "System Architecture"]
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-['Inter']">
      <CustomCursor />
      <Helmet>
        <title>Muhammed Nihal | Full-Stack Developer & DevOps Engineer</title>
        <meta name="description" content="Experienced Full-Stack Developer & DevOps Engineer specializing in scalable systems, backend development, and cloud architecture with 2+ years of professional experience." />
        <meta name="keywords" content="Full-Stack Developer, DevOps Engineer, Backend Development, Node.js, Docker, AWS, Kubernetes, Cloud Architecture" />
        <meta name="author" content="Muhammed Nihal" />
        <meta property="og:title" content="Muhammed Nihal | Full-Stack Developer & DevOps Engineer" />
        <meta property="og:description" content="Portfolio of Muhammed Nihal - Full-Stack Developer & DevOps Engineer with expertise in cloud-native applications and infrastructure automation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.muhammednihal.com" />
        <meta property="og:image" content="https://www.muhammednihal.com/profile-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Muhammed Nihal | Full-Stack Developer" />
        <meta name="twitter:description" content="Experienced Full-Stack Developer & DevOps Engineer specializing in scalable systems and cloud architecture." />
        <meta name="twitter:image" content="https://www.muhammednihal.com/profile-image.jpg" />
        <link rel="canonical" href="https://www.muhammednihal.com" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <style>{`
          html, body { cursor: none !important; }
          a, button, .tech-card, [role="button"] { cursor: none !important; }
          @media (max-width: 768px) {
            .custom-cursor, .cursor-dot { display: none !important; }
            html, body, a, button { cursor: auto !important; }
          }
        `}</style>
      </Helmet>
      {/* Navigation (hidden) */}
      <nav className={`${scrolled ? 'nav-blur' : 'bg-transparent'}`} aria-label="Main navigation">
        <div className="container mx-auto px-4 py-4 hidden">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold gradient-text" aria-label="Home">MN</a>
            <div className="flex gap-8">
              <a href="#about" className="text-gray-300 hover:text-white transition-all hover:scale-105">About</a>
              <a href="#skills" className="text-gray-300 hover:text-white transition-all hover:scale-105">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-all hover:scale-105">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-all hover:scale-105">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      <HeroSection />
      <AboutSection achievements={achievements} />
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center gradient-text">Tech Stack & Skills</h2>
          <TechStack />
        </div>
      </section>
      <ProjectsSection />
      <ContactSection />
      <DockNavigation />
      <Footer />
    </div>
  );
}

export default App;