import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { education, certifications } from '../data/data';
import { GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Education & Certifications" 
          subtitle="My academic background and professional certifications"
        />
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-8">
              <GraduationCap className="h-8 w-8 text-indigo-700 dark:text-indigo-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>
            
            {education.map((item) => (
              <div key={item.id} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.degree}
                </h4>
                <p className="text-indigo-700 dark:text-indigo-400 font-medium mb-2">
                  {item.institution}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.period}
                </p>
              </div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-8">
              <Award className="h-8 w-8 text-indigo-700 dark:text-indigo-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h3>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <ul className="space-y-4">
                {certifications.map((cert) => (
                  <li key={cert.id} className="pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Issuer: {cert.issuer}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;