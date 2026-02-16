import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Server, Shield, Code, Database, Network } from 'lucide-react';
import SkillBar from '../components/SkillBar';

const TechStack: React.FC = () => {
  const categories = [
    {
      name: 'Operating Systems',
      icon: <Terminal size={24} className="text-neon-green" />,
      skills: [
        { name: 'Linux', level: 95 },
        { name: 'Windows', level: 85 },
        { name: 'macOS', level: 80 },
      ],
    },
    {
      name: 'Security Tools',
      icon: <Shield size={24} className="text-neon-blue" />,
      skills: [
        { name: 'Metasploit', level: 90 },
        { name: 'Burp Suite', level: 95 },
        { name: 'Wireshark', level: 85 },
        { name: 'Nmap', level: 90 },
        { name: 'Kali Linux', level: 95 },
      ],
    },
    {
      name: 'Programming',
      icon: <Code size={24} className="text-neon-purple" />,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Bash', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'PowerShell', level: 75 },
      ],
    },
    {
      name: 'Networking',
      icon: <Network size={24} className="text-neon-green" />,
      skills: [
        { name: 'TCP/IP', level: 95 },
        { name: 'Firewalls', level: 90 },
        { name: 'VPNs', level: 85 },
        { name: 'Routers/Switches', level: 90 },
      ],
    },
    {
      name: 'Databases',
      icon: <Database size={24} className="text-neon-blue" />,
      skills: [
        { name: 'SQL', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'SQLite', level: 80 },
      ],
    },
    {
      name: 'Cloud & Virtualization',
      icon: <Server size={24} className="text-neon-purple" />,
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Docker', level: 85 },
        { name: 'VMware', level: 90 },
        { name: 'Azure', level: 75 },
      ],
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">Tech Stack</h1>
          <p className="text-gray-300 mb-12">
            My toolkit includes a wide range of technologies, frameworks, and methodologies that I leverage to provide comprehensive cybersecurity solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-800 rounded-lg p-6"
              >
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h2 className="text-xl font-semibold ml-3">{category.name}</h2>
                </div>
                
                <div>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skillIndex}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 bg-dark-800 rounded-lg p-6"
          >
            <h2 className="text-xl font-semibold mb-6">Tools & Technologies</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                'Nessus', 'OpenVAS', 'Snort', 'OSSEC', 'Hashcat', 
                'John the Ripper', 'Aircrack-ng', 'Hydra', 'Nikto',
                'OWASP ZAP', 'Maltego', 'Shodan', 'Splunk', 'ELK Stack',
                'Git', 'VSCode', 'Jupyter', 'Ansible', 'Terraform',
                'Cisco IOS', 'PfSense', 'OpenSSL', 'Suricata'
              ].map((tool, index) => (
                <div 
                  key={index}
                  className="bg-dark-700 text-gray-300 px-3 py-2 rounded text-center text-sm hover:bg-dark-600 transition-colors"
                >
                  {tool}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;