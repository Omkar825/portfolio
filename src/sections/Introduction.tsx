import React from 'react';
import SectionTitle from '../components/SectionTitle';

const Introduction: React.FC = () => {
  return (
    <section id="introduction" className="py-20 bg-white">
      <div className="section-container">
        <SectionTitle title="About Me" />
        
        <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          <div className="text-lg text-gray-700 leading-relaxed text-justify">
            <p className="mb-6">
              A highly motivated and detail-oriented Computer Science Engineering student with a strong foundation in 
              software development, data analysis, and emerging technologies such as Generative AI and robotics.
            </p>
            <p className="mb-6">
              Demonstrated leadership and innovation through successful projects including a dual-mode robotic arm and 
              Green Guardian Go. Adept at problem-solving, teamwork, and continuous learning with a proven track 
              record in academic and tech competitions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;