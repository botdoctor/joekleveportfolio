import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Joe Kleve. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/joe-kleve-2192b1356/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-tech-blue transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/botdoctor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-tech-blue transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
