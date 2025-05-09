import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="mb-12 relative" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-800">
        {title}
      </h2>
      <div className="mt-3 flex justify-center">
        <div className="h-1 w-20 bg-accent-500 rounded"></div>
      </div>
    </div>
  );
};

export default SectionTitle;