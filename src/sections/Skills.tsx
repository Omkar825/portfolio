import React from 'react';
import SectionTitle from '../components/SectionTitle';

interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    skills: ["Python", "C", "C++", "HTML", "CSS", "JavaScript"]
  },
  {
    id: "data",
    title: "Data Visualization",
    skills: ["Power BI"]
  },
  {
    id: "tools",
    title: "Version Control & IDEs",
    skills: ["Git", "GitHub", "VS Code", "Google Colab", "Jupyter Notebooks"]
  },
  {
    id: "soft",
    title: "Soft Skills",
    skills: ["Leadership", "Time management", "Problem solving", "Teamwork", "Creativity", "Work-ethic", "Adaptability"]
  },
  {
    id: "courses",
    title: "Courses & Interests",
    skills: ["Generative AI", "Robotics", "DBMS", "OOPS", "DSA", "Software Dev", "Operating Systems", "Computer Networks", "Software Design", "Statistics", "Data Analytics"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="section-container">
        <SectionTitle title="Skills & Expertise" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, categoryIndex) => (
            <div 
              key={category.id} 
              className="card p-6"
              data-aos="fade-up" 
              data-aos-delay={categoryIndex * 100}
            >
              <h3 className="text-xl font-semibold text-primary-800 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={`${category.id}-${skillIndex}`} 
                    className="badge"
                    data-aos="zoom-in" 
                    data-aos-delay={categoryIndex * 100 + skillIndex * 50}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
