import React, { useEffect, useState, useRef } from 'react';
import { Github, Linkedin, Mail, Terminal, Server, Cloud, Code2, Database, ArrowDown, ChevronRight, Briefcase, Award, Users, Coffee } from 'lucide-react';
import TechStack from './components/TechStack';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import ContactDetails from './components/ContactForm';
import DockNavigation from './components/BottomDock';
import { Helmet } from "react-helmet"; // Added for better SEO meta tags

function App() {
  const [scrolled, setScrolled] = useState(false);
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorEnlarged, setCursorEnlarged] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  // Handle cursor movement
  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    if (!cursor || !cursorDot) return;

    // Only apply custom cursor on non-touch devices
    const isTouchDevice = () => {
      return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
    };

    if (isTouchDevice()) {
      cursor.style.display = 'none';
      cursorDot.style.display = 'none';
      return;
    }

    const moveCursor = (e) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;
      
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const handleMouseEnter = () => {
      setCursorVisible(true);
    };

    const handleMouseLeave = () => {
      setCursorVisible(false);
    };

    // Add link hover listeners to all interactive elements
    const addLinkHoverListeners = () => {
      document.querySelectorAll('a, button, .tech-card, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Add link hover listeners after component mounts
    addLinkHoverListeners();

    // Update listeners when new elements are added (e.g., after dynamic content loads)
    const observer = new MutationObserver(() => {
      addLinkHoverListeners();
    });
    
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  // Handle page scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const achievements = [
    {
      icon: Briefcase,
      count: '4+',
      label: 'Projects Completed',
      color: 'blue'
    },
    {
      icon: Users,
      count: '3+',
      label: 'Happy Clients',
      color: 'green'
    },
    {
      icon: Coffee,
      count: '2+',
      label: 'Years Experience',
      color: 'yellow'
    }
  ];

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Muhammed Nihal",
    "jobTitle": "Full-Stack Developer & DevOps Engineer",
    "url": "https://www.muhammednihal.com", // Replace with your actual domain
    "sameAs": [
      "https://github.com/muhdnihalcy",
      "https://www.linkedin.com/in/nihalcy/"
    ],
    "skills": ["Backend Development", "DevOps", "Database Management", "System Architecture"]
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-['Inter']">
      {/* Custom Cursor */}
      <div 
        ref={cursorRef} 
        className="custom-cursor" 
        style={{
          opacity: cursorVisible ? 1 : 0,
          transform: 'translate3d(-100px, -100px, 0)',
          pointerEvents: 'none',
          position: 'fixed',
          width: linkHovered ? '50px' : '30px',
          height: linkHovered ? '50px' : '30px',
          borderRadius: '50%',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          transition: 'opacity 0.2s ease, width 0.3s ease, height 0.3s ease, background 0.3s ease',
          zIndex: 9999,
          mixBlendMode: 'difference',
          background: linkHovered ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          backdropFilter: 'blur(1px)',
        }}
      />
      <div 
        ref={cursorDotRef} 
        className="cursor-dot" 
        style={{
          opacity: cursorVisible ? 1 : 0,
          transform: 'translate3d(-100px, -100px, 0)',
          pointerEvents: 'none',
          position: 'fixed',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: 'white',
          zIndex: 10000,
          transition: 'opacity 0.2s ease',
        }}
      />

      <Helmet>
        <title>Muhammed Nihal | Full-Stack Developer & DevOps Engineer</title>
        <meta name="description" content="Experienced Full-Stack Developer & DevOps Engineer specializing in scalable systems, backend development, and cloud architecture with 2+ years of professional experience." />
        <meta name="keywords" content="Full-Stack Developer, DevOps Engineer, Backend Development, Node.js, Docker, AWS, Kubernetes, Cloud Architecture" />
        <meta name="author" content="Muhammed Nihal" />
        <meta property="og:title" content="Muhammed Nihal | Full-Stack Developer & DevOps Engineer" />
        <meta property="og:description" content="Portfolio of Muhammed Nihal - Full-Stack Developer & DevOps Engineer with expertise in cloud-native applications and infrastructure automation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.muhammednihal.com" /> {/* Replace with your actual domain */}
        <meta property="og:image" content="https://www.muhammednihal.com/profile-image.jpg" /> {/* Replace with actual image URL */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Muhammed Nihal | Full-Stack Developer" />
        <meta name="twitter:description" content="Experienced Full-Stack Developer & DevOps Engineer specializing in scalable systems and cloud architecture." />
        <meta name="twitter:image" content="https://www.muhammednihal.com/profile-image.jpg" /> {/* Replace with actual image URL */}
        <link rel="canonical" href="https://www.muhammednihal.com" /> {/* Replace with your domain */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <style>
          {`
            /* Hide default cursor */
            html, body {
              cursor: none !important;
            }
            
            a, button, .tech-card, [role="button"] {
              cursor: none !important;
            }

            /* Disable custom cursor on mobile */
            @media (max-width: 768px) {
              .custom-cursor, .cursor-dot {
                display: none !important;
              }
              html, body, a, button {
                cursor: auto !important;
              }
            }
          `}
        </style>
      </Helmet>

      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative hero-gradient overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '-2s' }}></div>
        </div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-gray-800/50 text-gray-300 mb-6 backdrop-blur-sm border border-gray-700/50">
              Welcome
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 gradient-text tracking-tight">
              Muhammed Nihal
            </h1>
            <h2 className="text-3xl md:text-4xl mb-6 text-gray-300 font-light">
              Full-Stack Developer & DevOps Engineer
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Crafting scalable systems and elegant solutions that drive innovation and performance in the digital realm.
            </p>
            <div className="flex gap-6 justify-center">
              <a
                href="#projects"
                className="group bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-medium transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 flex items-center gap-2"
                aria-label="View my projects"
              >
                Explore My Work
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl font-medium transition-all hover:scale-105 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600"
                aria-label="Contact me"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center gradient-text">About Me</h2>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl filter blur-3xl transition-all duration-500 group-hover:scale-105"></div>
                <img
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="Muhammed Nihal's Developer Workspace showing a modern setup with multiple monitors and development tools"
                  className="rounded-3xl shadow-2xl relative z-10 transition-all duration-500 group-hover:scale-105"
                  width="800"
                  height="600"
                  loading="lazy"
                />
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-200">Passionate Full-Stack Developer</h3>
                  <p className="text-gray-400 leading-relaxed">
                    With over 2 years of experience in software development, I've cultivated a deep passion for building
                    robust backend systems and optimizing deployment processes. My journey has taken me from writing
                    my first lines of code to architecting complex distributed systems used by millions.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-200">What I Do</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="tech-card group">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                          <Terminal size={20} aria-hidden="true" />
                        </div>
                        <span className="font-medium">Backend Dev</span>
                      </div>
                      <p className="text-sm text-gray-400">Building scalable APIs and microservices</p>
                    </div>
                    <div className="tech-card group">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                          <Cloud size={20} aria-hidden="true" />
                        </div>
                        <span className="font-medium">DevOps</span>
                      </div>
                      <p className="text-sm text-gray-400">Automating deployment workflows</p>
                    </div>
                    <div className="tech-card group">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-green-500/10 text-green-400 group-hover:scale-110 transition-transform">
                          <Database size={20} aria-hidden="true" />
                        </div>
                        <span className="font-medium">Databases</span>
                      </div>
                      <p className="text-sm text-gray-400">Optimizing data storage solutions</p>
                    </div>
                    <div className="tech-card group">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-400 group-hover:scale-110 transition-transform">
                          <Server size={20} aria-hidden="true" />
                        </div>
                        <span className="font-medium">Architecture</span>
                      </div>
                      <p className="text-sm text-gray-400">Designing scalable systems</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <a
                    href="https://github.com/muhdnihalcy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-all hover:scale-110"
                    aria-label="GitHub Profile"
                  >
                    <Github size={24} aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nihalcy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-all hover:scale-110"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={24} aria-hidden="true" />
                  </a>
                  <a
                    href="mailto:mnihalcy@gmail.com"
                    className="text-gray-400 hover:text-white transition-all hover:scale-110"
                    aria-label="Email Contact"
                  >
                    <Mail size={24} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="tech-card group text-center">
                  <div className={`inline-flex p-3 rounded-xl bg-${achievement.color}-500/10 text-${achievement.color}-400 border border-${achievement.color}-500/20 group-hover:scale-110 transition-transform mb-4`}>
                    <achievement.icon size={24} aria-hidden="true" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{achievement.count}</div>
                  <div className="text-gray-400">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center gradient-text">Tech Stack & Skills</h2>
          <TechStack />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center gradient-text">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Cloud-Native Chat Platform"
              description="Real-time chat application built with WebSocket technology and deployed on AWS using containerization and auto-scaling."
              tech={['Node.js', 'WebSocket', 'Docker', 'AWS']}
              image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              link="https://github.com"
              alt="Cloud-Native Chat Platform screenshot showing the application interface with real-time messaging capabilities"
            />
            <ProjectCard
              title="Automated CI/CD Pipeline"
              description="Implemented a fully automated deployment pipeline using Jenkins and Kubernetes, reducing deployment time by 70%."
              tech={['Jenkins', 'Kubernetes', 'Docker', 'AWS EKS']}
              image="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              link="https://github.com"
              alt="CI/CD Pipeline architecture diagram showing automated workflow from code commit to production deployment"
            />
            <ProjectCard
              title="Infrastructure as Code"
              description="Developed a comprehensive IaC solution using Terraform to manage multi-environment cloud infrastructure."
              tech={['Terraform', 'AWS', 'Python', 'GitOps']}
              image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              link="https://github.com"
              alt="Infrastructure as Code project visualization showing cloud resource management through code"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-center gradient-text">Get in Touch</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto text-lg">
            I'm always excited to connect with fellow developers, discuss new projects, or explore opportunities to create something amazing together.
          </p>
          <div className="max-w-2xl mx-auto">
            <ContactDetails />
          </div>
        </div>
      </section>

      <DockNavigation />

      {/* Footer */}
      <footer className="py-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-gray-900"></div>
        <div className="container mx-auto px-4 text-center text-gray-400 relative z-10">
          <p>© {new Date().getFullYear()} Muhammed Nihal C Y. All rights reserved.</p>
          <div className="mt-4">
            <a href="/sitemap.xml" className="text-gray-500 hover:text-gray-300 text-sm mx-2">Sitemap</a>
            <a href="/privacy-policy" className="text-gray-500 hover:text-gray-300 text-sm mx-2">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;