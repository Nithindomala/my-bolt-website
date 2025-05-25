import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { socialLinks } from '../data/data';
import { Github, Linkedin, Mail, Phone, SendHorizonal } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github className="h-6 w-6" />;
      case 'linkedin':
        return <Linkedin className="h-6 w-6" />;
      case 'mail':
        return <Mail className="h-6 w-6" />;
      case 'phone':
        return <Phone className="h-6 w-6" />;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Contact Me" 
          subtitle="Let's connect and discuss how I can contribute to your data needs"
        />
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <ul className="space-y-4">
                {socialLinks.map((link) => (
                  <li key={link.id}>
                    <a 
                      href={link.url}
                      target={link.name !== 'Email' && link.name !== 'Phone' ? '_blank' : undefined}
                      rel={link.name !== 'Email' && link.name !== 'Phone' ? 'noopener noreferrer' : undefined}
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400 transition-colors duration-200"
                    >
                      <span className="bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full mr-4">
                        {getIcon(link.icon)}
                      </span>
                      <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400 block">
                          {link.name}
                        </span>
                        <span className="font-medium">
                          {link.name === 'Email' ? 'nithindomala7@gmail.com' : 
                          link.name === 'Phone' ? '9390316274' :
                          link.name === 'LinkedIn' ? 'nithin-domala' :
                          link.name === 'GitHub' ? 'Nithindomala' : ''}
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 bg-indigo-700 hover:bg-indigo-800 text-white font-medium rounded-md shadow-md transition-all duration-200"
                  >
                    <span className="mr-2">Send Message</span>
                    <SendHorizonal className="h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;