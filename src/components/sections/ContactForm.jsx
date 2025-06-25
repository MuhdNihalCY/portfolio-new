import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const ContactDetails = () => {
  return (
    <div className="tech-card">
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-gray-200 mb-4">Let's Connect</h3>
          <p className="text-gray-400">
            Feel free to reach out through any of the channels below. I'm always open to discussing new projects, opportunities, or just having a chat about technology.
          </p>
        </div>
        
        <div className="grid gap-6">
          <div className="flex items-center gap-4 p-4 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:border-gray-600 transition-all">
            <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg">
              <Mail size={24} />
            </div>
            <div>
              <h4 className="font-medium text-gray-300">Email</h4>
              <a href="mailto:mnihalcy@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                mnihalcy@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:border-gray-600 transition-all">
            <div className="p-3 bg-purple-500/10 text-purple-400 rounded-lg">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="font-medium text-gray-300">Phone</h4>
              <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors">
                +91 98765 43210
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:border-gray-600 transition-all">
            <div className="p-3 bg-green-500/10 text-green-400 rounded-lg">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="font-medium text-gray-300">Location</h4>
              <p className="text-gray-400">
                Kerala, India
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <h4 className="text-center text-gray-300 mb-6">Find me on social media</h4>
          <div className="flex justify-center gap-8">
            <a 
              href="https://github.com/muhdnihalcy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-gray-800/70 text-gray-400 rounded-xl hover:text-white hover:bg-gray-700 transition-all hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/nihalcy/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-gray-800/70 text-gray-400 rounded-xl hover:text-white hover:bg-gray-700 transition-all hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:mnihalcy@gmail.com" 
              className="p-3 bg-gray-800/70 text-gray-400 rounded-xl hover:text-white hover:bg-gray-700 transition-all hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;