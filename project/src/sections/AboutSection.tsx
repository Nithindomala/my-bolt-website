import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';
import EditButton from '../components/EditButton';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-[#f5f5f5] dark:from-gray-800 dark:to-gray-900 relative">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="About Me" 
          subtitle="Learn more about my background and what drives me"
        />
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I am a driven and detail-oriented aspiring Data Analyst with a passion for transforming complex data into actionable insights. My journey in data analysis has equipped me with strong analytical skills and the ability to extract meaningful patterns from datasets.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Through my internship experiences at Excelerate, I've gained practical knowledge in project management and data visualization, where I've successfully analyzed campaign data and created insightful dashboards that drove measurable business improvements.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm proficient in Python, SQL, Power BI, Tableau, and Excel, with a particular interest in creating visualizations that tell compelling stories from data. I continuously strive to expand my knowledge and skills in the ever-evolving field of data analytics.
            </p>
          </motion.div>
        </div>
      </div>
      <EditButton section="about" />
    </section>
  );
};

export default AboutSection;