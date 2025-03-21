import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, image, link }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    card.addEventListener('mousemove', handleMouseMove);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={cardRef} className="project-card group">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-56 object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        {link && (
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 bg-gray-900/80 p-2 rounded-xl hover:bg-gray-900 transition-all hover:scale-110"
          >
            <ExternalLink size={20} />
          </a>
        )}
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-semibold mb-4 gradient-text">{title}</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="px-4 py-1.5 bg-gray-800/50 text-sm rounded-lg text-gray-300 border border-gray-700/50"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;