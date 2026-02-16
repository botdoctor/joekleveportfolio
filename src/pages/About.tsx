import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Code, Network, Cpu, Server } from 'lucide-react';
import TerminalWindow from '../components/TerminalWindow';
import { projectsData } from '../data/projectsData';

const About: React.FC = () => {
  const certifications = projectsData.filter(project => project.type === 'certification');

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">About Me</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="bg-dark-800 rounded-lg overflow-hidden border border-gray-700">
                <img 
                  src="https://bendersec.xyz/webspin/unnamed.jpg" 
                  alt="Joe Kleve" 
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-neon-green mb-2">Joe Kleve</h2>
                  <p className="text-gray-400 text-sm">Cybersecurity & Networking Expert</p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <TerminalWindow title="about.sh" className="mb-6">
                <p className="mb-2">$ cat joe_kleve.profile</p>
                <p className="mb-4">
                  Cybersecurity specialist with a passion for ethical hacking, network security, and web application security. Started building computers at age 14 and never looked back.
                </p>
                <p className="mb-2">$ experience --years</p>
                <p className="mb-4">10+ years in cybersecurity and networking</p>
                <p className="mb-2">$ cat mission.txt</p>
                <p>To secure digital infrastructure and educate others about the importance of cybersecurity in an increasingly connected world.</p>
              </TerminalWindow>
              
              <div className="bg-dark-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-white">My Journey</h3>
                <p className="text-gray-300 mb-4">
                  My fascination with technology began at age 14 when I built my first computer from spare parts. What started as curiosity quickly evolved into a passion for understanding how systems work—and how they can be compromised.
                </p>
                <p className="text-gray-300 mb-4">
                  Over the years, I've developed skills in security, penetration testing, and networking. I believe in the importance of ethical hacking to identify vulnerabilities before malicious actors can exploit them.
                </p>
                <p className="text-gray-300">
                  Today, I work with organizations to strengthen their security posture through comprehensive assessments, training, and implementation of robust security measures. My approach combines technical expertise with an understanding of human factors in security.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white">Core Competencies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start p-4 bg-dark-800 rounded-lg border border-gray-700"
              >
                <Shield className="text-neon-green mr-4 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Penetration Testing</h3>
                  <p className="text-gray-400 text-sm">
                    Identifying vulnerabilities in systems, networks, and applications through simulated attacks.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start p-4 bg-dark-800 rounded-lg border border-gray-700"
              >
                <Network className="text-neon-blue mr-4 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Network Security</h3>
                  <p className="text-gray-400 text-sm">
                    Designing and implementing secure network architectures and monitoring solutions.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start p-4 bg-dark-800 rounded-lg border border-gray-700"
              >
                <Code className="text-neon-purple mr-4 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Web Application Security</h3>
                  <p className="text-gray-400 text-sm">
                    Securing web applications against OWASP Top 10 vulnerabilities and other attack vectors.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start p-4 bg-dark-800 rounded-lg border border-gray-700"
              >
                <Server className="text-neon-green mr-4 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Social Engineering</h3>
                  <p className="text-gray-400 text-sm">
                    Assessing and improving human-centric security through awareness training and simulated attacks.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-dark-800 p-6 rounded-lg border border-gray-700"
                >
                  <div className="flex items-start">
                    <Award className="text-neon-purple mr-4 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{cert.description}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{cert.date}</span>
                        {cert.client && (
                          <>
                            <span className="mx-2">•</span>
                            <span>{cert.client}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;