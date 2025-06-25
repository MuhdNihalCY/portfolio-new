import React from 'react';
import { Terminal, Cloud, Database, Server, Github, Linkedin, Mail } from 'lucide-react';
import Achievements from './Achievements.jsx';

const AboutSection = ({ achievements }) => (
  <section id="about" className="py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900"></div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center gradient-text">About Me</h2>
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-yellow-400/20 rounded-3xl filter blur-3xl transition-all duration-500 group-hover:scale-105"></div>
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
                    <div className="p-2 rounded-lg bg-teal-400/10 text-teal-400 group-hover:scale-110 transition-transform">
                      <Terminal size={20} aria-hidden="true" />
                    </div>
                    <span className="font-medium">Backend Dev</span>
                  </div>
                  <p className="text-sm text-gray-400">Building scalable APIs and microservices</p>
                </div>
                <div className="tech-card group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-yellow-400/10 text-yellow-400 group-hover:scale-110 transition-transform">
                      <Cloud size={20} aria-hidden="true" />
                    </div>
                    <span className="font-medium">DevOps</span>
                  </div>
                  <p className="text-sm text-gray-400">Automating deployment workflows</p>
                </div>
                <div className="tech-card group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-purple-400/10 text-purple-400 group-hover:scale-110 transition-transform">
                      <Database size={20} aria-hidden="true" />
                    </div>
                    <span className="font-medium">Databases</span>
                  </div>
                  <p className="text-sm text-gray-400">Optimizing data storage solutions</p>
                </div>
                <div className="tech-card group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-orange-400/10 text-orange-400 group-hover:scale-110 transition-transform">
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
        <Achievements achievements={achievements} />
      </div>
    </div>
  </section>
);

export default AboutSection; 