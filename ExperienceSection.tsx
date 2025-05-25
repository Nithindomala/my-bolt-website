import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { experiences } from '../data/data';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Experience" 
          subtitle="My professional journey and internships"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-indigo-700 dark:border-indigo-500 ml-6 md:ml-0 md:mx-auto pl-6 md:pl-0">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12 md:grid md:grid-cols-5 md:gap-8 relative"
              >
                <div className="absolute -left-4 md:left-auto md:right-auto md:mx-auto top-0 md:relative md:col-span-2 flex justify-end items-start">
                  <div className="bg-indigo-700 dark:bg-indigo-500 text-white p-2 rounded-full absolute -left-7 md:static shadow-md">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div className="hidden md:block text-right pr-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {experience.title}
                    </h3>
                    <p className="text-indigo-700 dark:text-indigo-400 font-medium">
                      {experience.company}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {experience.period}
                    </p>
                  </div>
                </div>
                
                <div className="md:col-span-3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="md:hidden mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {experience.title}
                    </h3>
                    <p className="text-indigo-700 dark:text-indigo-400 font-medium">
                      {experience.company}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {experience.period}
                    </p>
                  </div>
                  
                  <ul className="space-y-2">
                    {experience.description.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-block h-2 w-2 rounded-full bg-indigo-700 dark:bg-indigo-500 mt-2 mr-3"></span>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;