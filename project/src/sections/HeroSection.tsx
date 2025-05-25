import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { ChevronDown, Github, Linkedin, Mail, Phone, Upload } from 'lucide-react';
import { motion } from 'framer-motion';
import EditButton from '../components/EditButton';
import toast from 'react-hot-toast';

const HeroSection: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string>("https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5000000) {
        toast.error('Image size should be less than 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
        toast.success('Profile photo updated!');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-[#f5f5f5] to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative w-48 h-48 mx-auto mb-8">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full rounded-full object-cover shadow-xl"
            />
            <label className="absolute bottom-2 right-2 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
              <Upload className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Nithin Domala
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-indigo-700 dark:text-indigo-400">
            Aspiring Data Analyst | Skilled in Python, SQL, Power BI
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Driven and detail-oriented aspiring Data Analyst with hands-on internship experience.
            Skilled in transforming complex data into actionable insights.
          </p>
          
          <div className="flex justify-center space-x-4 mb-12">
            <a 
              href="https://github.com/Nithindomala" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 text-gray-700 hover:text-indigo-700 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/nithin-domala" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 text-gray-700 hover:text-indigo-700 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:nithindomala7@gmail.com" 
              className="p-3 text-gray-700 hover:text-indigo-700 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="tel:9390316274" 
              className="p-3 text-gray-700 hover:text-indigo-700 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              <Phone className="h-6 w-6" />
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-8 py-3 bg-indigo-700 hover:bg-indigo-800 text-white font-medium rounded-md shadow-md transition-all duration-200 cursor-pointer"
            >
              View Projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-8 py-3 bg-white dark:bg-gray-800 text-indigo-700 dark:text-indigo-400 font-medium rounded-md shadow-md border border-indigo-700 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all duration-200 cursor-pointer"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="animate-bounce p-2 rounded-full bg-white dark:bg-gray-800 text-indigo-700 dark:text-indigo-400 shadow-md cursor-pointer"
        >
          <ChevronDown className="h-6 w-6" />
        </Link>
      </div>
      
      <EditButton section="hero" />
    </section>
  );
};

export default HeroSection;