import React, { useEffect, useRef } from 'react';
import { Server, Cloud, Database, Code2, GitBranch, Globe, Lock, Cpu } from 'lucide-react';

const TechStack: React.FC = () => {
  const technologies = {
    backend: {
      title: 'Backend Development',
      description: 'Building robust and scalable server-side applications',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'Go', level: 75 },
      ],
      icon: Code2,
      color: 'blue'
    },
    devops: {
      title: 'DevOps & CI/CD',
      description: 'Automating deployment and infrastructure management',
      skills: [
        { name: 'Docker', level: 95 },
        { name: 'Kubernetes', level: 85 },
        { name: 'Jenkins', level: 90 },
        { name: 'GitLab CI', level: 85 },
      ],
      icon: Server,
      color: 'purple'
    },
    cloud: {
      title: 'Cloud Architecture',
      description: 'Designing and implementing cloud-native solutions',
      skills: [
        { name: 'AWS', level: 90 },
        { name: 'Azure', level: 85 },
        { name: 'GCP', level: 80 },
        { name: 'Terraform', level: 85 },
      ],
      icon: Cloud,
      color: 'green'
    },
    databases: {
      title: 'Database Systems',
      description: 'Managing and optimizing data storage solutions',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'Elasticsearch', level: 75 },
      ],
      icon: Database,
      color: 'yellow'
    },
    security: {
      title: 'Security & DevSecOps',
      description: 'Implementing secure development practices',
      skills: [
        { name: 'OAuth/OIDC', level: 85 },
        { name: 'AWS Security', level: 90 },
        { name: 'Container Security', level: 85 },
        { name: 'Vault', level: 80 },
      ],
      icon: Lock,
      color: 'red'
    },
    architecture: {
      title: 'System Architecture',
      description: 'Designing scalable distributed systems',
      skills: [
        { name: 'Microservices', level: 90 },
        { name: 'Event-Driven', level: 85 },
        { name: 'API Design', level: 90 },
        { name: 'System Design', level: 85 },
      ],
      icon: Cpu,
      color: 'indigo'
    }
  };

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current.forEach(card => {
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
    });
  }, []);

  return (
    <div className="space-y-16">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h3 className="text-2xl font-semibold mb-4 text-gray-200">Professional Expertise</h3>
        <p className="text-gray-400 leading-relaxed">
          With extensive experience across the full development stack, I specialize in building
          scalable backend systems, implementing DevOps practices, and architecting cloud solutions.
          Here's a comprehensive overview of my technical expertise and the technologies I work with.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(technologies).map(([key, tech], index) => (
          <div 
            key={key}
            ref={el => cardRefs.current[index] = el} 
            className="tech-card group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-xl bg-${tech.color}-500/10 text-${tech.color}-400 border border-${tech.color}-500/20 group-hover:scale-110 transition-transform`}>
                <tech.icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{tech.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{tech.description}</p>
              </div>
            </div>
            <div className="space-y-4">
              {tech.skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-${tech.color}-500/50 rounded-full transition-all duration-500 group-hover:bg-${tech.color}-400/50`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-16">
        <div className="tech-card">
          <h3 className="text-2xl font-semibold mb-6 gradient-text">Additional Expertise</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="text-lg font-medium text-gray-200">Tools & Platforms</h4>
              <ul className="space-y-2 text-gray-400">
                <li>• Git & GitHub</li>
                <li>• VS Code</li>
                <li>• Postman</li>
                <li>• Jira & Confluence</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-medium text-gray-200">Methodologies</h4>
              <ul className="space-y-2 text-gray-400">
                <li>• Agile/Scrum</li>
                <li>• TDD/BDD</li>
                <li>• GitOps</li>
                <li>• DevSecOps</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-medium text-gray-200">Soft Skills</h4>
              <ul className="space-y-2 text-gray-400">
                <li>• Technical Leadership</li>
                <li>• Problem Solving</li>
                <li>• Team Collaboration</li>
                <li>• Communication</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;