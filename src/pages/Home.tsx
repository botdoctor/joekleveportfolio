import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cloud, Terminal, Code, ArrowRight } from 'lucide-react';
import TypingEffect from '../components/TypingEffect';
import TerminalWindow from '../components/TerminalWindow';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 z-10"
        >
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-navy">Joe Kleve</span>
            </h1>
            <div className="text-xl md:text-2xl text-tech-blue mb-6 h-12">
              <TypingEffect
                sequences={[
                  'Cloud Engineer',
                  1000,
                  'Linux Administrator',
                  1000,
                  'AWS Solutions Architect',
                  1000,
                  'DevOps Engineer',
                  1000,
                ]}
                className="font-sans"
              />
            </div>

            <TerminalWindow className="mb-8">
              <p className="mb-2">$ whoami</p>
              <p className="mb-2">Joe Kleve - Cloud engineer with expertise in AWS, Linux administration, and infrastructure automation.</p>
              <p className="mb-2">$ skills --top</p>
              <p className="mb-2">['AWS', 'Linux', 'Terraform', 'Docker', 'CI/CD']</p>
              <p>$ _</p>
            </TerminalWindow>

            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="bg-tech-blue text-white px-6 py-3 rounded-md hover:bg-tech-blue-light transition-colors duration-300 font-medium">
                Learn More
              </Link>
              <Link to="/projects" className="bg-white border border-tech-blue text-tech-blue px-6 py-3 rounded-md hover:bg-blue-50 transition-colors duration-300 font-medium">
                View Projects
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-warm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-navy">Areas of Expertise</h2>
            <div className="w-20 h-1 bg-tech-blue mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
            >
              <Cloud className="text-tech-blue mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3 text-navy">Cloud Infrastructure</h3>
              <p className="text-gray-500">
                Designing and deploying scalable cloud architectures on AWS, including VPC networking, EC2, S3, Lambda, and multi-region deployments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
            >
              <Terminal className="text-aws-orange mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3 text-navy">Linux Systems</h3>
              <p className="text-gray-500">
                Expert Linux administration including system hardening, performance tuning, shell scripting, and managing production server environments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
            >
              <Code className="text-tech-blue mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3 text-navy">DevOps & Automation</h3>
              <p className="text-gray-500">
                Building CI/CD pipelines, infrastructure as code with Terraform, containerization with Docker, and automated deployment workflows.
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link to="/projects" className="inline-flex items-center text-tech-blue hover:underline font-medium">
              View My Projects <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
