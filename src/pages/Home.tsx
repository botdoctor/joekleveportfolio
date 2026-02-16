import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Terminal, Code, ArrowRight } from 'lucide-react';
import TypingEffect from '../components/TypingEffect';
import TerminalWindow from '../components/TerminalWindow';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 to-dark-900 z-0"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 z-10"
        >
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-white">Joe Kleve</span>
            </h1>
            <div className="text-xl md:text-2xl text-neon-green mb-6 h-12">
              <TypingEffect
                sequences={[
                  'Cybersecurity Specialist',
                  1000,
                  'Ethical Hacker',
                  1000,
                  'Networking Expert',
                  1000,
                  'Web Security Analyst',
                  1000,
                ]}
                className="font-mono"
              />
            </div>
            
            <TerminalWindow className="mb-8">
              <p className="mb-2">$ whoami</p>
              <p className="mb-2">Joe Kleve - Security professional with expertise in network security, penetration testing, and web application security.</p>
              <p className="mb-2">$ skills --top</p>
              <p className="mb-2">['Ethical Hacking', 'Network Security', 'Web App Security', 'Social Engineering']</p>
              <p>$ _</p>
            </TerminalWindow>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="bg-dark-800 border border-neon-green text-neon-green px-6 py-3 rounded-md hover:bg-neon-green hover:text-dark-900 transition-colors duration-300">
                Learn More
              </Link>
              <Link to="/projects" className="bg-dark-800 border border-neon-blue text-neon-blue px-6 py-3 rounded-md hover:bg-neon-blue hover:text-dark-900 transition-colors duration-300">
                View Projects
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Areas of Expertise</h2>
            <div className="w-20 h-1 bg-neon-green mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-700 p-6 rounded-lg border border-gray-700"
            >
              <Shield className="text-neon-green mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">Cybersecurity</h3>
              <p className="text-gray-400">
                Comprehensive security assessments, vulnerability scanning, and threat modeling to protect your digital assets.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-dark-700 p-6 rounded-lg border border-gray-700"
            >
              <Terminal className="text-neon-blue mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">Ethical Hacking</h3>
              <p className="text-gray-400">
                Penetration testing and security audits to identify vulnerabilities before malicious actors can exploit them.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-dark-700 p-6 rounded-lg border border-gray-700"
            >
              <Code className="text-neon-purple mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">Web App Security</h3>
              <p className="text-gray-400">
                Specialized in securing web applications against OWASP Top 10 vulnerabilities and other common attack vectors.
              </p>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects" className="inline-flex items-center text-neon-green hover:underline">
              View My Projects <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;