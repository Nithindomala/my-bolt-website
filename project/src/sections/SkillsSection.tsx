import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { skills } from '../data/data';
import { motion } from 'framer-motion';

const SkillsSection: React.FC = () => {
  // Group skills by category
  const dataSkills = skills.filter(skill => skill.category === 'data');
  const otherSkills = skills.filter(skill => skill.category === 'other');
  const languageSkills = skills.filter(skill => skill.category === 'language');

  const SkillBar = ({ name, level }: { name: string; level: number }) => {
    return (
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-gray-800 dark:text-gray-200 font-medium">{name}</span>
          <span className="text-gray-600 dark:text-gray-400 text-sm">{level * 20}%</span>
        </div>
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level * 20}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-indigo-700 dark:bg-indigo-500 rounded-full"
          ></motion.div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Skills" 
          subtitle="My technical proficiencies and tools I work with"
        />
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="inline-block w-3 h-3 bg-indigo-700 dark:bg-indigo-500 rounded-full mr-3"></span>
                Data Skills
              </h3>
              
              <div className="space-y-4">
                {dataSkills.map(skill => (
                  <SkillBar key={skill.id} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="inline-block w-3 h-3 bg-teal-600 dark:bg-teal-500 rounded-full mr-3"></span>
                Other Tools
              </h3>
              
              <div className="space-y-4">
                {otherSkills.map(skill => (
                  <SkillBar key={skill.id} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md md:col-span-2 lg:col-span-1"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="inline-block w-3 h-3 bg-purple-600 dark:bg-purple-500 rounded-full mr-3"></span>
                Languages
              </h3>
              
              <div className="space-y-4">
                {languageSkills.map(skill => (
                  <SkillBar key={skill.id} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;