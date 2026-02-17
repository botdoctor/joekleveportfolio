import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Terminal, Code, Server, GitBranch, Activity } from 'lucide-react';
import SkillBar from '../components/SkillBar';

const TechStack: React.FC = () => {
  const categories = [
    {
      name: 'Cloud Platforms',
      icon: <Cloud size={24} className="text-tech-blue" />,
      skills: [
        { name: 'AWS', level: 90 },
        { name: 'Azure', level: 75 },
        { name: 'Cloudflare', level: 80 },
      ],
    },
    {
      name: 'Linux & Systems',
      icon: <Terminal size={24} className="text-aws-orange" />,
      skills: [
        { name: 'Ubuntu/Debian', level: 95 },
        { name: 'RHEL/CentOS', level: 85 },
        { name: 'Bash Scripting', level: 90 },
        { name: 'systemd/Networking', level: 85 },
      ],
    },
    {
      name: 'Infrastructure as Code',
      icon: <Code size={24} className="text-tech-blue" />,
      skills: [
        { name: 'Terraform', level: 90 },
        { name: 'CloudFormation', level: 85 },
        { name: 'Ansible', level: 80 },
        { name: 'Packer', level: 75 },
      ],
    },
    {
      name: 'AWS Services',
      icon: <Server size={24} className="text-aws-orange" />,
      skills: [
        { name: 'EC2/VPC/IAM', level: 90 },
        { name: 'S3/CloudFront', level: 90 },
        { name: 'Lambda/API Gateway', level: 85 },
        { name: 'RDS/DynamoDB', level: 80 },
      ],
    },
    {
      name: 'Automation & Containers',
      icon: <GitBranch size={24} className="text-tech-blue" />,
      skills: [
        { name: 'Docker', level: 90 },
        { name: 'GitHub Actions', level: 80 },
        { name: 'Bash Scripting', level: 85 },
        { name: 'Python Automation', level: 85 },
      ],
    },
    {
      name: 'Monitoring & Observability',
      icon: <Activity size={24} className="text-aws-orange" />,
      skills: [
        { name: 'CloudWatch', level: 85 },
        { name: 'Prometheus/Grafana', level: 80 },
        { name: 'ELK Stack', level: 75 },
        { name: 'Datadog', level: 70 },
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-navy">Tech Stack</h1>
          <p className="text-gray-600 mb-12">
            My toolkit spans cloud platforms, Linux administration, infrastructure as code, and DevOps practices for building and managing scalable cloud environments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm"
              >
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h2 className="text-xl font-semibold ml-3 text-navy">{category.name}</h2>
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
            className="mt-12 bg-white rounded-lg p-6 border border-gray-200 shadow-sm"
          >
            <h2 className="text-xl font-semibold mb-6 text-navy">Tools & Technologies</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                'AWS CLI', 'Terraform', 'Ansible', 'Docker',
                'Git', 'GitHub Actions', 'Docker Compose', 'Vite',
                'Nginx', 'Apache', 'HAProxy', 'Let\'s Encrypt',
                'Prometheus', 'Grafana', 'CloudWatch', 'Datadog',
                'Vim', 'tmux', 'SSH', 'Vagrant',
                'Python', 'Bash', 'YAML', 'JSON'
              ].map((tool, index) => (
                <div
                  key={index}
                  className="bg-gray-50 text-gray-700 px-3 py-2 rounded text-center text-sm hover:bg-blue-50 hover:text-tech-blue transition-colors border border-gray-100"
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
