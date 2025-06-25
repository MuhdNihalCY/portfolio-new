import React from 'react';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center relative hero-gradient overflow-hidden">
    <div className="absolute inset-0 w-full h-full">
      <div className="absolute top-20 left-10 w-64 h-64 bg-teal-400/20 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-yellow-400/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '-2s' }}></div>
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
            className="group bg-gradient-to-r from-teal-400 to-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-medium transition-all hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20 flex items-center gap-2"
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
);

export default HeroSection; 