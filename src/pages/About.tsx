import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Award, Code, Server, Terminal, GitBranch } from 'lucide-react';
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-navy">About Me</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <img
                  src="https://bendersec.xyz/webspin/unnamed.jpg"
                  alt="Joe Kleve"
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-navy mb-2">Joe Kleve</h2>
                  <p className="text-gray-500 text-sm">Cloud Engineer & AWS Solutions Architect</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <TerminalWindow title="about.sh" className="mb-6">
                <p className="mb-2">$ cat joe_kleve.profile</p>
                <p className="mb-4">
                  Cloud engineer specializing in AWS infrastructure, Linux administration, and DevOps automation. Building reliable, scalable systems since age 14.
                </p>
                <p className="mb-2">$ experience --summary</p>
                <p className="mb-4">Cloud architecture | Linux admin | Infrastructure as Code | CI/CD pipelines</p>
                <p className="mb-2">$ cat mission.txt</p>
                <p>To build resilient, automated cloud infrastructure that scales with business needs and follows best practices for security and cost optimization.</p>
              </TerminalWindow>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-navy">My Journey</h3>
                <p className="text-gray-600 mb-4">
                  My fascination with technology began at age 14 when I built my first computer from spare parts. What started as curiosity quickly evolved into a passion for understanding how systems work and how to make them better.
                </p>
                <p className="text-gray-600 mb-4">
                  Over the years, I've developed deep expertise in cloud architecture, Linux administration, and DevOps practices. I specialize in designing and deploying AWS infrastructure using infrastructure as code principles with Terraform and CloudFormation.
                </p>
                <p className="text-gray-600">
                  Today, I focus on building scalable, secure cloud environments and automating infrastructure workflows. My approach combines hands-on Linux expertise with modern cloud-native practices to deliver reliable, cost-effective solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-navy">Core Competencies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
              >
                <Cloud className="text-tech-blue mr-4 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-navy">Cloud Architecture</h3>
                  <p className="text-gray-500 text-sm">
                    Designing scalable AWS architectures with VPC, EC2, S3, RDS, Lambda, and other services following Well-Architected Framework principles.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
              >
                <Terminal className="text-aws-orange mr-4 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-navy">Linux Administration</h3>
                  <p className="text-gray-500 text-sm">
                    Managing production Linux environments, system hardening, performance tuning, and shell scripting for automation.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
              >
                <Code className="text-tech-blue mr-4 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-navy">Infrastructure as Code</h3>
                  <p className="text-gray-500 text-sm">
                    Building reproducible infrastructure with Terraform, CloudFormation, and Ansible for consistent, version-controlled deployments.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
              >
                <GitBranch className="text-aws-orange mr-4 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-navy">DevOps & CI/CD</h3>
                  <p className="text-gray-500 text-sm">
                    Building automated pipelines with GitHub Actions, Jenkins, and AWS CodePipeline for continuous integration and deployment.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-navy">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
                >
                  <div className="flex items-start">
                    <Award className="text-aws-orange mr-4 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-navy">{cert.title}</h3>
                      <p className="text-gray-500 text-sm mb-2">{cert.description}</p>
                      <div className="flex items-center text-sm text-gray-400">
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
