import React from 'react';
import ContactDetails from './ContactForm.jsx';

const ContactSection = () => (
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
);

export default ContactSection; 