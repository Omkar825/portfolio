import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Award, FileText, Lightbulb } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const achievementsData: Achievement[] = [
  {
    id: "launchpad",
    title: "Finalist @ Launchpad '25, BITS Pilani",
    description: "Green Guardian GO project was selected as a finalist in this prestigious competition.",
    icon: <Award size={24} className="text-accent-500" />
  },
  {
    id: "ras-showcase",
    title: "Winner @ RAS Project Showcase",
    description: "Dual Mode Robotic Arm project won first place at the IEEE Robotics and Automation Society showcase.",
    icon: <Award size={24} className="text-accent-500" />
  },
  {
    id: "patents",
    title: "Patents",
    description: "Stair Bottle, Laptop Stand - Both products received patent recognition for their innovative designs.",
    icon: <Lightbulb size={24} className="text-accent-500" />
  },
  {
    id: "publication",
    title: "Research Publication",
    description: "G. D, P. S. Kumar S, O. A. Kumar R, V. V. V and D. N. V, \"IoT Enabled Device-to Device Communication for Smart City Application,\" ICICNIS 2024. DOI: 10.1109/ICICNIS64247.2024.10823329",
    icon: <FileText size={24} className="text-accent-500" />
  }
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-white text-justify">
      <div className="section-container">
        <SectionTitle title="Achievements" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((achievement, index) => (
            <div 
              key={achievement.id}
              className="card p-6 flex items-start gap-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex-shrink-0 mt-1">
                {achievement.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-800 mb-2">{achievement.title}</h3>
                <p className="text-gray-700">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;