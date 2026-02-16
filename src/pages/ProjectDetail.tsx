import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, Award, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState(projectsData.find(p => p.id === id));
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setProject(projectsData.find(p => p.id === id));
  }, [id]);
  
  if (!project) {
    return (
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="mb-6">The project you're looking for doesn't exist or has been removed.</p>
            <Link to="/projects" className="text-neon-green hover:underline">
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'business':
        return 'bg-blue-500';
      case 'project':
        return 'bg-green-500';
      case 'certification':
        return 'bg-neon-purple';
      default:
        return 'bg-dark-800';
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Link to="/projects" className="inline-flex items-center text-gray-400 hover:text-neon-green mb-6">
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Link>
          
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-6">
              <div className={`inline-block ${getTypeColor(project.type)} text-white text-xs font-semibold px-2 py-1 rounded mb-2`}>
                {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h1>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-3">
              <div className="bg-dark-800 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Overview</h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-gray-300">{project.fullDescription}</p>
              </div>
              
              {project.details && (
                <div className="bg-dark-800 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4">Details</h2>
                  {project.details.map((detail, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <h3 className="text-lg font-medium text-neon-green mb-2">{detail.title}</h3>
                      <p className="text-gray-300">{detail.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="md:col-span-1">
              <div className="bg-dark-800 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Information</h3>
                
                <div className="mb-4">
                  <div className="flex items-center text-gray-400 mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">Date</span>
                  </div>
                  <p className="text-white">{project.date}</p>
                </div>
                
                {project.client && (
                  <div className="mb-4">
                    <div className="flex items-center text-gray-400 mb-2">
                      <Award size={16} className="mr-2" />
                      <span className="text-sm">Client/Issuer</span>
                    </div>
                    <p className="text-white">{project.client}</p>
                  </div>
                )}
                
                {project.link && (
                  <div className="mb-4">
                    <div className="flex items-center text-gray-400 mb-2">
                      <ExternalLink size={16} className="mr-2" />
                      <span className="text-sm">External Link</span>
                    </div>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neon-blue hover:underline"
                    >
                      View Resource
                    </a>
                  </div>
                )}
              </div>
              
              <div className="bg-dark-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-dark-700 text-gray-300 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;