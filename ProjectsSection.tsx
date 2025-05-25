import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/data';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';
import EditButton from '../components/EditButton';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#f5f5f5] to-white dark:from-gray-900 dark:to-gray-800 relative">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Projects" 
          subtitle="Showcasing my data analysis work and applications"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 text-sm font-medium rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-end">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-700 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300 font-medium transition-colors duration-200"
                  >
                    <span className="mr-2">View Project</span>
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <EditButton section="projects" />
    </section>
  );
};

export default ProjectsSection;