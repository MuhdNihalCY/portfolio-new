import React from 'react';
import ProjectCard from '../ui/ProjectCard.jsx';

const ProjectsSection = () => (
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
);

export default ProjectsSection; 