import React from 'react';
import { Server, Cloud, Database, Code2, Lock, Cpu, Globe, Layout } from 'lucide-react';

const TechStack = () => {
  const departments = [
    {
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Svelte', 'jQuery', 'Bootstrap', 'Tailwind CSS'],
      icon: Layout,
      color: 'sky'
    },
    {
      title: 'Backend Development',
      description: 'Building robust and scalable server-side applications',
      technologies: ['Node.js', 'Express.js'],
      icon: Code2,
      color: 'blue'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automating deployment and infrastructure management',
      technologies: ['Docker', 'GitLab CI'],
      icon: Server,
      color: 'purple'
    },
    {
      title: 'Cloud Architecture',
      description: 'Designing and implementing cloud-native solutions',
      technologies: ['AWS', 'Digital Ocean', 'Azure'],
      icon: Cloud,
      color: 'emerald'
    },
    {
      title: 'Database Systems',
      description: 'Managing and optimizing data storage solutions',
      technologies: ['MongoDB','MySql', 'S3'],
      icon: Database,
      color: 'amber'
    },
    {
      title: 'Security & DevSecOps',
      description: 'Implementing secure development practices',
      technologies: ['OAuth/OIDC', 'AWS Security', 'Container Security', 'Vault'],
      icon: Lock,
      color: 'rose'
    },
    {
      title: 'System Architecture',
      description: 'Designing scalable distributed systems',
      technologies: ['Microservices', 'Event-Driven', 'API Design', 'System Design'],
      icon: Cpu,
      color: 'indigo'
    }
  ];

  const additionalTech = {
    'Tools & Platforms': ['Git & GitHub', 'VS Code', 'Postman'],
    'Methodologies': ['Agile/Scrum', 'TDD', 'GitOps', 'DevSecOps'],
    'Soft Skills': ['Technical Leadership', 'Problem Solving', 'Team Collaboration', 'Communication']
  };

  // Helper function to get Tailwind class for each color
  const getColorClass = (color, type) => {
    const colorMap = {
      background: {
        sky: 'bg-sky-500/10',
        blue: 'bg-blue-500/10',
        purple: 'bg-purple-500/10',
        emerald: 'bg-emerald-500/10',
        amber: 'bg-amber-500/10', 
        rose: 'bg-rose-500/10',
        indigo: 'bg-indigo-500/10'
      },
      text: {
        sky: 'text-sky-400',
        blue: 'text-blue-400',
        purple: 'text-purple-400',
        emerald: 'text-emerald-400',
        amber: 'text-amber-400',
        rose: 'text-rose-400',
        indigo: 'text-indigo-400'
      },
      border: {
        sky: 'border-sky-500/20',
        blue: 'border-blue-500/20',
        purple: 'border-purple-500/20',
        emerald: 'border-emerald-500/20',
        amber: 'border-amber-500/20',
        rose: 'border-rose-500/20',
        indigo: 'border-indigo-500/20'
      },
      dot: {
        sky: 'bg-sky-400',
        blue: 'bg-blue-400',
        purple: 'bg-purple-400',
        emerald: 'bg-emerald-400',
        amber: 'bg-amber-400',
        rose: 'bg-rose-400',
        indigo: 'bg-indigo-400'
      }
    };
    
    return colorMap[type][color];
  };

  return (
    <div className="space-y-16">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h3 className="text-2xl font-semibold mb-4 text-gray-200">Professional Expertise</h3>
        <p className="text-gray-400 leading-relaxed">
          With extensive experience across the full development stack, I specialize in building
          scalable systems, implementing DevOps practices, and creating responsive user interfaces.
          Here's an overview of my technical expertise by department.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {departments.map((dept, index) => (
          <div 
            key={index}
            className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-gray-500 transition-all shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-xl ${getColorClass(dept.color, 'background')} ${getColorClass(dept.color, 'text')} border ${getColorClass(dept.color, 'border')}`}>
                <dept.icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-200">{dept.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{dept.description}</p>
              </div>
            </div>
            <div className="mt-4">
              <ul className="grid grid-cols-2 gap-3">
                {dept.technologies.map((tech, i) => (
                  <li key={i} className="flex items-center">
                    <span className={`w-2 h-2 rounded-full ${getColorClass(dept.color, 'dot')} mr-2`}></span>
                    <span className="text-gray-300">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-gray-500 transition-all shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-gray-200">Additional Expertise</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(additionalTech).map(([category, items], index) => (
              <div key={index} className="space-y-2">
                <h4 className="text-lg font-medium text-gray-200">{category}</h4>
                <ul className="space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className="text-gray-400 flex items-center">
                      <span className="w-1 h-1 rounded-full bg-blue-400 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;