import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ExternalLinkCardProps {
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
}

const ExternalLinkCard: React.FC<ExternalLinkCardProps> = ({
  title,
  description,
  url,
  icon
}) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5 }}
      className="block bg-dark-800 border border-gray-700 rounded-lg p-6 transition-all duration-300 hover:neon-border"
    >
      <div className="flex items-start">
        <div className="text-neon-green mr-4">
          {icon}
        </div>
        <div>
          <div className="flex items-center">
            <h3 className="text-lg font-semibold text-white mr-2">{title}</h3>
            <ExternalLink size={14} className="text-gray-400" />
          </div>
          <p className="text-gray-400 text-sm mt-2">{description}</p>
        </div>
      </div>
    </motion.a>
  );
};

export default ExternalLinkCard;