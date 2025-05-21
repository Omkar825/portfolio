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
              From the earliest days of my education, I’ve been driven by a deep curiosity about how things work and more importantly, how they can work better. What began as a fascination with logical puzzles and mechanical devices gradually evolved into a passion for engineering solutions that blend intelligence, empathy, and real-world impact.
            </p>
            <p className="mb-6">Pursuing a B.Tech in Computer Science Engineering at Kalasalingam Academy of Research and Education has been more than just an academic path it’s been a launchpad for transformation. I’ve spent these years not only learning to code, build systems, and analyze data, but more importantly, learning how to think. With every challenge, from debugging hundreds of lines of code to refining a machine learning model for sustainability, I’ve grown more patient, more resilient, and more excited about the endless possibilities of technology.
            </p>
            <p className="mb-6">My learning process is grounded in experimentation and iteration. Whether building AI-integrated systems or designing patented ergonomic solutions, I’ve always believed that true innovation comes from observing the world closely, listening deeply, and building slowly layer by layer with care and intention.
            </p>
            <p className="mb-6">Along the way, I’ve immersed myself in a wide array of technologies, from Python and Power BI to robotics and data analytics. I’ve led teams, collaborated across disciplines, and showcased ideas on competitive stages. But what I value most is not the accolades it’s the late nights spent stuck on a problem, the breakthroughs that come from persistence, and the small moments when a concept finally clicks into place.
            </p>
            <p className="mb-6">At my core, I’m someone who learns through doing, grows through reflection, and builds with purpose. My journey is far from over, and I’m excited for what comes next not just for what I can create, but for who I’ll become along the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
