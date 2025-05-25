import React from 'react';
import { socialLinks } from '../data/data';
import { Github, Linkedin, Mail, Phone, BarChart2 } from 'lucide-react';

const Footer: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      case 'mail':
        return <Mail className="h-5 w-5" />;
      case 'phone':
        return <Phone className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-6">
            <BarChart2 className="h-8 w-8 text-indigo-400 mr-2" />
            <span className="text-2xl font-bold">Nithin Domala</span>
          </div>
          
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target={link.name !== 'Email' && link.name !== 'Phone' ? '_blank' : undefined}
                rel={link.name !== 'Email' && link.name !== 'Phone' ? 'noopener noreferrer' : undefined}
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                aria-label={link.name}
              >
                {getIcon(link.icon)}
              </a>
            ))}
          </div>
          
          <div className="text-center text-gray-400 text-sm">
            <p className="mb-2">Hyderabad, Telangana, India</p>
            <p>&copy; {new Date().getFullYear()} Nithin Domala. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;