import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'project' | 'business' | 'certification'>('all');
  
  const filteredProjects = projectsData.filter(project => {
    if (filter === 'all') return true;
    return project.type === filter;
  });

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">Portfolio</h1>
              <p className="text-gray-400 mb-4 md:mb-0">
                Showcasing my work, businesses, and professional achievements
              </p>
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === 'all'
                    ? 'bg-neon-green text-dark-900'
                    : 'bg-dark-800 text-gray-300 hover:bg-dark-700'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('project')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === 'project'
                    ? 'bg-neon-green text-dark-900'
                    : 'bg-dark-800 text-gray-300 hover:bg-dark-700'
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => setFilter('business')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === 'business'
                    ? 'bg-neon-green text-dark-900'
                    : 'bg-dark-800 text-gray-300 hover:bg-dark-700'
                }`}
              >
                Businesses
              </button>
              <button
                onClick={() => setFilter('certification')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === 'certification'
                    ? 'bg-neon-green text-dark-900'
                    : 'bg-dark-800 text-gray-300 hover:bg-dark-700'
                }`}
              >
                Certifications
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                type={project.type}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;