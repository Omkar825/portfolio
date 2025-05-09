import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const ScrollDownIcon: React.FC = () => {
  return (
    <Link
      to="introduction"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="scroll-down"
    >
      <div className="flex flex-col items-center">
        <span className="text-sm mb-2 opacity-80">Scroll Down</span>
        <ChevronDown size={30} className="animate-scroll-down" />
      </div>
    </Link>
  );
};

export default ScrollDownIcon;