import React from 'react';

const Footer = () => (
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
);

export default Footer; 