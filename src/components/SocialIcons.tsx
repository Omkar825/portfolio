import React from 'react';
import { Linkedin, Github, PhoneCall, Mail } from 'lucide-react';

interface SocialIconsProps {
  variant?: 'landing' | 'footer';
  className?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ 
  variant = 'landing',
  className = ''
}) => {
  const iconSize = 24;
  
  const iconClass = variant === 'landing' 
    ? 'text-white hover:text-primary-200 transition-colors duration-300'
    : 'text-gray-300 hover:text-white transition-colors duration-300';
  
  return (
    <div className={`flex space-x-6 ${className}`}>
      <a 
        href="https://www.linkedin.com/in/omkar-anjaneya-kumar/" 
        target="_blank" 
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="LinkedIn"
      >
        <Linkedin size={iconSize} />
      </a>
      <a 
        href="https://github.com/Omkar825" 
        target="_blank" 
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="GitHub"
      >
        <Github size={iconSize} />
      </a>
      
      {variant === 'footer' && (
        <>
          <a 
            href="tel:+918328669439" 
            className={iconClass}
            aria-label="Phone"
          >
            <PhoneCall size={iconSize} />
          </a>
          <a 
            href="mailto:omkarratnala2565@gmail.com" 
            className={iconClass}
            aria-label="Email"
          >
            <Mail size={iconSize} />
          </a>
        </>
      )}
    </div>
  );
};

export default SocialIcons;