import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  type: 'project' | 'certification' | 'business';
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  image,
  tags,
  type
}) => {
  const getTypeColor = (type: string) => {
    switch(type) {
      case 'business':
        return 'bg-tech-blue';
      case 'project':
        return 'bg-emerald-500';
      case 'certification':
        return 'bg-aws-orange';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="project-card group"
    >
      <Link to={`/projects/${id}`}>
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent"></div>
          <div className={`absolute top-2 right-2 text-xs text-white px-2 py-1 rounded ${getTypeColor(type)}`}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-navy mb-2">{title}</h3>
          <p className="text-gray-500 text-sm mb-3 line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex justify-end">
            <span className="text-tech-blue flex items-center text-sm group-hover:underline">
              View Details <ArrowRight size={14} className="ml-1" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
