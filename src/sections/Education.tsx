import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { GraduationCap, BookOpen, School } from 'lucide-react';
import { motion } from 'framer-motion';

interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  result: string;
  icon: React.ReactNode;
}

const educationData: EducationItem[] = [
  {
    id: 1,
    institution: "Kalasalingam Academy of Research and Education",
    degree: "B.Tech in Computer Science Engineering",
    duration: "2022 – 2026",
    result: "CGPA: 8.2",
    icon: <GraduationCap size={28} className="text-primary-600" />
  },
  {
    id: 2,
    institution: "Tirumala Educational Institutions",
    degree: "Class XII (MPC)",
    duration: "2020 – 2022",
    result: "92.7% | JEE Mains: 93 percentile",
    icon: <BookOpen size={28} className="text-primary-600" />
  },
  {
    id: 3,
    institution: "Montessori's English Medium School",
    degree: "10th Standard (SSC)",
    duration: "2019 – 2020",
    result: "95.3%",
    icon: <School size={28} className="text-primary-600" />
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="section-container">
        <SectionTitle title="Education" />
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div 
                key={item.id} 
                className="card p-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 flex items-start justify-center md:justify-start">
                    <motion.div 
                      className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.icon}
                    </motion.div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold text-primary-800 mb-2">{item.institution}</h3>
                    <p className="text-lg text-gray-700 mb-2">{item.degree}</p>
                    <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
                      <p className="text-gray-600">{item.duration}</p>
                      <p className="font-medium text-primary-600">{item.result}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;