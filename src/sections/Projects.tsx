import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  link?: string;
}

const projectsData: Project[] = [
  {
    id: "robotic-arm",
    title: "Dual Mode Robotic Arm",
    description: "Manual + autonomous robotic arm for precision tasks; demoed live at tech fairs. Implemented both manual control and computer vision for autonomous operation.",
    images: ["/robo-1.jpeg", "/robo-2.jpeg"],
    link: "https://dual-mode-robotic-arm.netlify.app/"
  },
  {
    id: "green-guardian",
    title: "Green Guardian GO",
    description: "AI-based RVM system with plastic detection, reward mechanism, and mobile integration. Developed for sustainable waste management and recycling incentivization.",
    images: ["/GGG.jpeg", "/GGG DESIGN - .png"],
    link: "https://green-guardian-go.netlify.app/"
  },
  {
    id: "attendance-system",
    title: "Smart Attendance System",
    description: "Facial recognition attendance system using MongoDB, OpenCV; scalable for schools. Implemented real-time facial detection and database integration for record keeping.",
    images: ["https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    link: "#"
  },
  {
    id: "stair-bottle",
    title: "Stair Water Bottle",
    description: "Ergonomic bottle patented for stair users; recognized in innovation contests. Designed a unique bottle shape that accommodates placement on stairs without tipping.",
    images: ["/bottle.png", "/bottle.png"],
    link: "https://stair-water-bottle.netlify.app/"
  }
];

const Projects: React.FC = () => {
  const [currentIndexes, setCurrentIndexes] = useState<number[]>(projectsData.map(() => 0));

  const handlePrev = (projectIdx: number) => {
    setCurrentIndexes((prev) => {
      const newIndexes = [...prev];
      newIndexes[projectIdx] = (newIndexes[projectIdx] - 1 + projectsData[projectIdx].images.length) % projectsData[projectIdx].images.length;
      return newIndexes;
    });
  };

  const handleNext = (projectIdx: number) => {
    setCurrentIndexes((prev) => {
      const newIndexes = [...prev];
      newIndexes[projectIdx] = (newIndexes[projectIdx] + 1) % projectsData[projectIdx].images.length;
      return newIndexes;
    });
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="section-container text-justify">
        <SectionTitle title="Featured Projects" />
        
        <div className="space-y-16">
          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              {/* Project Image Slider */}
              <div className={index % 2 === 0 ? "order-1 md:order-1" : "order-1 md:order-2"}>
                <div className="relative rounded-lg overflow-hidden shadow-lg h-64 bg-white flex items-center justify-center">
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-1 z-10 hover:bg-gray-300"
                    onClick={() => handlePrev(index)}
                    aria-label="Previous image"
                  >
                    &#8592;
                  </button>
                  <img 
                    src={project.images[currentIndexes[index]]} 
                    alt={project.title}
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                  />
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-1 z-10 hover:bg-gray-300"
                    onClick={() => handleNext(index)}
                    aria-label="Next image"
                  >
                    &#8594;
                  </button>
                </div>
              </div>
              
              {/* Project Info */}
              <div className={index % 2 === 0 ? "order-2 md:order-2" : "order-2 md:order-1"}>
                <h3 className="text-2xl font-semibold text-primary-800 mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-primary-600 hover:text-primary-800 transition-colors duration-300"
                  >
                    <span className="mr-1">View Project</span>
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
