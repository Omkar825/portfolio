import React from 'react';
import SocialIcons from './SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Omkara Anjaneya Kumar</h3>
            <p className="text-gray-400 max-w-md">
              "Passionate about innovation, driven by impact."
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <SocialIcons variant="footer" className="mb-4" />
            
            <div className="text-gray-400 text-sm">
              <p>Phone: +91 8328669439</p>
              <p>Email: omkarratnala2565@gmail.com</p>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;